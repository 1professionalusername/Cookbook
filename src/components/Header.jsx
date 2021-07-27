import React from 'react'
import {Link} from 'react-router-dom'




function Header() {
    return (
        <div className='header' >
          <h1 className='title'>Steal This Cookbook</h1>
            <nav>
              <Link to="/" className='navLinks1'>Home</Link>
              <Link to="/about" className='navLinks2'>About</Link>
              <Link to="/recipes" className='navLinks3'>Recipes</Link>
              <div>
              <div input type="text" placeholder="Search.." />
              </div>
            </nav>
        </div>
    )
}

export default Header;