import React from 'react'
import navlogo from '../Assets/logo-light.png'

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-inner'>
          <div className='navlogo'>
            <img src={navlogo} alt="logo" />
          </div>

          <ul className='nav-content'>
            <li className='underline'>
              <a href="#home">HOME</a>
            </li>

            <li className='outline'>
              <a href="#about">ABOUT US</a>
            </li>

            <li className='outline'>
              <a href="#features">FEATURES</a>
            </li>

            <li className='outline'>
              <a href="#team">TEAM</a>
            </li>

            <li className='outline'>
              <a href="#whyus">WHY CHOOSE US</a>
            </li>

            <li className='outline'>
              <a href="#feedback">FEEDBACK</a>
            </li>

            <li className='outline'>
              <a href="#consultation">FREE CONSULTATION</a>
            </li>

            <li className='outline'>
              <a href="#blog">BLOG</a>
            </li>
          </ul>

          <div className='nav-toggle'><i class="bi bi-list"></i></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar