function Student(){
  let k='Shanmukh';
  let s={
    color:"royalblue",
    fontSize:"50px"
  }
  return(
    <div>
      <h1 style={s}>This is {k}</h1>
    </div>
  );
}
export default Student;