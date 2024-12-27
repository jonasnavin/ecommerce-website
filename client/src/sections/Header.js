import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Ecommerce Website</h1>
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/add-mobile'>Add</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header