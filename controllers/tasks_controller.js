// importing the model "Task"
const Task=require('../models/task');

// action for rendering the home page
module.exports.home=function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error while fetching tasks from the database');
            return;
        }

        return res.render('home', {
            tasks : tasks
        });
    });
};

// action for creating a task in the database
module.exports.create=function(req, res){
    Task.create(req.body, function(err, newTask){
        if(err){
            console.log('Error while creating a task');
            return;
        }

        console.log(newTask);
        return res.redirect('back');
    });
};

// action for deleting multiple tasks from the database
module.exports.deleteMultiple=function(req, res){
    for(let i in req.body){
        Task.findByIdAndDelete(req.body[i], function(err){
            if(err){
                console.log('Error while deleting the task from the database');
                return;
            }
        });
    }
    return res.redirect('back');
};

// action for deleting a single task from the database
module.exports.deleteSingle=function(req, res){
    Task.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log('Error while deleting the task from the database');
            return;
        }

        return res.redirect('back');
    });
};