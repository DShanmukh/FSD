import { useState } from "react";
import axios from "axios";
import "./Login.css"
function Signup(){
  const[formdata,setFormdata]=useState({
    'name':'',
    'sname':'',
    'email':'',
    'pword':'',
    'phone':'',
  })
  const hand=(e)=>{
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:4000/Signup',{formdata})
    .then((res)=> console.log(res.data))
  }
  return(
    <center>
      <div className="p">
        <h1><i>Signup</i></h1>
      <form onSubmit={hand} style={{lineHeight:"40px",textAlign:"center"}}>
        NAME :<input type="text" placeholder="enter your name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})} style={{marginLeft:"48px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        Surname :<input type="text" placeholder="enter your name" onChange={(e)=>setFormdata({...formdata,sname:e.target.value})} style={{marginLeft:"36px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        Email :<input type="email" placeholder="enter your name" onChange={(e)=>setFormdata({...formdata,email:e.target.value})} style={{marginLeft:"53px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        Password :<input type="password" placeholder="enter your name" onChange={(e)=>setFormdata({...formdata,pword:e.target.value})} style={{marginLeft:"34px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        Phoneno :<input type="tel" placeholder="enter your name" onChange={(e)=>setFormdata({...formdata,phone:e.target.value})} style={{marginLeft:"30px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        <input type="submit" value="submit" className="in1"/>
      </form>
    </div>
    </center>
  );
}
export default Signup;