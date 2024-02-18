import mongoose from "mongoose";
const Schema = mongoose.Schema;
let Signup =new Schema({
  name:{
    type: String,
    required : true
  },
  sname:{
    type:String,
    required : true
  },
  email:{
    type:String,
    required: true
  },
  pword:{
    type:String,
    required: true
  },
  phone:{
    type:String,
    required: true
  }
})
export default mongoose.model('Singup',Signup);