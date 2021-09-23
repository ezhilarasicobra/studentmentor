const path=require('path')
require('dotenv').config({path:path.resolve(__dirname,'./.env')})
const dbconnection=require('./db')
const express=require('express')
const app=express();
dbconnection();
const PORT=process.env.PORT
//set up server to accept json
app.use(express.json())

const studentroute=require('./routes/student')
app.use('/student',studentroute)
const mentorroute=require('./routes/mentor')
app.use('/mentor',mentorroute)





app.listen(PORT,()=>console.log(`App is listening on ${PORT}`))
