const mongoose = require('mongoose');

require('dotenv').config()
//const url ='mongodb://localhost:27017/Abhi'
const url = process.env.URL;



mongoose.connect( url , {
    useNewUrlParser : true ,
     useUnifiedTopology : true 
}
)

const db = mongoose.connection;

// event listeners

db.on('connected' , () =>{
    console.log('connected to database');
})

db.on('disconnected' , () =>{
    console.log('disconnected to database');
})

db.on('error' , (err) =>{
    console.log('error in  database');
})

//export 
module.exports=db;