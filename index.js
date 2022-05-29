const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('assets'));

const tasks=[
    {
        task_name : "Get Baked",
        due_date : "12345",
        task_done : false
    },
    {
        task_name : "Get Stoned",
        due_date : "67890",
        task_done : false
    }
];

app.get('/', function(req, res){
    return res.render('home');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server: ', err);
        return;
    }

    console.log('Server is up and running at port: ', port);
});