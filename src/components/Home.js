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
                   /* profile is taking one side of the row representing m3 from Bootstrap*/
                   <div className="col s12 m3">
                       <Profile />
                   </div>

                   /* The other section contains other parts of the row m9. Right side of the screen */
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

