import mongoose from "mongoose";
const Schema=mongoose.Schema;
let user = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  pass:{
    type: String,
    required : true
  }
})
export default mongoose.model("user",user);