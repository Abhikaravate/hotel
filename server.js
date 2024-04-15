const express = require('express')
const app = express();

const db = require('./dp');const bodyParser = require('body-parser');
app.use(bodyParser.json());

//require('dotenv').config();
//const PORT = process.env.PORT || 3001;

 

const task = require('./models/task');

//main http
app.get('/' , function(req , res) {
    res.send('Hi this is my 1st server and Welcome to our hotel')
});

//routers
const personRouter = require('./routers/Personrouter');
app.use('/person', personRouter);

const Menurouter = require('./routers/Menurouter');
app.use('/menu' ,Menurouter);
 


app.get('/task', async (req , res) =>{
    try {
        const data = await task.find();
        res.status(201).json(data);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
        
    }

})

app.post('/task',async (req , res)=>{
    try {
        const data = req.body;
       const newTask = new task(data);
       const responce = await newTask.save();
       console.log('data Saved');
       res.status(200).json(responce);   
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
        
        
    }
});



app.listen(3001 , () => {
    console.log('Server is start');
});
