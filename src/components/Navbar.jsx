import React from 'react'

const Navbar = () => {
    return (
        <div className="navbarWrap">
            <a href="#about-me" className="navLogo"> CF.Dev </a>

            <div className="navLinks">
                
                <a href="#projects"> Projects </a>
                <a href="#skills"> Skills </a>
                <a href="#resume"> Resume </a>
            </div>
        </div>
    )
}

export default Navbar;
