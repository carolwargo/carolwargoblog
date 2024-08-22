require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');

const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'john', password: 'pass3' },
  { username: 'jane', password: 'pass4' },
  { username: 'josh', password: 'pass6' },
  { username: 'jake', password: 'pass7' },
];

const posts = [
  { title: 'Sample Post', 
    summary: 'This is a sample post.', 
    content: 'Content of the sample post.', 
    cover: 'cover.jpg' },
  { title: '1. First Post', 
    summary: 'This is a sample post.', 
    content: 'Content of the sample post.', 
    cover: '/client/src/assets/images/CityBG.png' },
  { title: '2. Second Post', 
    summary: 'This is a sample post.', 
    content: 'Content of the sample post.', 
    cover: '/client/src/assets/images/CityBG.png' },
  { title: '3. Third Post', 
    summary: 'This is a sample post.', 
    content: 'Content of the sample post.', 
    cover: '/client/src/assets/images/CityBG.png' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing collections
    await User.deleteMany({});
    await Post.deleteMany({});

    // Insert users and get user IDs
    const insertedUsers = await User.insertMany(users);
    const userMap = insertedUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    console.log('Users inserted:', insertedUsers);

    // Add author field to posts
    const postsWithAuthors = posts.map(post => ({
      ...post,
      author: userMap['admin'] // Replace with actual username if needed
    }));

    // Insert posts
    await Post.insertMany(postsWithAuthors);

    console.log('Posts inserted:', postsWithAuthors);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
