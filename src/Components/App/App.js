import React from 'react';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import './App.css'
import Players from '../../pages/Players/Players';
import Scores from '../../pages/Scores/Scores';
import Standings from '../../pages/Standings/Standings';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';


function App() { 
    return ( 
      <>
        <NavBar />
        <Router>
          <SideBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/players' exact element={<Players />} />
            <Route path='/scores' exact element={<Scores />} />
            <Route path='/standings' exact element={<Standings />} />
            <Route path='/about' exact element={<About />} />
          </Routes>
        </Router>
  
      </>
    
    )
  }


export default App;