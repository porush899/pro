import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-hrefggler-icon"></span>
                </buthrefn>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">{props.services}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">{props.contact}</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input mr-10" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label mr-10" htmlFor="flexSwitchCheckDefault">Dark/Light Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: <h3>PropTypes.string.isRequired</h3>,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About',
    services: 'Services',
    contact: 'Contact Us',
  };