import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/neuraltax_logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            navigate('/dashboard');
        }, 1500);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            navigate('/wizard');
        }, 1500);
    };

    return (
        <div style={{
            backgroundColor: 'var(--bg-dark-deep)',
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            color: 'white'
        }}>
            <header style={{ background: 'transparent', position: 'absolute', width: '100%', padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="logo">
                        <img src={logo} alt="NeuralTax AI" style={{ height: '30px' }} />
                    </div>
                    <Link to="/" className="btn btn-secondary" style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                        <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Home
                    </Link>
                </div>
            </header>

            <div className="auth-container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="auth-card" style={{
                    background: 'rgba(20, 29, 26, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '24px',
                    padding: '3rem',
                    width: '100%',
                    maxWidth: '480px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
                        background: 'linear-gradient(to right, var(--accent-mint), var(--accent-green-bright))'
                    }}></div>

                    <div className="auth-tabs" style={{ display: 'flex', marginBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div
                            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                            style={{
                                flex: 1, textAlign: 'center', padding: '1rem', cursor: 'pointer', fontWeight: 500, transition: 'all 0.3s', position: 'relative',
                                color: activeTab === 'login' ? 'var(--accent-green-bright)' : 'var(--text-secondary)'
                            }}
                        >
                            Login
                            {activeTab === 'login' && <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '2px', background: 'var(--accent-green-bright)' }}></div>}
                        </div>
                        <div
                            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                            onClick={() => setActiveTab('register')}
                            style={{
                                flex: 1, textAlign: 'center', padding: '1rem', cursor: 'pointer', fontWeight: 500, transition: 'all 0.3s', position: 'relative',
                                color: activeTab === 'register' ? 'var(--accent-green-bright)' : 'var(--text-secondary)'
                            }}
                        >
                            Register
                            {activeTab === 'register' && <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '2px', background: 'var(--accent-green-bright)' }}></div>}
                        </div>
                    </div>

                    {/* Login Form */}
                    {activeTab === 'login' && (
                        <form onSubmit={handleLogin} className="auth-form active" style={{ animation: 'fadeIn 0.4s ease' }}>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Email Address</label>
                                <input type="email" className="form-input" placeholder="name@example.com" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontFamily: 'inherit', transition: 'all 0.3s' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Password</label>
                                <input type="password" className="form-input" placeholder="••••••••" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontFamily: 'inherit', transition: 'all 0.3s' }} />
                                <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                                    <a href="#" style={{ color: 'var(--accent-mint)', fontSize: '0.85rem', textDecoration: 'none' }}>Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isLoading}>
                                {isLoading ? 'Authenticating...' : 'Sign In'}
                            </button>

                            <div className="divider" style={{ display: 'flex', alignItems: 'center', margin: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                                <span style={{ padding: '0 1rem' }}>OR CONTINUE WITH</span>
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                            </div>

                            <div className="social-login" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button type="button" className="social-btn" style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.05)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s' }}>
                                    <span>G</span> Google
                                </button>
                                <button type="button" className="social-btn" style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.05)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s' }}>
                                    <span></span> Apple
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Register Form */}
                    {activeTab === 'register' && (
                        <form onSubmit={handleRegister} className="auth-form active" style={{ animation: 'fadeIn 0.4s ease' }}>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Full Name</label>
                                <input type="text" className="form-input" placeholder="Jane Doe" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontFamily: 'inherit', transition: 'all 0.3s' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Email Address</label>
                                <input type="email" className="form-input" placeholder="name@example.com" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontFamily: 'inherit', transition: 'all 0.3s' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>Password</label>
                                <input type="password" className="form-input" placeholder="Create a strong password" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: 'white', fontFamily: 'inherit', transition: 'all 0.3s' }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', alignItems: 'flex-start' }}>
                                    <input type="checkbox" style={{ marginTop: '3px' }} required />
                                    <span>I agree to the <a href="#" style={{ color: 'var(--accent-mint)' }}>Terms of Service</a> and <a href="#" style={{ color: 'var(--accent-mint)' }}>Privacy Policy</a>.</span>
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isLoading}>
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
