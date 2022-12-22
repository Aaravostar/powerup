import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Power Up</h1>
        <div className="links">
            <a href='/'>Home</a>
            <a href='/beans'>Beans</a>
            <a href='/instant'>Instant</a>
            <a href='/brewnenjoy'>Brew & Enjoy</a>
        </div>
    </nav>
  )
}

export default Navbar