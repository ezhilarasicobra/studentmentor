const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
  name:{
type:String,
required:true
  },
  mentorname:{
    type:String,
    required:true
  }
})
module.exports=mongoose.model('studentdetails',studentSchema)