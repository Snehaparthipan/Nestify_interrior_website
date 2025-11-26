import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [user, setUser] = useState(false)

  return (
    <div>
      <nav className='navbar'>
        <h1 className='logo'>Nestify</h1>

        <ul className='nav-links'>
            <Link to='/'>Home</Link>
            {/* <li>Home</li>
            <li>About</li>
            <li>Categorris</li>
            <li>Contact</li> */}
        </ul>

        <button className='menu-btn' onClick={() => setUser(!user)}>≡</button>
      </nav>

      {/* Mobile Dropdown */}
      {user && (
        <ul className='dropdown'>
          <li>Home</li>
          <li>About</li>
          <li>Feature</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  )
}

