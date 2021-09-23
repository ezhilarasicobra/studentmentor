const mongoose=require('mongoose')
const mentorSchema=new mongoose.Schema({
  mentorname:{
type:String,
required:true
  },
  assignedstudentlist:{
    type:Array,
    required:true,
    max:5
  }
})
module.exports=mongoose.model('mentordetails',mentorSchema)