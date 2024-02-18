function Events1(){
  function get(a){
    console.log(a.target.name+"value is : "+a.target.value)
  }
  return(
    <div>
      <h1>Input Events</h1>
      <input type="text" name="firstname" onChange={ get}/>
    </div>
  );
} 
export default Events1;