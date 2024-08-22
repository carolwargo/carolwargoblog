require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as necessary
const Post = require('./models/Post'); // Adjust path as necessary

const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'john_doe', password: 'password3' },
  { username: 'jane_doe', password: 'password4' },
  { username: 'jane_doe', password: 'password5' },
    { username: 'josh_doe', password: 'password6' },
    { username: 'jake_doe', password: 'password7' },
];

const posts = [
  { title: 'Sample Post', summary: 'This is a sample post.', content: 'Content of the sample post.' },
  { title: '2nd Post', summary: 'This is the summary of the second post.', content: 'Here is some content for the second post.', cover: 'cover2.jpg', author: 'jane_doe' },
  { title: '3rd Post', summary: 'This is the summary of the third post.', content: 'Here is some content for the third post.', cover: 'cover3.jpg', author: 'john_doe' },
  { title: '4th Post', summary: 'ADMIN POST- Summary of the 4th post', content: 'Content of the 4th post', cover: 'path/to/cover/image', author: 'admin' }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    await User.deleteMany({});
    await Post.deleteMany({});

    await User.insertMany(users);
    await Post.insertMany(posts);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();