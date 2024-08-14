const express= require('express');
const cors  = require('cors');
const app   =express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.post('/register',(req,res) => {
    const {username,password} = req.body;
res.json({requestData:{username,password}});
});


app.listen(4000)


/*MongoDB LOGIN INFO------->>>>>> 
Login username: carolwargo 
password: 8DyaILn1LnL4Ttql*/

/*CONNECTION STRING WITH PASSWORD------->>>>>>
mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.llebq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/