import React, { useState } from "react";
let p={
  background:"skyblue",
  width : "500px",
  height : "500px",
  marginLeft : "auto",
  marginRight:"auto"
}
let h={
  color:"red",
  fontSize:"30px"
}
function Fruits() {
  const arr = ["Apple", "Banana", "Orange", "Pineapple", "Mango", "Watermelon"];

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [fruit, setFruits] = useState(arr);

  const searchFruits = (q) => {
    const search = q.toLowerCase();
    const filteredFruits = arr.filter((fruit) =>
      fruit.toLowerCase().includes(search)
    );
    setFruits(filteredFruits);
  };

  return (
    <div style={p}>
      <label style={{color:"black",fontSize:"30px"}}>Search : </label>
      <input type="text" placeholder="Search for Fruits" onChange={(e) => searchFruits(e.target.value)} style={{width:"300px",height:"50px",color:"orange",fontSize:"25px"}}/>
      <div className="arr" style={h}>
        {fruit.map((e) => (
          <p key={e}>{capitalizeFirstLetter(e)}</p>
        ))}
      </div>
    </div>
  );
}

export default Fruits;
