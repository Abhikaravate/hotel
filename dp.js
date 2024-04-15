const mongoose = require('mongoose');

const url ='mongodb://localhost:27017/Abhi'

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