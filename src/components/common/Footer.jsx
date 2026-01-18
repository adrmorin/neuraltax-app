import React from 'react';
import logo from '../../assets/neuraltax_logo.png';

const Footer = () => {
    return (
        <footer className="neuraltax-footer">
            <div className="container">
                <div className="footer-top">
                    {/* Left Column */}
                    <div className="footer-col footer-brand">
                        <div className="logo">
                            <img src={logo} alt="NeuralTax AI" style={{ height: '40px' }} />
                        </div>
                        <h3>Neuraltax AI Expert</h3>
                        <p>Your automated tax expert. Simplifying tax management with cutting-edge AI technology and precision.</p>
                        <div className="business-reg-box">
                            <i className="fas fa-file-alt"></i>
                            <div>
                                <span>Business Registration</span>
                                <strong>L25000152874</strong>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="footer-col footer-contact">
                        <h4>Contact Information</h4>
                        <div className="email-box">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span>Email us</span>
                                <a href="mailto:neuraltaxai@gmail.com">neuraltaxai@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div className="detail-item">
                                <i className="far fa-clock"></i>
                                <div>
                                    <strong>Business Hours</strong>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday - Sunday: Closed</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-bolt"></i>
                                <div>
                                    <strong>Response Time</strong>
                                    <p>Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="footer-col footer-connect">
                        <div className="connect-header">
                            <h4>Connect With Us</h4>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-x-twitter"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <a href="#">Our Services</a>
                            <a href="#">Pricing</a>
                            <a href="#">About Us</a>
                            <a href="#">FAQ</a>
                            <a href="#">Quick Links</a>
                        </div>
                        <div className="footer-copyright">
                            <p>&copy; 2025 Neuraltax. All rights reserved.</p>
                            <div className="legal-links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Support</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="reg-info">Business Registration Number: L25000152874 | Contact: neuraltaxai@gmail.com</p>
                    <p className="disclaimer">Neuraltax is not meant for collecting PII or securing sensitive data. Please consult with a qualified tax professional for complex tax situations.</p>
                    <p className="license">Licensed and registered for tax advisory services. All communications are confidential and secure.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
