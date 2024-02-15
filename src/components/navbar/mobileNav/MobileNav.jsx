import React from 'react'
import './mobileNav.css'
import logo from '../../../assets/logo.png';



export const MobileNav = ({ isOpne, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpne ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobil-cont">
                    <img className="logo" src={logo} alt="logo" />
                    <ul>
                        <li><a className='menu-item'>Inicio</a></li>
                        <li><a className='menu-item'>Skills</a></li>
                        <li><a className='menu-item'>Experience</a></li>
                        <li><a className='menu-item'>Contact me</a></li>
                        <button className='btn-contact' >Hire me</button>
                    </ul>
                </div>
            </div>
        </>
    )
}
