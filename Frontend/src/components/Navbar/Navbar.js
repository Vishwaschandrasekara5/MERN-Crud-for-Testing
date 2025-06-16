import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='home-ul'>
        <li className='home-ll'>
            <Link to="/home"><h1>Home</h1></Link>
        </li>
        <li className='home-ll'>
            <Link to="/add"><h1>Add User</h1></Link>
        </li>
        <li className='home-ll'>
            <Link to="/userdetails"><h1>User Details</h1></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar