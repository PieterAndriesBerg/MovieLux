
import "./Navbar.css"
import logo from "../../Assets/Logo.png"
import React from 'react'
import { NavLink, LinkProps } from "react-router-dom";

const NavBar = () => {
  return (
        <nav>
			<div className="flex-container">
				<NavLink to="/" className="navbar-logo"><img src={logo} alt="logo" /></NavLink>
				<div className="links-group">
                <NavLink className={({isActive}) => (isActive ? "link-active flex-item" : "flex-item")} to="/about">Discover</NavLink>
				<NavLink className={({isActive}) => (isActive ? "link-active flex-item" : "flex-item")} to="/signup">Join</NavLink>
				<NavLink className={({isActive}) => (isActive ? "link-active flex-item" : "flex-item")} to="/login">Login</NavLink>
				</div>
				
			</div>
		</nav>
  )
}

export default NavBar
