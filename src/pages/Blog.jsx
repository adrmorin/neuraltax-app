import React from 'react';

const Blog = () => {
    return (
        <div className="main-content">
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Neuraltax Blog</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Latest insights on AI, Tax Law, and Financial Intelligence. Stay ahead of the curve with our expert analysis.</p>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="featured-post" style={{
                    background: 'var(--bg-dark-card)',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    position: 'relative',
                    color: 'white',
                    marginBottom: '3rem'
                }}>
                    <img src="https://via.placeholder.com/1200x400/1C2C3C/9DD3AF?text=AI+in+Tax+Law" alt="AI in Tax Law" style={{ width: '100%', height: '400px', objectFit: 'cover', opacity: 0.6 }} />
                    <div className="featured-content" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        padding: '2rem',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)'
                    }}>
                        <span className="status-badge" style={{ background: 'var(--accent-green-bright)', color: 'var(--bg-dark-deep)', marginBottom: '1rem', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>Featured</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI in Tax Law: What You Need to Know for 2026</h2>
                        <p style={{ color: '#ddd', marginBottom: '1.5rem', maxWidth: '800px' }}>Discover how artificial intelligence is reshaping the landscape of tax filing, ensuring higher accuracy and maximizing deductions for individuals and businesses alike.</p>
                        <button className="btn btn-primary">Read Article</button>
                    </div>
                </div>

                <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginTop: '3rem' }}>
                    <div className="posts-column">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-green-bright)', display: 'inline-block', paddingBottom: '0.5rem' }}>Recent Posts</h3>

                        {[
                            {
                                title: "2026 Tax Adjustments: Standard Deduction Increases",
                                date: "2 hours ago",
                                category: "Tax Law",
                                desc: "The IRS has announced new inflation adjustments for the 2026 tax year. Here's what it means for your wallet.",
                                img: "https://via.placeholder.com/200x150/1C2C3C/9DD3AF?text=Tax+2026"
                            },
                            {
                                title: "Small Business Accounting with AI",
                                date: "5 hours ago",
                                category: "Business",
                                desc: "Automating your bookkeeping can save you 20+ hours a month. Learn how Neuraltax Agent integrates with your workflow.",
                                img: "https://via.placeholder.com/200x150/1C2C3C/9DD3AF?text=Small+Biz"
                            },
                            {
                                title: "Navigating Crypto Taxes in the New Era",
                                date: "1 day ago",
                                category: "Crypto",
                                desc: "Understanding the new reporting requirements for digital assets and how to avoid common pitfalls.",
                                img: "https://via.placeholder.com/200x150/1C2C3C/9DD3AF?text=Crypto"
                            }
                        ].map((post, index) => (
                            <div key={index} className="post-card" style={{
                                background: 'white',
                                borderRadius: 'var(--border-radius)',
                                overflow: 'hidden',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                gap: '1.5rem',
                                marginBottom: '1.5rem',
                                transition: 'transform 0.2s'
                            }}>
                                <img src={post.img} alt={post.title} style={{ width: '200px', objectFit: 'cover' }} />
                                <div className="post-content" style={{ padding: '1.5rem 1.5rem 1.5rem 0', flex: 1 }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{post.category} • {post.date}</div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{post.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{post.desc}</p>
                                    <a href="#" style={{ color: 'var(--secondary-sage)', fontWeight: 600, textDecoration: 'none' }}>Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="sidebar-column">
                        <div className="card" style={{ background: 'white', marginBottom: '2rem', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Search Blog</h4>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input type="text" placeholder="Search..." style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <button style={{ background: 'var(--accent-green-bright)', border: 'none', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}>🔍</button>
                            </div>
                        </div>

                        <div className="card" style={{ background: 'white', marginBottom: '2rem', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Categories</h4>
                            <ul className="category-list" style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    { name: "AI & Tech", count: 12 },
                                    { name: "Tax Law", count: 8 },
                                    { name: "Accounting", count: 5 },
                                    { name: "Business Tips", count: 15 },
                                    { name: "Crypto", count: 4 }
                                ].map((cat, index) => (
                                    <li key={index} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                                        <span>{cat.name}</span> <span>({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Popular Tags</h4>
                            <div className="tag-cloud" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                {['#taxes2026', '#AI', '#finance', '#deductions', '#irs', '#business', '#startup'].map((tag, index) => (
                                    <a key={index} href="#" className="tag" style={{
                                        background: 'rgba(0, 0, 0, 0.05)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none'
                                    }}>{tag}</a>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Blog;
