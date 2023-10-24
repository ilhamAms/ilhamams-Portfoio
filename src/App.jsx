import React from 'react'
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Home from './components/Home/Home';
const App = () => {
  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
        <Portfolio /> 
        <Contact />
      </div>
    </>
  )
}

export default App