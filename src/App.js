import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import './styles.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Project from './project';
import Navbar from './navbar';
import Behance from './pages/behanceport';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='project' element={<Project />} />
      <Route path='navbar' element={<Navbar />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
