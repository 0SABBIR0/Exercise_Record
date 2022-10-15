require('dotenv').config()
const express=require('express');
const workoutRoutes = require('./routes/workouts');
//express app
const app = express();
//Middleware

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
//Route
app.get('/',(req,res)=>{
    res.json({mssg:'Hello World'});
});

// Listen For Request
app.listen(process.env.PORT,()=>{
    console.log('Server Running on Port',process.env.PORT)
}); 