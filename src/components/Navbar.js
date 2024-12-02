import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    John Doe
        </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </div>
                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;