const express = require('express');
const dotenv = require('dotenv')

const connectMongoDb = require('./config/connection')
connectMongoDb()

const workoutRoutes =require('./routes/workouts')

//express app
const app = express()
dotenv.config()

app.use(express.json());

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/',workoutRoutes)


const PORT = process.env.PORT || 3000;
//listen for request
app.listen(PORT, () =>{
    console.log(`listeneing on port ${PORT}`)
})
