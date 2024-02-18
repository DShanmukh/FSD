import  express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./user";
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://Shanmukh:Sha9fOMnpU5fAcFm@cluster0.vmo857f.mongodb.net/DATA?retryWrites=true&w=majority')
.then(() => app.listen(4000))
.then(() =>
console.log("Connected to Localhost 5000")
)
.catch((err) => console.log(err));
app.post("/adduser",(req,res,next)=>{
  console.log(req.body.formdata);
  const {username,password} = req.body.formdata
  const User = new user({
    username,
    password
  }

  )
  try{
    User.save()
  }
  catch(err){
    console.log(err)
  }
  return res.send({msg:"inserted",result:User})
})
