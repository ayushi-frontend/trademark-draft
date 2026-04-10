import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Blog from './Pages/Blog';

function App() {
  return (
    <>
      <Router>
      <Routes>
       <Route path="/"  element={<Home/>} />
       <Route path="/blog"  element={<Blog/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
