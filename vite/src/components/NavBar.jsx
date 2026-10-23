import { useState, useEffect } from "react";
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 480) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleClick() {
        setOpen(!open)
    }

    return (
        <div className="navbar-wrapper">
            <div className={`navbar-header ${scrolled || open ? "navbar-scrolled" : ""}`}>
                <nav className="navbar-desktop-menu">
                    <a href="#" className="navbar-link-active">Home</a>
                    <a href="#about-section" className="navbar-link">About me</a>
                    <a href="#experience-section" className="navbar-link">Experience</a>
                    <a href="#proyects-section" className="navbar-link">Projects</a>
                    <a href="#education-section" className="navbar-link">Education</a>

                </nav>

                <nav className={`navbar-mobile-menu ${open ? "navbar-mobile-open" : "navbar-mobile-closed"}`}>
                    <a href="#" className="navbar-link-active-mobile">Home</a>
                    <a href="#about-section" className="navbar-link">About me</a>
                    <a href="#experience-section" className="navbar-link">Experience</a>
                    <a href="#proyects-section" className="navbar-link">Projects</a>
                    <a href="#education-section" className="navbar-link">Education</a>

                </nav>

                <button className={`navbar-burger ${open ? "navbar-burger-open" : ""}`} onClick={handleClick}>
                    <div className='navbar-burger-line'></div>
                    <div className='navbar-burger-line'></div>
                    <div className='navbar-burger-line'></div>
                </button>
            </div>
        </div>
    );
}

export default NavBar;