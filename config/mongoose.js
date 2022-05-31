// requiring the mongoose library
const mongoose=require('mongoose');

// connecting to the todo_list_db database inside the mongoDB server
mongoose.connect('mongodb://localhost:27017/todo_list_db');

// acquiring the connection to further check if the connection is successful or not
const db=mongoose.connection;

// Error handling on the connection
db.on('error', console.error.bind(console, 'Connection error: '));

// If successfully connected print the message on the terminal
db.once('open', function(){
    console.log('Successfully connected to the database');
});