import React from 'react'
import pazzle_logo from "../assets/images/logo_black.png";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="container">
                <div className="pazzle_logo">
                    <img src={pazzle_logo} alt="pazzle logo"/>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Blogs</li>
                    <li className="navbar-item">Gallery</li>
                </ul>
                <div className="pazzle_login">
                   <h4>Login</h4>
                </div>
            </nav>    
        </div>
    )
}

export default Navbar
