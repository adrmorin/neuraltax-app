import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (e) => {
        e.preventDefault();
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <button className="toggle-btn" onClick={toggleSidebar} title={t('common.toggle_sidebar')}>
                    <span className="material-symbols-outlined">{isCollapsed ? 'menu' : 'menu_open'}</span>
                </button>
                {!isCollapsed && (
                    <div className="portal-info">
                        <span className="portal-label">{t('common.portal_of')}</span>
                        <div className="portal-brand">
                            <div className="avatar-nt">NT</div>
                            <span className="portal-name">{t('common.agents')}</span>
                        </div>
                    </div>
                )}
            </div>

            <ul className="sidebar-nav">
                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="material-symbols-outlined">dashboard</span>
                        {!isCollapsed && <span>{t('common.dashboard')}</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients" className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="material-symbols-outlined">group</span>
                        {!isCollapsed && <span>{t('common.clients')}</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ai-tools" className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="material-symbols-outlined">psychology</span>
                        {!isCollapsed && <span>{t('common.ai_tools')}</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents" className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="material-symbols-outlined">description</span>
                        {!isCollapsed && <span>{t('common.documents')}</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>
                        <span className="material-symbols-outlined">bar_chart</span>
                        {!isCollapsed && <span>{t('common.reports')}</span>}
                    </NavLink>
                </li>
            </ul>

            <div className="sidebar-footer">
                <ul className="sidebar-footer-nav">
                    <li>
                        <Link to="/" className="back-link">
                            <span className="material-symbols-outlined">home</span>
                            {!isCollapsed && <span>{t('common.back_to_home')}</span>}
                        </Link>
                    </li>
                    <li>
                        <a href="#lang" onClick={toggleLanguage} className="lang-switcher">
                            <span className="material-symbols-outlined">language</span>
                            {!isCollapsed && <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>}
                        </a>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <span className="material-symbols-outlined">settings</span>
                            {!isCollapsed && <span>{t('common.settings')}</span>}
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/login">
                            <span className="material-symbols-outlined">logout</span>
                            {!isCollapsed && <span>{t('common.logout')}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
