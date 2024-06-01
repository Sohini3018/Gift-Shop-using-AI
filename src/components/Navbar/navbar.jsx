import React from 'react'
import './navbar.css'
import Drawer from './drawer'
function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='left-navbar'>
      <Drawer />
      </div>
      
        <div className='right-navbar'>
            {/* <a href='#abt-section'>About Us</a> */}
            <a href='#cnt-section'>Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar