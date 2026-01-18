import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

const Sidebar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (e) => {
        e.preventDefault();
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <Link to="/" className="back-link">
                    <i className="fas fa-arrow-left"></i> {t('common.back_to_portals')}
                </Link>
                <div className="portal-info">
                    <span className="portal-label">{t('common.portal_of')}</span>
                    <div className="portal-brand">
                        <div className="avatar-nt">NT</div>
                        <span className="portal-name">{t('common.agents')}</span>
                    </div>
                </div>
            </div>

            <ul className="sidebar-nav">
                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-th-large"></i> {t('common.dashboard')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-users"></i> {t('common.clients')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ai-tools" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-brain"></i> {t('common.ai_tools')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-file-alt"></i> {t('common.documents')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className="fas fa-chart-bar"></i> {t('common.reports')}
                    </NavLink>
                </li>
            </ul>

            <div className="sidebar-footer">
                <ul className="sidebar-footer-nav">
                    <li>
                        <a href="#lang" onClick={toggleLanguage} className="lang-switcher">
                            <i className="fas fa-globe"></i> {i18n.language === 'es' ? 'EN' : 'ES'}
                        </a>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <i className="fas fa-cog"></i> {t('common.settings')}
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/login">
                            <i className="fas fa-sign-out-alt"></i> {t('common.logout')}
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
