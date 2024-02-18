
function  Event(){
  function get(Name){
    // for(let i=0;i<trainee.length;i++)
    // {
    //   document.write("<br>"+Object.values(trainee[i]) +"<br><br>")
    // }
    Name.map((ele,i) => {
      document.write(i+1 +"."+ele.name+"  "+ele.rollnumber+"<br>")
    });
  }
  let s={
    color:"white",
    background:"blue",
  }
  let trainee=[{
    name:"Shanmukh ",
    rollnumber : "21A91A04K0"
  },
  {
    name:"Sai ",
    rollnumber : "21A91A04M7"
  }]
  return(
    <div >
      <h1>Event</h1>
      <button style={s} onClick={() => get(trainee)}>Click Me..!</button>
    </div>
  );
}
export default Event;