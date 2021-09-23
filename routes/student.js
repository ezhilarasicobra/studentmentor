const express=require('express')
const mentor = require('../models/mentor')
const router=express.Router()
const Student=require('../models/student')

//to create a student
router.post('/create',async(req,res)=>{
try {
  const student = new Student({name:req.body.name,mentorname:req.body.mentorname})
  const addstudent=await student.save()
  res.status(201).json(addstudent)
} catch (error) {
  res.status(400).json({message:error.message})
}
})
//to update a mentor for a student
router.patch('/updatementor/:id',updatementor,async (req,res)=>{
  if(req.body.name!=null){
res.upadtedmoentor.name=req.body.name
  }
  if(req.body.mentorname!=null){
    res.upadtedmoentor.mentorname=req.body.mentorname
      }
      
try {
  const mentorupadted=await res.upadtedmoentor.save()
  res.json(mentorupadted)
} catch (error) {
  res.status(400).json({message:error.message})
}
})

async function updatementor(req,res,next){
  let upadtedmoentor
  try {
    upadtedmoentor=await Student.findById(req.params.id)
    if(upadtedmoentor==null)
    {
      return res.status(404).json({message:"mentor not found"})
    }
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
  res.upadtedmoentor=upadtedmoentor
  next()
}



module.exports=router;