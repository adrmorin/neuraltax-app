import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import DashboardLayout from './components/common/DashboardLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Calculator from './pages/Calculator';
import Returns from './pages/Returns';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Wizard from './pages/Wizard';
import Blog from './pages/Blog';
import Agent from './pages/Agent';
import Clients from './pages/Clients';

function App() {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      {/* Standalone Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/wizard" element={<Wizard />} />

      {/* Protected Routes with Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/agent" element={<Agent />} />
      </Route>
    </Routes>
  );
}

export default App;
