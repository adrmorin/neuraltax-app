import React from 'react';

const Profile = () => {
    return (
        <div className="main-content">
            <div className="profile-header-card" style={{ background: 'linear-gradient(135deg, var(--bg-dark-deep) 0%, #1e293b 100%)', color: 'white', padding: '2.5rem', borderRadius: 'var(--border-radius)', display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div className="profile-avatar-lg" style={{ width: '100px', height: '100px', background: 'var(--accent-mint)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--bg-dark-deep)', border: '4px solid rgba(255, 255, 255, 0.1)' }}>JD</div>
                <div className="profile-info">
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1.8rem' }}>John Doe</h2>
                    <div style={{ opacity: 0.8 }}>john.doe@example.com</div>
                    <span className="profile-badge" style={{ background: 'rgba(74, 222, 128, 0.2)', color: 'var(--accent-green-bright)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, display: 'inline-block', marginTop: '0.5rem' }}>Free Plan</span>
                </div>
                <button className="btn" style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Upgrade to Premium
                </button>
            </div>

            <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Personal Info */}
                <div className="settings-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                    <h3 className="form-section-title" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9', color: 'var(--bg-dark-deep)' }}>Personal Information</h3>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Profile updated!'); }}>
                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>First Name</label>
                                <input type="text" className="form-input" defaultValue="John" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Last Name</label>
                                <input type="text" className="form-input" defaultValue="Doe" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                            </div>
                        </div>
                        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Email Address</label>
                                <input type="email" className="form-input" defaultValue="john.doe@example.com" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Phone Number</label>
                                <input type="tel" className="form-input" defaultValue="(555) 123-4567" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Address</label>
                            <input type="text" className="form-input" defaultValue="123 Innovation Dr, Tech City, CA 94000" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                        </div>
                        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                            <button type="submit" className="btn-save" style={{ background: 'var(--bg-dark-deep)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s' }}>Save Changes</button>
                        </div>
                    </form>
                </div>

                {/* Security & Status */}
                <div>
                    <div className="settings-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                        <h3 className="form-section-title" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9', color: 'var(--bg-dark-deep)' }}>Security</h3>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>Current Password</label>
                            <input type="password" className="form-input" placeholder="••••••••" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)', fontSize: '0.9rem' }}>New Password</label>
                            <input type="password" className="form-input" placeholder="New password" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '0.95rem', transition: 'all 0.2s' }} />
                        </div>
                        <button className="btn" style={{ width: '100%', border: '1px solid #e2e8f0', background: 'white', color: 'var(--text-dark)', marginTop: '0.5rem' }}>
                            Update Password
                        </button>
                    </div>

                    <div className="settings-card" style={{ background: '#f0fdf4', borderColor: 'var(--accent-mint)', borderRadius: 'var(--border-radius)', padding: '2rem', border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom: '2rem' }}>
                        <h3 className="form-section-title" style={{ color: '#166534', borderColor: 'rgba(22, 101, 52, 0.1)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
                            Account Status</h3>
                        <p style={{ fontSize: '0.9rem', color: '#166534', marginBottom: '1rem' }}>
                            You are currently on the <strong>Free Plan</strong>. Upgrade to access live expert support
                            and audit protection.
                        </p>
                        <a href="#" style={{ color: '#166534', fontWeight: 600, fontSize: '0.9rem' }}>View Plans →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
