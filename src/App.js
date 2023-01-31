
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blog';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blogs/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
      </Router>
  );
  }
    
  export default App;
