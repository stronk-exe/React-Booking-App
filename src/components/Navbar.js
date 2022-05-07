import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span className='logo'>StronkBoooking</span>
            <div className='navItems'>
                <button className='navButtons'>Register</button>
                <button className='navButtons'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;