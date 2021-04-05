import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div>
            <p>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/nav'>Nav</Link>
                <Link to='/header'>Header</Link>

            </p>
        </div>
    )
}

export default Links;