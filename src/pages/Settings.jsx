import React from 'react';

const Settings = () => {
    return (
        <div className="main-content">
            <header style={{ background: 'transparent', padding: 0, marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Settings</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage your preferences and application settings.</p>
            </header>

            <div className="settings-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Notifications */}
                <div className="settings-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                    <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div className="section-icon" style={{ width: '40px', height: '40px', background: 'var(--bg-light-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-sage)' }}><i className="far fa-bell"></i></div>
                        <div className="section-title">
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Notifications</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Choose how you want to be notified.</p>
                        </div>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Email Notifications</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Receive updates about your tax return status.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>SMS Alerts</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Get urgent alerts on your mobile device.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Marketing Emails</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Receive tips, newsletters, and promotions.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="settings-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                    <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div className="section-icon" style={{ width: '40px', height: '40px', background: 'var(--bg-light-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-sage)' }}><i className="fas fa-shield-alt"></i></div>
                        <div className="section-title">
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Privacy & Security</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Control your data and security preferences.</p>
                        </div>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Two-Factor Authentication</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Add an extra layer of security to your account.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Data Sharing</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Allow NeuralTax to use anonymized data for AI training.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>
                </div>

                {/* Preferences */}
                <div className="settings-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                    <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                        <div className="section-icon" style={{ width: '40px', height: '40px', background: 'var(--bg-light-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-sage)' }}><i className="fas fa-paint-brush"></i></div>
                        <div className="section-title">
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Preferences</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Customize your application experience.</p>
                        </div>
                    </div>

                    <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f8fafc' }}>
                        <div>
                            <div className="toggle-label" style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Dark Mode</div>
                            <div className="toggle-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Switch between light and dark themes.</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px' }}>
                            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                            <span className="slider" style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#cbd5e1', transition: '.4s', borderRadius: '34px' }}></span>
                        </label>
                    </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <button className="btn-save" onClick={() => alert('Settings saved!')} style={{ background: 'var(--bg-dark-deep)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s' }}>Save Preferences</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
