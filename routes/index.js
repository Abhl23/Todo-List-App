// requiring the express library
const express=require('express');

// setting up the express router
const router=express.Router();

console.log('Router is loaded.');

// importing the controller for the tasks
const tasksController=require('../controllers/tasks_controller');

// handling the route/path of the URL for the home page
router.get('/', tasksController.home);

// handling the path/route for the post request of the create task form, thus creating a task in the database
router.post('/create-task', tasksController.create);

// handling the path/route for the post request of the delete tasks form, thus deleting task/tasks from the database
router.post('/delete-tasks', tasksController.deleteMultiple);

// handling the route/path of the URL for the get request from the cross icon to delete a single task from the database
router.get('/delete-single-task', tasksController.deleteSingle);

// exporting the express router so it can be used in the index.js file
module.exports=router;