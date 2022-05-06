import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span className='logo'>
                <div className='navItems'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Navbar;