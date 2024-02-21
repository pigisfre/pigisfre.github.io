import React from 'react'
import './Navbar.css'
import muzzlogo from './muzzlogo.jpg'

const Navbar = () => {
    return(
        <>
        <nav className='navbar'>
             <img className='logo' src={muzzlogo} alt="" />
             <div className='nav-items'>
             <a href="#home">Home</a>
             <a href="#coach">About us</a>
             <a href="#info">Trainer</a>
             <a href="#dove">Dove ci troviamo</a>

             </div>
        </nav>
        </>
    )
}

export default Navbar;
