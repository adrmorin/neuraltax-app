import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import MembershipDistribution from '../components/dashboard/MembershipDistribution';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import RecentActivity from '../components/dashboard/RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div style={{ paddingBottom: '2rem' }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                background: '#1e293b',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>Agentes</h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.45rem', fontWeight: 600, marginLeft: '10%', margin: '0.5rem 0 0 10%' }}>Dashboard de Agente</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>Neuraltax</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '6px', display: 'inline-block', letterSpacing: '0.05em' }}>AGENTE</div>
                    </div>
                    <div style={{ width: '40px', height: '40px', background: '#688071', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                        NT
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <StatCard title="Total Clientes" value="87" change="+12% este mes" icon="fas fa-users" color="104, 128, 113" />
                <StatCard title="Ingresos del Mes" value="$24,580" change="+8% este mes" icon="fas fa-dollar-sign" color="104, 128, 113" />
                <StatCard title="Declaraciones Completadas" value="43" change="+15% este mes" icon="fas fa-file-alt" color="104, 128, 113" />
                <StatCard title="Tasa de Satisfacción" value="98%" change="+2% este mes" icon="fas fa-chart-line" color="104, 128, 113" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
                <MembershipDistribution />
                <UpcomingTasks />
            </div>

            <RecentActivity />
        </div>
    );
};

export default Dashboard;
