import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
        <Link to="/">
            <h1>GymRoutine</h1>
        </Link>
    </div>
  )
}

export default Navbar