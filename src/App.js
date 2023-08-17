import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import './App.css';
import Navbar from './component/navbar/Navbar';
import Herosection from './component/hero-section/Herosection';
import Aboutme from './component/aboutme/Aboutme'
import Skills from './component/skills/Skills'
import Projects from './component/projects/Projects';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
