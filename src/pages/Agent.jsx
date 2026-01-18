import React from 'react';

const Agent = () => {
    return (
        <div className="main-content">
            <header style={{ background: 'transparent', padding: 0, marginBottom: '2rem', position: 'static' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 style={{ fontSize: '1.8rem' }}>Agent Dashboard</h1>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Clients</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>142</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-green-bright)' }}>+12 this month</div>
                </div>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Pending Actions</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>8</div>
                    <div style={{ fontSize: '0.8rem', color: '#ef4444' }}>Requires attention</div>
                </div>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Revenue</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>$45,200</div>
                </div>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Avg. Commission</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>$318</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3>Client Performance</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                    {/* Placeholder for chart */}
                    <div className="chart-placeholder" style={{ height: '200px', background: 'linear-gradient(180deg, rgba(74, 222, 128, 0.1) 0%, rgba(255, 255, 255, 0) 100%)', borderBottom: '2px solid var(--accent-green-bright)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '0px', marginTop: '1rem' }}>
                        {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                            <div key={i} className="chart-bar" style={{ width: '40px', background: 'var(--accent-green-bright)', borderRadius: '4px 4px 0 0', opacity: 0.7, height: `${height}%` }}></div>
                        ))}
                    </div>
                </div>

                <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <h3>Recent Alerts</h3>
                    <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', marginTop: '6px' }}></div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Missing W-2 Form</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Client: Sarah Connor</div>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', background: '#eab308', borderRadius: '50%', marginTop: '6px' }}></div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Review Required</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Client: John Doe</div>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--accent-green-bright)', borderRadius: '50%', marginTop: '6px' }}></div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Filing Accepted</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Client: Emily Blunt</div>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>View All Alerts</button>
                </div>
            </div>

            <div className="card" style={{ background: 'white', marginTop: '1.5rem', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <h3>Active Clients</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500, padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Client Name</th>
                            <th style={{ textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500, padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Filing Type</th>
                            <th style={{ textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500, padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Status</th>
                            <th style={{ textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500, padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Last Update</th>
                            <th style={{ textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 500, padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ fontWeight: 600 }}>Michael Scott</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>michael@dundermifflin.com</div>
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Business</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><span className="status-badge" style={{ background: '#fef9c3', color: '#854d0e', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>In Progress</span></td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>2 hours ago</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><a href="#" style={{ color: 'var(--accent-green-bright)', fontWeight: 600, textDecoration: 'none' }}>Review</a></td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ fontWeight: 600 }}>Pam Beesly</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>pam@art.com</div>
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Individual</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><span className="status-badge" style={{ background: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>Ready to File</span></td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>1 day ago</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><a href="#" style={{ color: 'var(--accent-green-bright)', fontWeight: 600, textDecoration: 'none' }}>File Now</a></td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                                <div style={{ fontWeight: 600 }}>Dwight Schrute</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>dwight@farms.com</div>
                            </td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>Business</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><span className="status-badge" style={{ background: '#fee2e2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>Missing Docs</span></td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>3 days ago</td>
                            <td style={{ padding: '1rem', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}><a href="#" style={{ color: 'var(--accent-green-bright)', fontWeight: 600, textDecoration: 'none' }}>Request</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Agent;
