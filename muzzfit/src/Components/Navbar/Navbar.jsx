import React, { useState, useEffect } from 'react';
import './Navbar.css';
import muzzlogo from './muzzlogo.jpg';
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <nav className='navbar'>
            <Link href="/"><img className='logo' src={muzzlogo} alt="" /></Link>
            

            <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={16} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={16} style={{ color: '#ffffff' }} />)}

                </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                <Link  to="home" spy={true} smooth={true} offset={-100} duration={500} >
                 Home
            </Link>
                </li>
                <li className='nav-item'>
                <Link  to="about" spy={true} smooth={true} offset={-100} duration={500} >
                 About us
            </Link>
                </li>
                <li className='nav-item'>
                <Link  to="trainer" spy={true} smooth={true} offset={-100} duration={500} >
                trainer
            </Link>
                </li>
                <li className='nav-item'>
                <Link  to="contatti" spy={true} smooth={true} offset={-100} duration={500} >
                 Contatti
            </Link>
                </li>
               
           
           
            
            
            </ul>
        </nav>
    )
}

export default Navbar;
