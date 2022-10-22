import React from 'react';
import About from './pages/about/About';
import Navbar from './navbar/Navbar';
import Profile from './pages/profile/Profile';
import Experiences from './pages/experiences/Experiences';
import Education from './pages/education/Education';
import Portfolios from './pages/portfolios/Portfolios';
import Skills from './pages/skills/Skills';
import { render } from '@testing-library/react';

export default function Home() {
   

    return (
        <section>
           <Navbar />
           <div className="container">
               <div className="row">
                   <div className="col s12 m3">
                       <Profile />
                   </div>
                   <div className="col s12 m9">
                       <About />
                       <Skills />
                       <Experiences />
                       <Education />
                       <Portfolios />
                   </div>
               </div>
           </div>
        </section>
    );
   
}

