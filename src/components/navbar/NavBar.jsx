import React, { useState } from 'react'
import './navBar.css'
import { MobileNav } from './mobileNav/MobileNav';
import logo from '../../assets/logo.png'




export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <MobileNav isOpne={isOpen} toggleMenu={toggleMenu}/>
      <div className='nav'>
        <div className="navContent">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li><a className='menu-item'>Inicio</a></li>
            <li><a className='menu-item'>Skills</a></li>
            <li><a className='menu-item'>Experience</a></li>
            <li><a className='menu-item'>Contact me</a></li>
            <button className='btn-contact' >Hire me</button>
          </ul>
          <button className='btn-resp' onClick={toggleMenu}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
