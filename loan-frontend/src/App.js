import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from './layout/Navbar';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
