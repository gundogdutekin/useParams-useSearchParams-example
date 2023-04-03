import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
            <li><NavLink to="/members">Members</NavLink></li>
        </ul>
    </nav>
  )
}
