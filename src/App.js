import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './const.css';
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/contact';
const App = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contacts/>
    </>
    

  )
}

export default App
