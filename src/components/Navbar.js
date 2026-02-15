import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <h2 className="logo">Portfolio</h2>
            <nav>
                <Link to="hero" smooth duration={500}>Home</Link>
                <Link to="about" smooth duration={500}>About</Link>
                <Link to="skills" smooth duration={500}>Skills</Link>
                <Link to="projects" smooth duration={500}>Projects</Link>
                <Link to="contact" smooth duration={500}>Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;
