//  import logo from './logo.svg';
import './App.css';

function Home() {
  let s ={
    background : 'white',
    color : 'green',
    fontSize:"10px",
    border : "2px solid red",
    margin :"20px "
  }
  return (
    <div >
      <button style={s}>Click me...!</button>
    </div>
  );
}

export default Home;
