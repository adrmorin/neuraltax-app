import React from 'react';
import { Link } from 'react-router-dom';

const Returns = () => {
    return (
        <div className="main-content">
            <header style={{ background: 'transparent', padding: 0, marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>My Tax Returns</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Access and manage your filing history.</p>
                    </div>
                    <Link to="/wizard" className="btn btn-primary">
                        <i className="fas fa-plus"></i> Start New Return
                    </Link>
                </div>
            </header>

            <div className="returns-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* 2026 Return (Current) */}
                <div className="return-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '1.5rem', border: '1px solid rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}>
                    <div className="return-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div className="tax-year" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--bg-dark-deep)' }}>2026</div>
                        <span className="return-status status-processing" style={{ padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, background: 'rgba(250, 204, 21, 0.15)', color: '#854d0e' }}>Processing</span>
                    </div>
                    <div className="return-details" style={{ marginBottom: '1.5rem' }}>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Filed On</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Jan 18, 2026</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Est. Refund</span>
                            <span className="detail-value refund-amount" style={{ fontWeight: 600, color: '#166534' }}>$2,450.00</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Form Type</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>1040 (Individual)</span>
                        </div>
                    </div>
                    <div className="actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-eye"></i> View
                        </a>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-file-pdf"></i> PDF
                        </a>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-history"></i> Track
                        </a>
                    </div>
                </div>

                {/* 2025 Return (Past) */}
                <div className="return-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '1.5rem', border: '1px solid rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}>
                    <div className="return-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div className="tax-year" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--bg-dark-deep)' }}>2025</div>
                        <span className="return-status status-accepted" style={{ padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, background: 'rgba(74, 222, 128, 0.15)', color: '#166534' }}>Accepted</span>
                    </div>
                    <div className="return-details" style={{ marginBottom: '1.5rem' }}>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Filed On</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Apr 12, 2025</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Refund</span>
                            <span className="detail-value refund-amount" style={{ fontWeight: 600, color: '#166534' }}>$1,850.00</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Form Type</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>1040 (Individual)</span>
                        </div>
                    </div>
                    <div className="actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-eye"></i> View
                        </a>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-file-pdf"></i> PDF
                        </a>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-pen"></i> Amend
                        </a>
                    </div>
                </div>

                {/* 2024 Return (Past) */}
                <div className="return-card" style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '1.5rem', border: '1px solid rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}>
                    <div className="return-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div className="tax-year" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--bg-dark-deep)' }}>2024</div>
                        <span className="return-status status-accepted" style={{ padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, background: 'rgba(74, 222, 128, 0.15)', color: '#166534' }}>Accepted</span>
                    </div>
                    <div className="return-details" style={{ marginBottom: '1.5rem' }}>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Filed On</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Mar 28, 2024</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Refund</span>
                            <span className="detail-value refund-amount" style={{ fontWeight: 600, color: '#166534' }}>$1,200.00</span>
                        </div>
                        <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span className="detail-label" style={{ color: 'var(--text-secondary)' }}>Form Type</span>
                            <span className="detail-value" style={{ fontWeight: 600, color: 'var(--text-dark)' }}>1040-EZ</span>
                        </div>
                    </div>
                    <div className="actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-eye"></i> View
                        </a>
                        <a href="#" className="action-btn-sm" style={{ flex: 1, padding: '0.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-dark)', transition: 'all 0.2s', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <i className="fas fa-file-pdf"></i> PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;
