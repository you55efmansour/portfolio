import React from 'react'
import './Sidebar.scss'
import logoY from '../../assets/images/my-logo.jpg'
import { Link , NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <div className='nav-bar'>
        {/* container start */}
        <div className="container h-100 d-flex flex-column align-items-center">
        <Link className='logo mb-4' to='/'>
            <img src={logoY} alt="logo" />
        </Link>
        <div className='mt-5 d-flex flex-column align-items-center justify-content-between h-100 w-100'>
            <nav className='d-flex flex-column gap-5'>
                <NavLink exact="true" activeclassname="active" className="position-relative homed-link" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-relative about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-relative projects-link" to="/projects">
                    <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-relative skills-link" to="/skills">
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="position-relative contact-link" to="/contact">
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
