const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const User= require('./models/User');
const Post= require('./models/Post');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const cookieParser= require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: './uploads'});  
const fs = require('fs');
const app= express();

const salt = bcrypt.genSaltSync(10);
const secret = '  8DyaILn1LnL4Ttql';
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
//or app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const userDoc = await User.create({ 
        username, 
        password:bcrypt.hashSync(password, salt),
    });
      res.json(userDoc);
    } catch (error) {
      res.status(500).json({ error: 'Register Internal Server Error' });
    }
  });
  

  app.post('/login', async (req, res) => {
      const { username, password } = req.body;
      const userDoc = await User.findOne({ username });
const passOk = bcrypt.compareSync(password, userDoc.password);
     
if (!passOk) {
  jwt.sign({ username_id: userDoc._id }, secret, {}, (err, token) => {
     if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          username,
        });
        });
        } else {
            res.status(401).json({ error: 'Login Failed' });
            }
        }
        );
  app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);

        });
    });


app.post('/logout', (req, res) => {
    res.clearCookie('token', '').json('ok');
});


app.post('/post',uploadMiddleware.single('file'), 
async (req, res) => {
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, path+'.'+ext);

const {token}= req.cookies;
jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author:info.id,
    });

  res.json({postDoc})
    });
}
);

app.get('/post', async (req, res) => {
  res.json(await Post.find()
  .populate('author', ['username'])
.sort({createdAt: -1})
.limit(10));
});

app.listen(4000)

/**1:36 https://video.search.yahoo.com/search/video?fr=mcafee&p=blog+basics+mern+stack&type=E211US105G0#id=2&vid=e16d27fb755687c16e7efb8b0f3cca72&action=view */