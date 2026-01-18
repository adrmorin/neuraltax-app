import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/neuraltax_logo.png';

const Header = () => {
    return (
        <header className="glass-header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="NeuralTax AI" style={{ height: '35px' }} />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><Link to="/dashboard" className="btn btn-login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
