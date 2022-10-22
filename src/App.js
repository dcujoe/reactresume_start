import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Education from './components/pages/education/Education';
import Portfolios from './components/pages/portfolios/Portfolios';


function App() {
  return(
   <>
   <Router> 
   <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="experiences" element={<Experiences />}></Route>
    <Route path="education" component={Education} />
    <Route path="skills" component={Skills} />
    <Route path="portfolios" component={Portfolios} />
   </Routes>
   </Router>
   </>
  )
}

export default App;