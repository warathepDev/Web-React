import React from 'react'
import './Footer.css'

function Footer() {
  return (
        <footer className='footer' id='footer'>
                <div className="container-footer">
                    <nav className='nav-menu'>
                        <div className="logo">
                            <a href='#banner'>Warathep<span>Dev.</span></a>
                        </div>

                        <ul className= "menu-footer">
                            <li className='menu-link' >
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className='menu-link' >
                                <a href="#experience">Experience</a>
                            </li>
                            <li className='menu-link' >
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>

                        <div className="contact-menu">
                                <div className="footer-tel">
                                    <a href="0980891131">098-0891131</a>
                                </div>
                                <div className="footer-email">
                                    <a href="mailto:basvaratap@gmail.com" >basvaratap@gmail.com</a>
                                </div>
                                <div className="footer-email">
                                    <a href="mailto:warathepk61@nu.ac.th">warathepk61@nu.ac.th</a>
                                </div>
                        </div>
                    </nav>
                </div>

        </footer>
  )
}

export default Footer