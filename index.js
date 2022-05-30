const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const port=8000;

const db=require('./config/mongoose.js');
const Task=require('./models/task.js');

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended:false}));

const bgColor={
    'Personal' : '#34a853',
    'Work' : '#9c27b0',
    'School' : '#fbbc05',
    'Cleaning' : '#4285f4',
    'Other' : '#ff5722'
};

app.get('/', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error while fetching tasks from the database');
            return;
        }

        res.render('home', {
            tasks : tasks,
            bg_color : bgColor
        });
    });
});

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

app.get('/delete-single-task', function(req, res){
    Task.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log('Error while deleting the task from the database');
            return;
        }

        return res.redirect('back');
    });
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:', err);
        return;
    }

    console.log('Server is up and running at port:', port);
});