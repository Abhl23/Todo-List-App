/* --------------- 
        Innovative functionality =>

            Added a cross icon to every task inside the todo-list allowing the user to 
            individually delete tasks from the database.

--------------- */

// Requiring the express library
const express=require('express');

// requiring the body-parser library to parse the data sent from the forms present on the frontend
const bodyParser=require('body-parser');

// defining the port number at which the express server would be running 
const port=8000;

// importing the mongoose.js file from the config folder
const db=require('./config/mongoose.js');

// Firing up the express server and storing its functionalities in the object 'app'
const app=express();

// using the middleware to set the view engine to ejs in the app object
app.set('view engine', 'ejs');

// setting the path of views folder containing the ejs file
app.set('views', './views');

// setting the directory containing the static files
app.use(express.static('assets'));

// using the body-parser library to decode the data sent from the browser in post requests
app.use(bodyParser.urlencoded({extended:false}));

// use the express router for handling every route
app.use('/', require('./routes/index'));

// running the server at the specified port number
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:', err);
        return;
    }

    console.log('Server is up and running at port:', port);
});