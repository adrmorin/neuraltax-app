import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../chatbot/Chatbot';

const Layout = () => {
    return (
        <div className="app-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Layout;
