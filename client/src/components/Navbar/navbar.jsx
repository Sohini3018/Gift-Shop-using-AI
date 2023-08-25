import React from 'react'
import './navbar.css'
import Drawer from './drawer'
function Navbar() {
  return (
    <div className='navbar-container'>
        <Drawer />
        <div className='right-navbar'>
            <button>Help</button>
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar