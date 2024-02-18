// import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Image from './image';
import Services from './services';
import Contact from './Contact';
  import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Menu from './menu';
import Student from './student';
import {trainee,a} from './person';
import Event from './events';
import Events1 from './Event1';
import NewPro from './newproduct';
function App() {
  console.log(trainee)
  console. log(a)
  return (
    <>
    {/* <Home/>
    <About/>
    <Services/>
    <Contact/> 
    <Image/> */}
    <center><div classname = "App">
      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/Event1" element={<Events1/>}/>
        <Route path="/newproduct"element={<NewPro/>}/>
        <Route path="/image" element ={<Image/>}/>
      </Routes>
      </BrowserRouter>
    </div></center>
    </>
    
  );
}

export default App;
