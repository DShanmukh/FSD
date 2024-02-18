import {useState} from "react";
import axios from "axios";
import "./Login.css";
const Login=()=>{
  const[formdata,setFormdata]=useState({
    'name': ' ',
    'email': ' ',
    'pass':' '
  })
  const handle=(e)=>{
    e.preventDefault();
    console.log(formdata);
    axios.post("http://localhost:4000/Login",{formdata})
    .then((res) => console.log(res.data))
  }
  const fun = () => {
    alert("uploaded successfully");
  }
  const close = () =>{
    document.body.style.display = 'hidden'
  }
  return(
    <center>
      <div className="p">
      <h2><i>LoginForm</i></h2>
      <button onClick={close}>X</button>
      <form style={{lineHeight:"40px"}} onSubmit={handle}>
        <b>NAME :</b> <input type="text" placeholder="enter your name :" required onChange={(e)=>setFormdata({...formdata,name:e.target.value})} style={{marginLeft:"37px", width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}} id='n'/><br/>
        <b>Email : </b><input type="Email" placeholder="enter your email :" required onChange={(e)=>setFormdata({...formdata,email:e.target.value})} style={{marginLeft:"39px" , width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}} /><br/>
        <b>Password :</b><input type="tel" placeholder="enter your Password:" required onChange={(e)=>setFormdata({...formdata,pass:e.target.value})} style={{marginLeft:"27px" , width:"250px",height:"25px" ,borderRadius:"30px",border:"none"}}/><br/>
        <input value="submit" type="submit"  onClick={fun}/>
      </form>
    </div>
    </center>
  );
}
export default Login;