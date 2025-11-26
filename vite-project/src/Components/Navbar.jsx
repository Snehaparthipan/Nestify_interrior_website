import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [user, setUser] = useState(false)

  return (
    <div>
      <nav className='navbar'>
        <h1 className='logo'>Nestify</h1>

        <ul className='nav-links'>
            <Link className='li' to='/'>Home</Link>
            <Link className='li' to='/about'>About</Link>
            <Link className='li' to='/categories'>Categories</Link>
            <Link className='li' to='/contact'>Contact</Link>
        </ul>

        <button className='menu-btn' onClick={() => setUser(!user)}>≡</button>
      </nav>

      {/* Mobile Dropdown */}
      {user && (
        <ul className='dropdown'>
          <Link className='li1' to='/'>Home</Link>
          <Link className='li1' to='/about'>About</Link>
          <Link className='li1' to='/categories'>Categories</Link>
          <Link className='li1' to='/contact'>Contact</Link>
        </ul>
      )}
    </div>
  )
}

