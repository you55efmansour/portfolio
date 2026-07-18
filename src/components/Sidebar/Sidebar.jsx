import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import logoY from '../../assets/images/my-logo.jpg'
import { Link , NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faEye, faGear, faHome, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <div className={`nav-bar${isOpen ? ' mobile-open' : ''}`}>
        <button
          className='menu-toggle'
          type='button'
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
        <button className='menu-backdrop' type='button' aria-label='Close navigation menu' onClick={closeMenu} />
        {/* container start */}
        <div className="sidebar-content container h-100 d-flex flex-column align-items-center">
        <Link className='logo mb-4' to='/' onClick={closeMenu}>
            <img src={logoY} alt="logo" />
        </Link>
        <div className='mt-5 d-flex flex-column align-items-center justify-content-between h-100 w-100'>
            <nav className='d-flex flex-column gap-5'>
                <NavLink className="position-relative homed-link" to="/" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink className="position-relative about-link" to="/about" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink className="position-relative projects-link" to="/projects" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
                </NavLink>
                <NavLink className="position-relative skills-link" to="/skills" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e'/>
                </NavLink>
                <NavLink className="position-relative contact-link" to="/contact" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/youssef-mansour-8a4338288'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/you55efmansour'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        {/* container end */}
    </div>
  )
}
