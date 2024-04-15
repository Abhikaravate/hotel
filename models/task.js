const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
   // "title," "description," "priority," and "dueDate.
    title:{
        type:String ,
        require:true

    },
    description:{
        type:String 

    },
    priority:{
        type:String,
        enum:['low','high','medium'],
        default:'low'
    },
    dueDate:{
        type:Date,
        require:true

    }
})
    const task = mongoose.model('',taskSchema);
    module.exports = task;

