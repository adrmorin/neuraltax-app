import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Chatbot.css'; // We'll create this or rely on global styles
import nereaAvatar from '../../assets/nerea_avatar.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [quickReplies, setQuickReplies] = useState([]);
    const messagesEndRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Conversation State Machine
    const intents = {
        GREETING: 'greeting',
        CHECK_STATUS: 'check_status',
        ESTIMATE_REFUND: 'estimate_refund',
        UPLOAD_DOCS: 'upload_docs',
        TALK_TO_HUMAN: 'talk_to_human',
        UPGRADE: 'upgrade',
        HELP: 'help',
        WIZARD_HELP: 'wizard_help',
        THANKS: 'thanks',
        GOODBYE: 'goodbye',
        JOKE: 'joke',
        DEADLINE: 'deadline',
        EXTENSION: 'extension',
        ELIGIBILITY: 'eligibility',
        UNKNOWN: 'unknown'
    };

    const detectIntent = (message) => {
        const lowerMsg = message.toLowerCase();
        const path = location.pathname;

        // Context-aware checks
        if (path.includes('wizard')) {
            if (lowerMsg.includes('step') || lowerMsg.includes('next') || lowerMsg.includes('stuck') || lowerMsg.includes('help')) {
                return intents.WIZARD_HELP;
            }
        }

        if (path.includes('dashboard')) {
            if (lowerMsg.includes('status') || lowerMsg.includes('track') || lowerMsg.includes('return')) {
                return intents.CHECK_STATUS;
            }
            if (lowerMsg.includes('refund') || lowerMsg.includes('much') || lowerMsg.includes('estimate')) {
                return intents.ESTIMATE_REFUND;
            }
        }

        if (path.includes('upload')) {
            if (lowerMsg.includes('safe') || lowerMsg.includes('secure') || lowerMsg.includes('encrypt')) {
                return 'security_check';
            }
            if (lowerMsg.includes('type') || lowerMsg.includes('format') || lowerMsg.includes('file')) {
                return 'file_types';
            }
        }

        if (lowerMsg.match(/\b(hello|hi|hola|hey|greetings|good morning|good afternoon)\b/)) return intents.GREETING;
        if (lowerMsg.match(/\b(status|track|where.*return|progress|update)\b/)) return intents.CHECK_STATUS;
        if (lowerMsg.match(/\b(refund|money|how much|estimate|calculator)\b/)) return intents.ESTIMATE_REFUND;
        if (lowerMsg.match(/\b(upload|document|w2|1099|file|submit|attach)\b/)) return intents.UPLOAD_DOCS;
        if (lowerMsg.match(/\b(human|agent|person|support|live|representative)\b/)) return intents.TALK_TO_HUMAN;
        if (lowerMsg.match(/\b(upgrade|premium|pay|subscription|cost|price)\b/)) return intents.UPGRADE;
        if (lowerMsg.match(/\b(help|options|menu|what can you do|assist)\b/)) return intents.HELP;
        if (lowerMsg.match(/\b(thank|thanks|thx|gracias|appreciate)\b/)) return intents.THANKS;
        if (lowerMsg.match(/\b(bye|goodbye|see ya|later|adios)\b/)) return intents.GOODBYE;
        if (lowerMsg.match(/\b(joke|funny|laugh)\b/)) return intents.JOKE;

        // New Intents
        if (lowerMsg.match(/\b(deadline|due date|when.*due|late)\b/)) return intents.DEADLINE;
        if (lowerMsg.match(/\b(extension|more time|later|delay)\b/)) return intents.EXTENSION;
        if (lowerMsg.match(/\b(can i claim|deduct|eligible|write off|dog|pet|cat)\b/)) return intents.ELIGIBILITY;

        return intents.UNKNOWN;
    };

    const getResponse = (intent, message) => {
        const path = location.pathname;

        switch (intent) {
            case intents.GREETING:
                const greetings = [
                    "Hello! I'm Nerea, your AI Tax Assistant. Ready to get your taxes sorted?",
                    "Hi there! I'm Nerea. How can I make your tax season easier today?",
                    "Greetings! I'm Nerea, here to help you maximize your refund. What's on your mind?"
                ];
                return {
                    text: greetings[Math.floor(Math.random() * greetings.length)],
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
            case intents.WIZARD_HELP:
                let stepHelp = "I'm right here with you. What do you need help with?";
                // Note: Accessing currentStep from Wizard component is tricky without global state.
                // For now, we'll give generic wizard help or assume step 1 if unknown.
                return {
                    text: stepHelp,
                    options: ['Continue', 'Talk to Human']
                };
            case 'security_check':
                return {
                    text: "Your security is our top priority. <br><br>We use **256-bit End-to-End Encryption** for all uploads. Your documents are safer here than in a filing cabinet!",
                    options: ['Upload Docs', 'File Types']
                };
            case 'file_types':
                return {
                    text: "We accept **PDF, JPG, and PNG** files up to 25MB. <br><br>Make sure the text is clear and legible for our AI to extract the data accurately.",
                    options: ['Upload Docs', 'Security']
                };
            case intents.THANKS:
                return {
                    text: "You're very welcome! Is there anything else I can help you with?",
                    options: ['Check Status', 'Estimate Refund']
                };
            case intents.GOODBYE:
                return {
                    text: "Goodbye! Come back if you have more questions. Happy filing!",
                    options: []
                };
            case intents.JOKE:
                return {
                    text: "Why did the auditor cross the road? <br><br>To look at the chicken's receipts! 🐔🧾",
                    options: ['That was bad', 'One more']
                };
            case intents.CHECK_STATUS:
                if (path.includes('dashboard')) {
                    return {
                        text: `I see you're on the dashboard. Your 2026 Federal Return status is currently **Processing**.`,
                        options: ['Estimate Refund', 'Upload Docs']
                    };
                }
                return {
                    text: "Your 2026 Federal Return is currently **Processing**. <br><br>We filed it on Jan 18, 2026. The IRS typically accepts returns within 24-48 hours.",
                    options: ['Estimate Refund', 'Upload Docs']
                };
            case intents.ESTIMATE_REFUND:
                if (path.includes('dashboard')) {
                    return {
                        text: `According to your dashboard, your estimated Federal Refund is **$2,450**. <br><br>This amount is pending IRS approval.`,
                        options: ['Check Status', 'Spend it wisely!']
                    };
                }
                return {
                    text: "Based on your latest data, your estimated Federal Refund is **$2,450**. <br><br>This amount is subject to final IRS approval.",
                    options: ['Check Status', 'Spend it wisely!']
                };
            case intents.UPLOAD_DOCS:
                return {
                    text: "You can securely upload your W-2s, 1099s, and other tax documents here.",
                    options: ['Go to Upload Page', 'Check Status'],
                    action: '/upload'
                };
            case intents.TALK_TO_HUMAN:
                return {
                    text: "I can connect you with a certified tax professional. <br><br>Please note that live support is a **Premium** feature. Would you like to upgrade?",
                    options: ['Upgrade Plan', 'No thanks']
                };
            case intents.UPGRADE:
                return {
                    text: "Great choice! Premium includes audit protection, live support, and priority processing.",
                    options: ['Check Status']
                };
            case intents.HELP:
                return {
                    text: "I can help you check your **return status**, estimate your **refund**, or **upload documents**. What would you like to do?",
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
            case intents.DEADLINE:
                return {
                    text: "For the 2026 tax year, the filing deadline is **April 15, 2027**. <br><br>If you need more time, you can file an extension.",
                    options: ['File Extension', 'Check Status']
                };
            case intents.EXTENSION:
                return {
                    text: "You can file **Form 4868** to get an automatic 6-month extension until October 15. <br><br>Remember, an extension to file is **not** an extension to pay any taxes due!",
                    options: ['Estimate Refund', 'Talk to Human']
                };
            case intents.ELIGIBILITY:
                if (message.toLowerCase().includes('dog') || message.toLowerCase().includes('pet')) {
                    return {
                        text: "Generally, you **cannot** claim pets as dependents. 🐶 <br><br>However, if your dog is a certified service animal for a medical condition, expenses might be deductible.",
                        options: ['Deductions Help', 'Talk to Human']
                    };
                }
                return {
                    text: "Tax eligibility depends on many factors. I can help with general rules, but for specific situations, a tax pro is best.",
                    options: ['Talk to Human', 'Help']
                };
            default:
                return {
                    text: "I'm still learning! I didn't quite catch that. You can ask me about your **return status**, **refund estimate**, or how to **upload documents**.",
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
        }
    };

    const handleUserMessage = (text) => {
        // Add user message
        setMessages(prev => [...prev, { type: 'user', text }]);
        setInputValue('');
        setQuickReplies([]);
        setIsTyping(true);

        // Simulate AI processing
        setTimeout(() => {
            setIsTyping(false);
            processResponse(text);
        }, 1000 + Math.random() * 500);
    };

    const processResponse = (message) => {
        // PII Check
        if (message.match(/\d{3}-\d{2}-\d{4}/) || message.match(/\d{9}/)) {
            setMessages(prev => [...prev, { type: 'bot', text: "⚠️ I detected sensitive information (SSN/ITIN). For your security, please **do not** share these details in the chat. Use our secure Document Upload feature instead." }]);
            return;
        }

        const intent = detectIntent(message);
        const response = getResponse(intent, message);

        setMessages(prev => [...prev, { type: 'bot', text: response.text }]);
        setQuickReplies(response.options || []);

        if (response.action) {
            // Handle actions like navigation
            if (response.action === '/upload') {
                // We can add a link or button in the message, or handle it here
                // For now, let's just let the user click the link if we rendered it, but here we can't easily render a link in the text unless we parse it.
                // The response text for UPLOAD_DOCS was changed to not include HTML link for simplicity in React, 
                // but we can add a special quick reply or handle it.
                // Let's rely on the quick reply 'Go to Upload Page'
            }
        }
    };

    const handleQuickReply = (option) => {
        if (option === 'Go to Upload Page') {
            navigate('/upload');
            setIsOpen(false);
            return;
        }
        handleUserMessage(option);
    };

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const response = getResponse(intents.GREETING, '');
            setMessages([{ type: 'bot', text: response.text }]);
            setQuickReplies(response.options);
        }
    }, [isOpen]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="chat-widget">
            <div className="chat-trigger" onClick={() => setIsOpen(!isOpen)}>
                <img src={nereaAvatar} alt="Nerea" />
            </div>

            {isOpen && (
                <div className="chat-container" style={{ display: 'flex' }}>
                    <div className="chat-header">
                        <div className="chat-avatar-container">
                            <img src={nereaAvatar} className="chat-avatar" alt="Nerea" />
                            <div className="chat-status-dot"></div>
                        </div>
                        <div className="chat-info">
                            <div className="chat-name">Nerea</div>
                            <div className="chat-role">AI Tax Expert • Online</div>
                        </div>
                        <button className="close-chat-btn" onClick={() => setIsOpen(false)}>&times;</button>
                    </div>                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? 'user-message' : 'bot-message'} dangerouslySetInnerHTML={{ __html: msg.text }}></div>
                        ))}
                        {isTyping && (
                            <div className="typing-indicator">
                                <div className="typing-dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="quick-replies">
                        {quickReplies.map((option, index) => (
                            <button key={index} className="quick-reply-btn" onClick={() => handleQuickReply(option)} style={{ animationDelay: `${index * 0.1}s` }}>
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="chat-input-area">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Type your message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && handleUserMessage(inputValue)}
                            />
                            <button className="send-btn" onClick={() => inputValue.trim() && handleUserMessage(inputValue)}>
                                <i className="fas fa-paper-plane" style={{ fontSize: '1.1rem' }}></i>
                            </button>
                        </div>
                        <div className="micro-copy">
                            <i className="fas fa-lock" style={{ fontSize: '0.65rem', marginRight: '4px' }}></i> Encrypted. Do not share SSN/ITIN.
                        </div>
                    </div>
                </div >
            )}
        </div >
    );
};

export default Chatbot;
