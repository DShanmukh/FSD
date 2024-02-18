import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import BoB from './click';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BoB/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
