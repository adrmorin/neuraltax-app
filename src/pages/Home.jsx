import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionItems = [
        {
            question: "Does Neuraltax replace an accountant?",
            answer: "Neuraltax acts as a powerful AI assistant that handles most tax scenarios with precision. For complex cases, we offer access to human experts."
        },
        {
            question: "How do I get started?",
            answer: "Simply click \"Get Free Estimate\" or \"Login\" to create your account. Our wizard will guide you through the process step-by-step."
        },
        {
            question: "Can I use Neuraltax if I only file personal taxes?",
            answer: "Absolutely! Neuraltax is optimized for individual filers (1040), freelancers, and families."
        },
        {
            question: "How secure is the platform?",
            answer: "We use bank-level 256-bit encryption to protect your data. Your privacy and security are our top priorities."
        },
        { question: "What services does it offer?", answer: "We offer federal and state tax filing, tax planning, and audit support." },
        { question: "Who is it for?", answer: "Anyone looking to simplify their tax filing process." },
        { question: "What are the main benefits?", answer: "Accuracy, speed, and maximum refund guarantee." },
        { question: "How does it work?", answer: "Upload your documents, answer simple questions, and let our AI do the rest." },
        { question: "What pricing plans are available?", answer: "We offer free and premium plans to suit your needs." },
        { question: "What is Neuraltax?", answer: "Your AI-powered tax filing companion." }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-new">
                <div className="hero-bg-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content-left">
                        <div className="hero-image-wrapper">
                            <img src="https://placehold.co/600x400/png?text=Family+and+Robot" alt="Family and AI Robot" className="hero-img-main" />
                            <div className="floating-card card-tax">
                                <i className="fas fa-check-circle"></i>
                                <span>Tax Optimized</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-content-right">
                        <h1 className="main-title">
                            <span className="neural-text">Neural</span><span className="tax-text">tax</span>
                            <span className="ai-badge">AI EXPERT</span>
                        </h1>
                        <h2 className="hero-quote">"NEURAL POWER,<br />efficiency delivered.."</h2>

                        <div className="hero-value-prop">
                            <h3>Maximize your savings</h3>
                            <p>and your peace of mind with<br />AI-powered tax optimization</p>
                        </div>

                        <p className="hero-tagline">More deductions, less stress, full control<br /><strong>starts NOW!</strong></p>

                        <div className="hero-actions">
                            <Link to="/calculator" className="btn btn-dark"><i className="fas fa-fire"></i> Get Free Estimate</Link>
                            <Link to="/dashboard" className="btn btn-light">Login</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-bar">
                <div className="container features-grid">
                    <div className="feature-col left">
                        <h3>Why Neuraltax?</h3>
                        <p>Neuraltax is your automated tax expert. Designed to simplify tax management, we combine cutting-edge technology with precision and efficiency. Our intelligent system analyzes, calculates, and optimizes your returns, ensuring full IRS compliance and maximizing your tax benefits.</p>
                    </div>
                    <div className="feature-col right">
                        <h3>Smart Automation:</h3>
                        <ul>
                            <li><strong>Fast processes, no human errors</strong></li>
                            <li>Save Time and Money: Forget the hassle, focus on what matters.</li>
                            <li>Guaranteed Compliance: Always up-to-date with tax regulations.</li>
                            <li><strong>Discover how Neuraltax can transform your tax experience.</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* About / FAQ Section */}
            <section className="about-section">
                <div className="container about-container">
                    <div className="about-visual">
                        <img src="https://placehold.co/400x700/png?text=Mobile+App+Mockup" alt="NeuralTax App" className="app-mockup" />
                        <div className="welcome-text">
                            <h2>Welcome back</h2>
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">ABOUT US</h2>

                        <div className="accordion">
                            {accordionItems.map((item, index) => (
                                <div key={index} className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}>
                                    <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                        {item.question} <i className="fas fa-chevron-down"></i>
                                    </button>
                                    <div className="accordion-body">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
