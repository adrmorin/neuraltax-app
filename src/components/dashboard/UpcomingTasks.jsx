import React from 'react';
import { useTranslation } from 'react-i18next';

const UpcomingTasks = ({ title }) => {
    const { t } = useTranslation();

    const tasks = [
        { title: 'Complete tax return for Sarah Johnson', client: 'Sarah Johnson', priority: 'high', date: '2024-12-05', priorityColor: '#fee2e2', priorityTextColor: '#991b1b' },
        { title: 'Review Q4 documents for Michael Chen', client: 'Michael Chen', priority: 'medium', date: '2024-12-08', priorityColor: '#f1f5f9', priorityTextColor: '#475569' },
        { title: 'Schedule consultation with Emma Wilson', client: 'Emma Wilson', priority: 'low', date: '2024-12-10', priorityColor: '#dcfce7', priorityTextColor: '#166534' },
        { title: 'Prepare year-end summary for David Martinez', client: 'David Martinez', priority: 'high', date: '2024-12-06', priorityColor: '#fee2e2', priorityTextColor: '#991b1b' }
    ];

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title || t('dashboard.sections.upcoming_tasks')}</h3>
                <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '0.85rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>list</span>
                    {t('common.view_all')}
                </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tasks.map((task, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '8px', gap: '1rem' }}>
                        <div style={{ color: 'var(--text-secondary)' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>calendar_today</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>{task.title}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{task.client}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{
                                background: task.priorityColor,
                                color: task.priorityTextColor,
                                padding: '0.25rem 0.75rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            }}>
                                {t(`dashboard.tasks.${task.priority}`)}
                            </span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{task.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingTasks;
