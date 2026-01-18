import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chatbot from '../chatbot/Chatbot';

const DashboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <div className="dashboard-container">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={`main-content ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
                <Outlet />
            </main>
            <Chatbot />
        </div>
    );
};

export default DashboardLayout;
