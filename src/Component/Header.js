import { FiMenu, FiX } from 'react-icons/fi';
import React, { useState } from 'react'
import './Header.css'

function Header() {

    const [click, setClick] = useState(false);
    console.log(click)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

  return (
    <div className='header' id='header'>
        <div className="container">
            <nav className='nav-bar'>
                <div className="logo">
                    <a href='#banner'>Warathep<span>Dev.</span></a>
                </div>
                
                    <ul className={ click ? "menu active" : "menu"}>
                        <li className='menu-link' onClick={ closeMobileMenu }>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className='menu-link' onClick={ closeMobileMenu }>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className='menu-link' onClick={ closeMobileMenu }>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className='mobile-menu' onClick={ handleClick }>
                        {click ? (
                            <FiX/>
                        ): 
                            <FiMenu/>
                        }
                
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header