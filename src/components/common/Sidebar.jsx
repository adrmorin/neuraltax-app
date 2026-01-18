import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/neuraltax_logo.png';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo" style={{ marginBottom: '2rem' }}>
                <img src={logo} alt="NeuralTax AI" style={{ height: '30px' }} />
            </div>
            <ul className="sidebar-nav">
                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-columns"></i> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-users"></i> Clients
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ai-tools" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-brain"></i> AI Tools
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-file-alt"></i> Documents
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-chart-bar"></i> Reports
                    </NavLink>
                </li>
                <li style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
