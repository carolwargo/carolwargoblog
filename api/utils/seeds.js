require('dotenv').config();  // Load environment variables
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');

const users = [
  { username: 'admin', password: 'adminpass' },
  { username: 'john_doe', password: 'password3' },
  { username: 'jane_doe', password: 'password4' },
  { username: 'jane_doe', password: 'password5' },
    { username: 'josh_doe', password: 'password6' },
    { username: 'jake_doe', password: 'password7' },
];

const posts = [
  { title: '1st Post', summary: 'This is the summary of the first post.', content: 'Here is some content for the first post.', cover: 'cover1.jpg', author: 'john_doe' },
  { title: '2nd Post', summary: 'This is the summary of the second post.', content: 'Here is some content for the second post.', cover: 'cover2.jpg', author: 'jane_doe' },
  { title: '3rd Post', summary: 'This is the summary of the third post.', content: 'Here is some content for the third post.', cover: 'cover3.jpg', author: 'john_doe' },
  { title: '4th Post', summary: 'ADMIN POST- Summary of the 4th post', content: 'Content of the 4th post', cover: 'path/to/cover/image', author: 'admin' }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for seeding');

    await User.deleteMany({});
    await Post.deleteMany({});

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
