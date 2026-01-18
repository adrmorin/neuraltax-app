import React from 'react';
import { useTranslation } from 'react-i18next';
import StatCard from '../components/dashboard/StatCard';
import MembershipDistribution from '../components/dashboard/MembershipDistribution';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import RecentActivity from '../components/dashboard/RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
    const { t } = useTranslation();

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
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>{t('dashboard.title')}</h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.45rem', fontWeight: 600, marginLeft: '10%', margin: '0.5rem 0 0 10%' }}>{t('dashboard.subtitle')}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>{t('common.neuraltax')}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '6px', display: 'inline-block', letterSpacing: '0.05em' }}>{t('common.agent')}</div>
                    </div>
                    <div style={{ width: '40px', height: '40px', background: '#688071', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                        NT
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <StatCard title={t('dashboard.stats.total_clients')} value="87" change="+12%" icon="group" color="104, 128, 113" />
                <StatCard title={t('dashboard.stats.monthly_revenue')} value="$24,580" change="+8%" icon="payments" color="104, 128, 113" />
                <StatCard title={t('dashboard.stats.completed_returns')} value="43" change="+15%" icon="task_alt" color="104, 128, 113" />
                <StatCard title={t('dashboard.stats.satisfaction_rate')} value="98%" change="+2%" icon="star" color="104, 128, 113" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
                <MembershipDistribution title={t('dashboard.sections.membership')} />
                <UpcomingTasks title={t('dashboard.sections.upcoming_tasks')} />
            </div>

            <RecentActivity title={t('dashboard.sections.recent_activity')} />
        </div>
    );
};

export default Dashboard;
