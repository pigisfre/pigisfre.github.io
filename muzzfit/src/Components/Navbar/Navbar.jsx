import React from 'react'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react'
import muzzlogo from './muzzlogo.jpg'

const Navbar = () => {
    const lastScrollTop = useRef(0);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
    useEffect(() => {
        const handleScroll = () => {
            var { pageYOffset } = window;
            if (pageYOffset > lastScrollTop.current) {
                // downward scroll
                setIsNavbarVisible(false);
            } else if (pageYOffset < lastScrollTop.current) {
                // upward scroll
                setIsNavbarVisible(true);
            } // else was horizontal scroll
            lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <>
        <nav className={`${isNavbarVisible ? "visible" : ""}`}>
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
