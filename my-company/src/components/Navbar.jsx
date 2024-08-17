import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee'}}>
        <ul style={{
            listStyleType: 'none',
            display: 'flex', justifyContent: 'center'}}>

            <li style={{ margin: '0 10px'}}>
                <Link to='/'>Home</Link>
            </li >
            <li style={{ margin: '0 10px'}}>
                <Link to='/about'>About</Link>
            </li>
            <li style={{ margin: '0 10px'}}>
                <Link to='/services'>Services</Link>
            </li>
            <li style={{ margin: '0 10px'}}>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar