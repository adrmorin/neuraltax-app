import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chatbot from '../chatbot/Chatbot';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
                <Outlet />
            </main>
            <Chatbot />
        </div>
    );
};

export default DashboardLayout;
