import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <div>
            <nav>
                <li><Link to="/" className="logo">Logo</Link></li>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/sass">Sass Tutorial</Link></li>
                    <li><Link to="/alerts">Alerts</Link></li>
                    <li><Link to="/backend">Fetch&Axios</Link></li>
                    <li><Link to="/json">JSON</Link></li>
                    <li><Link to="/counter">Counter App</Link></li>
                </ul>
            </nav>
        </div>
    )
}
