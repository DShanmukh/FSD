function Form(){
  const [formdata,setFormdata] =useState({
    username,
    password
  })
  const handle =(e)=>{
    e.preventDefault();
        console.log(formdata)
        axios.post("http://localhost:4000/adduser",{formdata})
        .then((res) => console.log(res.data))
  }
  return(
    <form onSubmit={handle}>
    <input type="text" placeholder="User Name" name="username"onChange={(e)=> setform({...formdata,username:e.target.value})}/>
    <input type="password" placeholder="User Name" name="password"onChange={(e)=> setform({...formdata,password:e.target.value})}/>
    <input type="submit"/>
    </form>
  );
}
export default Form