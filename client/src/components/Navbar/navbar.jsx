import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='left-navbar'>Gift Shop</div>
        <div className='right-navbar'>
            <button>My Gifts</button>
            <button>FAQ</button>
        </div>
    </div>
  )
}

export default Navbar