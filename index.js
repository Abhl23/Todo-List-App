/* --------------- 
        Innovative functionality =>

            Added a cross icon to every task inside the todo-list allowing the user to 
            individually delete tasks from the database.

--------------- */

// Requiring the express library
const express=require('express');

// requiring the path library to set the path of ejs file
const path=require('path');

// requiring the body-parser library to parse the data sent from the forms present on the frontend
const bodyParser=require('body-parser');

// defining the port number at which the express server would be running 
const port=8000;

// importing the mongoose.js file from the config folder
const db=require('./config/mongoose.js');

// importing the model "Task" from the models folder
const Task=require('./models/task.js');

// Firing up the express server and storing its functionalities in the object 'app'
const app=express();

// using the middleware to set the view engine to ejs in the app object
app.set('view engine', 'ejs');

// setting the path of views folder containing the ejs file
app.set('views', path.join(__dirname, 'views'));

// setting the directory containing the static files
app.use(express.static('assets'));

// using the body-parser library to decode the data sent from the browser in post requests
app.use(bodyParser.urlencoded({extended:false}));

// handling the route/path of the URL for the home page
app.get('/', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error while fetching tasks from the database');
            return;
        }

        res.render('home', {
            tasks : tasks,
        });
    });
});

// handling the path/route for the post request of the create task form, thus creating a task in the database
app.post('/create-task', function(req, res){
    Task.create(req.body, function(err, newTask){
        if(err){
            console.log('Error while creating a task');
            return;
        }

        console.log(newTask);
        return res.redirect('back');
    });
});

// handling the path/route for the post request of the delete tasks form, thus deleting task/tasks from the database
app.post('/delete-tasks', function(req, res){
    for(let i in req.body){
        Task.findByIdAndDelete(req.body[i], function(err){
            if(err){
                console.log('Error while deleting the task from the database');
                return;
            }
        });
    }
    return res.redirect('back');
});

// handling the route/path of the URL for the get request from the cross icon to delete a single task from the database
app.get('/delete-single-task', function(req, res){
    Task.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log('Error while deleting the task from the database');
            return;
        }

        return res.redirect('back');
    });
});

// running the server at the specified port number
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:', err);
        return;
    }

    console.log('Server is up and running at port:', port);
});