const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const User= require('./models/User');

const app= express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const userDoc = await User.create({ username, password });
      res.json(userDoc);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


app.listen(4000)
