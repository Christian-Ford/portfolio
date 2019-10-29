import React from 'react';



const Navbar = () => {

    return (
        <div className="navbarWrap">
            <a href="#home" className="navLogo"> CF.Dev </a>

            <div id="navActive" className="navLinks">
                <a href="#home" className="links"> Home </a>
                <a href="#projects" className="links"> Projects </a>
                <a href="#skills" className="links"> Skills </a>
                <a href="#resume" className="links"> Resume </a>
            </div>
        </div>
    )
}

export default Navbar;
