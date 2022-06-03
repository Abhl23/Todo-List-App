// requiring the mongoose libraray
const mongoose=require('mongoose');

// creating schema for todo list task document 
const taskSchema=new mongoose.Schema({
    task_name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    due_date : {
        type : Date,
        required : true
    }
});

// Setting up a collection called 'Task' and the schema it'll be following
const Task=mongoose.model('Task', taskSchema);

// exporting the model 'Task' so it can be used in other files
module.exports=Task;