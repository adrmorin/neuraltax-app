import React from 'react';
import { useTranslation } from 'react-i18next';

const MembershipDistribution = ({ title }) => {
    const { t } = useTranslation();

    const data = [
        { label: t('dashboard.sections.membership_labels.vip'), value: 23, percentage: 26, color: '#688071' },
        { label: t('dashboard.sections.membership_labels.premium'), value: 38, percentage: 44, color: '#9DD3AF' },
        { label: t('dashboard.sections.membership_labels.free'), value: 26, percentage: 30, color: '#e2e8f0' }
    ];

    return (
        <div className="card">
            <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>{title || t('dashboard.sections.membership')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                            <span style={{ fontWeight: 600 }}>{item.value} ({item.percentage}%)</span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: `${item.percentage}%`, height: '100%', background: item.color, borderRadius: '4px' }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MembershipDistribution;
