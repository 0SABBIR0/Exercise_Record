require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts'); 

//express app

const app = express();

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
});

//routes

app.use('/api/workouts',workoutRoutes); 
//Connecting to the database
mongoose.connect(process.env.Mongo_URL)
    .then(()=>{
        //listening part
        app.listen(process.env.PORT,()=>{
        console.log('Connected to db & listening on port',process.env.PORT);
        });
    })  
    .catch((error)=>{
        console.log(error);
    })
//listen part

