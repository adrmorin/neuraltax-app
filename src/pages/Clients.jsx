import React from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.css';

const Clients = () => {
    const { t } = useTranslation();

    const clients = [
        {
            id: 1,
            name: 'María González',
            initials: 'MG',
            email: 'maria.gonzalez@email.com',
            tags: ['VIP', 'Active'],
            fiscalYear: '2024',
            lastContact: t('clients.time.days_ago', { count: 2 })
        },
        {
            id: 2,
            name: 'Carlos Rodríguez',
            initials: 'CR',
            email: 'carlos.rodriguez@email.com',
            tags: ['Premium', 'In Review'],
            fiscalYear: '2024',
            lastContact: t('clients.time.week_ago')
        },
        {
            id: 3,
            name: 'Ana Martínez',
            initials: 'AM',
            email: 'ana.martinez@email.com',
            tags: ['Premium', 'Active'],
            fiscalYear: '2024',
            lastContact: t('clients.time.days_ago', { count: 3 })
        },
        {
            id: 4,
            name: 'Juan López',
            initials: 'JL',
            email: 'juan.lopez@email.com',
            tags: ['Member', 'Pending'],
            fiscalYear: '2024',
            lastContact: t('clients.time.days_ago', { count: 5 })
        },
        {
            id: 5,
            name: 'Laura Fernández',
            initials: 'LF',
            email: 'laura.fernandez@email.com',
            tags: ['VIP', 'Active'],
            fiscalYear: '2024',
            lastContact: t('clients.time.today')
        }
    ];

    return (
        <div className="clients-page" style={{ paddingBottom: '2rem' }}>
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
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>{t('common.clients')}</h1>
                    <p style={{ color: '#94a3b8', fontSize: '1.45rem', fontWeight: 600, marginLeft: '10%', margin: '0.5rem 0 0 10%' }}>{t('clients.subtitle')}</p>
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

            <main className="clients-content">
                <div className="content-header">
                    <div className="content-title-area">
                        <h2>{t('clients.title')}</h2>
                        <p className="content-subtitle">{t('clients.subtitle')}</p>
                    </div>
                    <button className="btn-add-client">
                        <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>person_add</span>
                        {t('clients.add_client')}
                    </button>
                </div>

                <div className="clients-list">
                    {clients.map(client => (
                        <div key={client.id} className="client-card">
                            <div className="client-avatar" style={{ backgroundColor: client.initials === 'MG' || client.initials === 'LF' ? '#688071' : (client.initials === 'CR' || client.initials === 'AM' ? '#94a3b8' : '#cbd5e1') }}>
                                {client.initials}
                            </div>
                            <div className="client-info">
                                <div className="client-name-row">
                                    <span className="client-name">{client.name}</span>
                                    {client.tags.map(tag => (
                                        <span key={tag} className={`tag tag-${tag.toLowerCase().replace(' ', '-')}`}>
                                            {t(`clients.tags.${tag.toLowerCase().replace(' ', '_')}`)}
                                        </span>
                                    ))}
                                </div>
                                <div className="client-email">{client.email}</div>
                                <div className="client-meta">
                                    {t('clients.fiscal_year')}: {client.fiscalYear} • {t('clients.last_contact')}: {client.lastContact}
                                </div>
                            </div>
                            <div className="client-actions">
                                <button className="btn-view-dashboard">
                                    <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '0.5rem', fontSize: '1.2rem' }}>visibility</span>
                                    {t('clients.view_dashboard')}
                                </button>
                                <div className="action-icons">
                                    <span className="material-symbols-outlined action-icon">chat</span>
                                    <span className="material-symbols-outlined action-icon">call</span>
                                    <span className="material-symbols-outlined action-icon">mail</span>
                                    <span className="material-symbols-outlined action-icon">more_vert</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Clients;
