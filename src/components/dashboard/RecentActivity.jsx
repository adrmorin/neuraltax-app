import React from 'react';
import { useTranslation } from 'react-i18next';

const RecentActivity = ({ title }) => {
    const { t } = useTranslation();

    const activities = [
        { title: 'Completed tax return', desc: 'John Anderson', time: '2 hours ago', color: '#688071' },
        { title: 'Uploaded W-2 form', desc: 'Lisa Thompson', time: '4 hours ago', color: '#688071' },
        { title: 'Scheduled consultation', desc: 'Robert Kim', time: '6 hours ago', color: '#688071' }
    ];

    return (
        <div className="card">
            <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>{title || t('dashboard.sections.recent_activity')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activities.map((activity, index) => (
                    <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ color: activity.color, marginTop: '2px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>history</span>
                        </div>
                        <div style={{ flex: 1, paddingBottom: index !== activities.length - 1 ? '1.5rem' : '0', borderBottom: index !== activities.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                            <div style={{ fontWeight: 500 }}>{activity.title}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{activity.desc}</div>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{activity.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
