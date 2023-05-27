import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Tble from './Components/Tble';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Tble/>}/>
        <Route path='/add'element={<Add/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
