seedDatabase();require('../dotenv').config();  // Load environment variables
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');

dotenv.config();  // Load environment variables
  
  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB for seeding'))
    .catch(err => {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1);  // Exit the process if connection fails
    });

  // Seed data
  const users = [
    {
      username: 'admin',
      password: 'adminpass', // You might want to hash this password in real scenarios
    },
    {
      username: 'john_doe',
      password: 'password123', // You might want to hash this password in real scenarios
    },
    {
      username: 'jane_doe',
      password: 'password456', // You might want to hash this password in real scenarios
    },
    // Add more users as needed
  ];
   

const posts = [

  {
    title: '1st Post',
    summary: 'This is the summary of the first post.',
    content: 'Here is some content for the first post.',
    cover: 'cover1.jpg',
    author: 'john_doe', // Reference to a username, will be mapped to an ID
  },
  {
    title: '2nd Post',
    summary: 'This is the summary of the second post.',
    content: 'Here is some content for the second post.',
    cover: 'cover2.jpg',
    author: 'jane_doe', // Reference to a username, will be mapped to an ID
  },
  {
    title: '3rd Post',
    summary: 'This is the summary of the third post.',
    content: 'Here is some content for the third post.',
    cover: 'cover3.jpg',
    author: 'john_doe', // Reference to a username, will be mapped to an ID
  },
  {
    title: '4th Post',
    summary: 'Summary of the 4th post',
    content: 'Content of the 4th post',
    cover: 'path/to/cover/image', // Ensure this path is accessible or use a default
    author: 'admin', // Reference to a User ID, should be matched
  }
];

 // Function to seed the database
 const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});


    
      // Insert seed data
      const createdUsers = await User.insertMany(users);
      const userMap = createdUsers.reduce((map, user) => {
        map[user.username] = user._id;
        return map;
      }, {});
  
      const postsWithUserIds = posts.map(post => ({
        ...post,
        author: userMap[post.author],
      }));
  
      await Post.insertMany(postsWithUserIds);
  
      console.log('Database seeded successfully!');
    } catch (err) {
      console.error('Error seeding the database:', err);
    } finally {
      mongoose.connection.close();
      process.exit(0);  // Exit the process after seeding
    }
  };
  
  seedDatabase();
