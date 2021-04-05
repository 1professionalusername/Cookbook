import React from 'react'
import { Link } from 'react-router-dom'
// Without adding links to our site, it is only navigable by typing the URLs in the browser 
// To add clickable links to the site, we use the Link element from React Router and set up a new Navbar component. 
// Once again, don't forget to import the new component into the app.

// Now add a Link for each component in the app and use to="URL" to link them.

function Nav() {
    return (
        <div className='nav'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Nav;