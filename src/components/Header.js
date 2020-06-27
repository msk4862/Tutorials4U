import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/header.scss";

function Header() {
    return (
        <nav className='navbar sticky-top'>
                <div className='container-fluid'>
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/"><h1 className="text-dark-color">Web App</h1></Link>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className="btn btn-gradient"><Link to="/">Login</Link></li>
                    </ul>
                </div>
            </nav>
    )

}

export default Header;