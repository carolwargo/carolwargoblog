require('dotenv').config();  // Load environment variables at the top
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();

// Set up multer for file uploads
const uploadMiddleware = multer({ dest: './uploads' });

// Define constants using environment variables
const salt = bcrypt.genSaltSync(10);
const secret = process.env.JWT_SECRET;  // Use secret from .env file

// Middleware setup
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// Database connection with detailed error handling
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit the application if the database connection fails
  });





// Error handling middleware for more detailed error messages
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log error stack trace for debugging
  res.status(500).json({ error: 'Internal Server Error' });
});

// Register route with detailed error handling
app.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }
    
    const hashedPassword = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({ username, password: hashedPassword });
    res.json(userDoc);
  } catch (e) {
    console.error('Error during registration:', e);
    next(e);  // Pass error to the error handling middleware
  }
});

// Login route with detailed error handling
app.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) {
        console.error('Error signing JWT:', err);
        return next(err);
      }
      res.cookie('token', token).json({ id: userDoc._id, username });
    });
  } catch (e) {
    console.error('Error during login:', e);
    next(e);
  }
});

// Profile route with detailed error handling
app.get('/profile', (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      console.error('JWT verification failed:', err);
      return res.status(403).json({ error: 'Invalid token' });
    }
    res.json(info);
  });
});

// Logout route
app.post('/logout', (req, res) => {
  res.cookie('token', '').json('Logged out');
});

// Create post route with detailed error handling
app.post('/post', uploadMiddleware.single('file'), async (req, res, next) => {
  try {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.status(403).json({ error: 'Invalid token' });
      }

      const { title, summary, content } = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: info.id,
      });
      res.json(postDoc);
    });
  } catch (e) {
    console.error('Error creating post:', e);
    next(e);
  }
});

// Update post route with detailed error handling
app.put('/post', uploadMiddleware.single('file'), async (req, res, next) => {
  let newPath = null;
  try {
    if (req.file) {
      const { originalname, path } = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path + '.' + ext;
      fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.status(403).json({ error: 'Invalid token' });
      }

      const { id, title, summary, content } = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(403).json({ error: 'You are not the author' });
      }

      await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
      res.json(postDoc);
    });
  } catch (e) {
    console.error('Error updating post:', e);
    next(e);
  }
});

// Fetch posts route with detailed error handling
app.get('/post', async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate('author', ['username'])
      .sort({ createdAt: -1 })
      .limit(20);
    res.json(posts);
  } catch (e) {
    console.error('Error fetching posts:', e);
    next(e);
  }
});

// Fetch single post route with detailed error handling
app.get('/post/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const postDoc = await Post.findById(id).populate('author', ['username']);
    if (!postDoc) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(postDoc);
  } catch (e) {
    console.error('Error fetching post:', e);
    next(e);
  }
});

// Catch-all error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Conditionally run seed script if SEED_DB environment variable is set
if (process.env.SEED_DB === 'true') {
  import('./utils/seeds.js')
    .then(() => {
      console.log('Seeding complete');
      process.exit(0);
    })
    .catch(err => {
      console.error('Error running seed script:', err);
      process.exit(1);
    });
} else {
  // Start the server with error handling
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}