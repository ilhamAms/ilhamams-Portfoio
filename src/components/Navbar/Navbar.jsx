import React from 'react'
import "./Navbar.scss"
import {HiOutlineMenuAlt2} from 'react-icons/hi'
const Navbar = () => {
  return (

    <nav className='navbar'>
      <div className="nav-logo">
        <a href="#" className='nav-logo-link'>
          <h4 className='logo text-bold'>IlhamAms.<span className='text-red'>dev</span></h4>
        </a>
      </div>

      <div className="nav-menu">
        <ul className="menu">
          <li className="menu-items">
            <a href="#home" className="menu-items-link">Home</a>
          </li>
          <li className="menu-items">
            <a href="#about" className="menu-items-link">About</a>
          </li>
          <li className="menu-items">
            <a href="#portfolio" className="menu-items-link">Project</a>
          </li>
          <li className="menu-items">
            <a href="#contact" className="menu-items-link">Contact</a>
          </li>
        
        <div className="responsive-menu">
          <HiOutlineMenuAlt2  className='icon'/>
        </div>
        </ul>
       
      </div>
    </nav>

  )
}

export default Navbar