const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Mongoose import added
const User = require('./models/User'); // User model import added
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({username, password});
  res.json(userDoc);
});


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});



/*MongoDB LOGIN INFO------->>>>>> 
Login username: carolwargo 
password: 8DyaILn1LnL4Ttql*/

/*CONNECTION STRING WITH PASSWORD------->>>>>>
mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/