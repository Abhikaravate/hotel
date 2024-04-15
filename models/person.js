const mongoose = require('mongoose')

const personSchema = new mongoose.Schema
 (
    {
        name:{
            type: String ,
            require: true 
        },
        age:{
            type: Number 
           
        },
        work:{
            type: String ,
            enum :['manager','waiter','chef'],
            require: true 
        },
        mobile:{
            type: String ,
            require: true
        },
        email:{
            type: String,
            unique: true,
            require: true
        }
        ,
        address:{
            type: String ,
            require: true

        }
        ,
        salary:{
            type: Number ,
            require: true
        }


    }
 )

 const Person = mongoose.model('Person',personSchema);
 module.exports = Person ;


