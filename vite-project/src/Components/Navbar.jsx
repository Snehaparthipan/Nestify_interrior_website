import React, { useState } from 'react'

export default function Navbar() {
    const[user,setUser]=useState(false)
  return (
    <div>
      <nav className='navbar'>
        <p>Home</p>
        <p>about</p>
        <p>feature</p>
        <p>contact</p>
        <button onClick={()=>setUser(!user)}>≡</button>
      </nav>
      
      <div>
        {
            user&&(
                <div>
        <p>Home</p>
        <p>about</p>
        <p>feature</p>
        <p>contact</p>
        </div>
            )
            
        }
      </div>

    </div>
  )
}
