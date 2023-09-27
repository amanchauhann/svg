import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
