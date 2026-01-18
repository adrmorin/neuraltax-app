import React from 'react';
import { useTranslation } from 'react-i18next';

const StatCard = ({ title, value, change, icon, color }) => {
    const { t } = useTranslation();

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{title}</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{value}</div>
                </div>
                <div style={{
                    background: `rgba(${color}, 0.1)`,
                    color: `rgb(${color})`,
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>{icon}</span>
                </div>
            </div>
            <div style={{ fontSize: '0.85rem', color: change.startsWith('+') ? 'var(--accent-green-bright)' : '#ef4444', fontWeight: 500 }}>
                {change} <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{t('dashboard.stats.this_month')}</span>
            </div>
        </div>
    );
};

export default StatCard;
