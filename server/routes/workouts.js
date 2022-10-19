const router = require('express').Router();
const Workout = require('../models/workoutModel')

//Get  all workouts
router.get('/',(req,res) => {
    res.json({msg:'Get all Workouts'})
});

//Get a single workout;

router.get('/:id',(req,res)=>{
    res.json({msg:'single workout'});
})

//post a new workout
router.post('/',async (req,res)=>{
    const {title,reps,load} = req.body;
    try{
        const workout = await Workout.create({title,reps,load});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({msg:'post a new workout'});
})

//Delete
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete a workout'});
});

//Update
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update a workout'});
}); 

module.exports = router;