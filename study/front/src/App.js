import Menu from './Menu';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/'/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
