import React, { Component } from 'react';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Education from './components/pages/education/Education';
import Portfolios from './components/pages/portfolios/Portfolios';


function App() {
 
  return(
  
    <BrowserRouter> 
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="experiences" element={<Experiences />} />
       <Route path="education" component={<Education />} />
       <Route path="skills" component={<Skills />} />
       <Route path="portfolios" component={<Portfolios />} />
   </Routes>
   </BrowserRouter>
 
  )
 
}

export default App;