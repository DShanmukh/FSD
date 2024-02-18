import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import Login from "./Login";
import Signup from "./Signup";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb+srv://Shanmukh:21A91A04K0@cluster0.8na2ngs.mongodb.net/Users?retryWrites=true&w=majority')
  .then(() => app.listen(4000))
  .then(() => console.log("Hi"))
  .catch((err) => console.log(err));

app.post("/Login", (req, res, next) => {
  console.log(req.body.formdata);
  const { name, email, pass } = req.body.formdata; // Fix the typo here
  const Users = new Login({
    name,
    email,
    pass,
  });
  try {
    Users.save();
  } catch (err) {
    console.log(err);
  }
  return res.send({ msg: "uploaded", result: Users });
});
app.post("/Signup",(req,res,next) =>{
  console.log(req.body.formdata);
  const {name,sname,email,pword,phone} = req.body.formdata;
  const Sin = new Signup({
    name,
    sname,
    email,
    pword,
    phone
  });
  try{
    Sin.save();
  }
  catch(err){
    console.log(err);
  }
  return res.send({msg: "Uploaded",result: Sin})
});
app.post("/addForm1",(req,res,next)=>{
  console.log(req.body.formdata)
  const {name,email,pass} = req.body.formdata
  const User = new nodemails({
    name,
    email,
    pass
  }

  )
  try{
    User.save()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shanmukhduvvuri@gmail.com',
        pass: 'xwab wwxa ssmj zwdw'
      }
    });
    
    var mailOptions = {
      from: 'shanmukhduvvuri@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: "Thanks for signin {name}"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);}
    });
  }
  catch(err){
    console.log(err)
  }
  
  // return res.send({msg:"inserted",result:User})
})
