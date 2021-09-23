const { application } = require('express')
const express=require('express')
const router=express.Router()
const Mentor=require('../models/mentor')

//create a mentor

router.post('/create',async(req,res)=>{
  try {
    const mentor = new Mentor({mentorname:req.body.mentorname,assignedstudentlist:req.body.assignedstudentlist})
    const assignmentor=await mentor.save();
    res.status(201).json(assignmentor)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
  })
//assign a student to mentor

//to show all mentors with students
router.get('/displayallmentors',async(req,res)=>{

  try {
   const allmentors=await Mentor.find()
   res.status(201).json(allmentors)

  } catch (error) {
    res.status(500).json({message:error.message})
  }
})




module.exports=router;