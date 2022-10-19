const router = require('express').Router();
const {createWorkout,getWorkout,getallWorkout,deleteWorkout,updateWorkout} = require('../controller/workoutController');

//Get  all workouts
router.get('/',getallWorkout);

//Get a single workout;

router.get('/:id',getWorkout);

//post a new workout
router.post('/',createWorkout)

//Delete
router.delete('/:id',deleteWorkout);

//Update
router.patch('/:id',updateWorkout); 

module.exports = router;