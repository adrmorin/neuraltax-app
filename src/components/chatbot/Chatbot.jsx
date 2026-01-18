import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Chatbot.css'; // We'll create this or rely on global styles
import nereaAvatar from '../../assets/nerea_avatar.png';

const Chatbot = () => {
    const { t, i18n } = useTranslation();
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
            if (lowerMsg.match(/\b(step|paso|next|siguiente|stuck|atrapado|help|ayuda)\b/)) {
                return intents.WIZARD_HELP;
            }
        }

        if (path.includes('dashboard')) {
            if (lowerMsg.match(/\b(status|estado|track|seguimiento|return|declaracion)\b/)) {
                return intents.CHECK_STATUS;
            }
            if (lowerMsg.match(/\b(refund|reembolso|much|cuanto|estimate|estimacion)\b/)) {
                return intents.ESTIMATE_REFUND;
            }
        }

        if (path.includes('upload')) {
            if (lowerMsg.match(/\b(safe|seguro|secure|seguridad|encrypt|encriptado)\b/)) {
                return 'security_check';
            }
            if (lowerMsg.match(/\b(type|tipo|format|formato|file|archivo)\b/)) {
                return 'file_types';
            }
        }

        if (lowerMsg.match(/\b(hello|hi|hola|hey|greetings|saludos|good morning|buenos dias|good afternoon|buenas tardes)\b/)) return intents.GREETING;
        if (lowerMsg.match(/\b(status|estado|track|seguimiento|where.*return|donde.*declaracion|progress|progreso|update|actualizacion)\b/)) return intents.CHECK_STATUS;
        if (lowerMsg.match(/\b(refund|reembolso|money|dinero|how much|cuanto|estimate|estimacion|calculator|calculadora)\b/)) return intents.ESTIMATE_REFUND;
        if (lowerMsg.match(/\b(upload|subir|cargar|document|documento|w2|1099|file|archivo|submit|enviar|attach|adjuntar)\b/)) return intents.UPLOAD_DOCS;
        if (lowerMsg.match(/\b(human|humano|agent|agente|person|persona|support|soporte|live|vivo|representative|representante)\b/)) return intents.TALK_TO_HUMAN;
        if (lowerMsg.match(/\b(upgrade|mejorar|premium|pay|pagar|subscription|suscripcion|cost|costo|price|precio)\b/)) return intents.UPGRADE;
        if (lowerMsg.match(/\b(help|ayuda|options|opciones|menu|what can you do|que puedes hacer|assist|asistir)\b/)) return intents.HELP;
        if (lowerMsg.match(/\b(thank|thanks|thx|gracias|appreciate|agradezco)\b/)) return intents.THANKS;
        if (lowerMsg.match(/\b(bye|goodbye|adios|see ya|nos vemos|later|luego)\b/)) return intents.GOODBYE;
        if (lowerMsg.match(/\b(joke|broma|chiste|funny|gracioso|laugh|reir)\b/)) return intents.JOKE;

        // New Intents
        if (lowerMsg.match(/\b(deadline|fecha limite|due date|vencimiento|when.*due|cuando.*vence|late|tarde)\b/)) return intents.DEADLINE;
        if (lowerMsg.match(/\b(extension|extensión|more time|mas tiempo|later|mas tarde|delay|retraso)\b/)) return intents.EXTENSION;
        if (lowerMsg.match(/\b(can i claim|puedo reclamar|deduct|deducir|eligible|elegible|write off|descontar|dog|perro|pet|mascota|cat|gato)\b/)) return intents.ELIGIBILITY;

        return intents.UNKNOWN;
    };

    const getResponse = (intent, message) => {
        const path = location.pathname;

        switch (intent) {
            case intents.GREETING:
                const greetings = t('chatbot.responses.greeting', { returnObjects: true });
                return {
                    text: greetings[Math.floor(Math.random() * greetings.length)],
                    options: [t('chatbot.options.check_status'), t('chatbot.options.estimate_refund'), t('chatbot.options.upload_docs')]
                };
            case intents.WIZARD_HELP:
                return {
                    text: t('chatbot.responses.wizard_help'),
                    options: [t('chatbot.options.continue'), t('chatbot.options.talk_to_human')]
                };
            case 'security_check':
                return {
                    text: t('chatbot.responses.security_check'),
                    options: [t('chatbot.options.upload_docs'), t('chatbot.options.file_types')]
                };
            case 'file_types':
                return {
                    text: t('chatbot.responses.file_types'),
                    options: [t('chatbot.options.upload_docs'), t('chatbot.options.security')]
                };
            case intents.THANKS:
                return {
                    text: t('chatbot.responses.thanks'),
                    options: [t('chatbot.options.check_status'), t('chatbot.options.estimate_refund')]
                };
            case intents.GOODBYE:
                return {
                    text: t('chatbot.responses.goodbye'),
                    options: []
                };
            case intents.JOKE:
                return {
                    text: t('chatbot.responses.joke'),
                    options: [t('chatbot.options.that_was_bad'), t('chatbot.options.one_more')]
                };
            case intents.CHECK_STATUS:
                if (path.includes('dashboard')) {
                    return {
                        text: t('chatbot.responses.check_status_dashboard'),
                        options: [t('chatbot.options.estimate_refund'), t('chatbot.options.upload_docs')]
                    };
                }
                return {
                    text: t('chatbot.responses.check_status'),
                    options: [t('chatbot.options.estimate_refund'), t('chatbot.options.upload_docs')]
                };
            case intents.ESTIMATE_REFUND:
                if (path.includes('dashboard')) {
                    return {
                        text: t('chatbot.responses.estimate_refund_dashboard'),
                        options: [t('chatbot.options.check_status'), t('chatbot.options.spend_it_wisely')]
                    };
                }
                return {
                    text: t('chatbot.responses.estimate_refund'),
                    options: [t('chatbot.options.check_status'), t('chatbot.options.spend_it_wisely')]
                };
            case intents.UPLOAD_DOCS:
                return {
                    text: t('chatbot.responses.upload_docs'),
                    options: [t('chatbot.options.go_to_upload'), t('chatbot.options.check_status')],
                    action: '/upload'
                };
            case intents.TALK_TO_HUMAN:
                return {
                    text: t('chatbot.responses.talk_to_human'),
                    options: [t('chatbot.options.upgrade_plan'), t('chatbot.options.no_thanks')]
                };
            case intents.UPGRADE:
                return {
                    text: t('chatbot.responses.upgrade'),
                    options: [t('chatbot.options.check_status')]
                };
            case intents.HELP:
                return {
                    text: t('chatbot.responses.help'),
                    options: [t('chatbot.options.check_status'), t('chatbot.options.estimate_refund'), t('chatbot.options.upload_docs')]
                };
            case intents.DEADLINE:
                return {
                    text: t('chatbot.responses.deadline'),
                    options: [t('chatbot.options.file_extension'), t('chatbot.options.check_status')]
                };
            case intents.EXTENSION:
                return {
                    text: t('chatbot.responses.extension'),
                    options: [t('chatbot.options.estimate_refund'), t('chatbot.options.talk_to_human')]
                };
            case intents.ELIGIBILITY:
                if (message.toLowerCase().match(/\b(dog|perro|pet|mascota|cat|gato)\b/)) {
                    return {
                        text: t('chatbot.responses.eligibility_pets'),
                        options: [t('chatbot.options.deductions_help'), t('chatbot.options.talk_to_human')]
                    };
                }
                return {
                    text: t('chatbot.responses.eligibility_general'),
                    options: [t('chatbot.options.talk_to_human'), t('chatbot.options.help')]
                };
            default:
                return {
                    text: t('chatbot.responses.unknown'),
                    options: [t('chatbot.options.check_status'), t('chatbot.options.estimate_refund'), t('chatbot.options.upload_docs')]
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
            setMessages(prev => [...prev, { type: 'bot', text: t('chatbot.pii_warning') }]);
            return;
        }

        const intent = detectIntent(message);
        const response = getResponse(intent, message);

        setMessages(prev => [...prev, { type: 'bot', text: response.text }]);
        setQuickReplies(response.options || []);
    };

    const handleQuickReply = (option) => {
        if (option === t('chatbot.options.go_to_upload')) {
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
                            <div className="chat-role">{t('chatbot.role')}</div>
                        </div>
                        <button className="close-chat-btn" onClick={() => setIsOpen(false)}>&times;</button>
                    </div>
                    <div className="chat-messages">
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
                                placeholder={t('chatbot.placeholder')}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && handleUserMessage(inputValue)}
                            />
                            <button className="send-btn" onClick={() => inputValue.trim() && handleUserMessage(inputValue)}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>send</span>
                            </button>
                        </div>
                        <div className="micro-copy">
                            <span className="material-symbols-outlined" style={{ fontSize: '0.8rem', marginRight: '4px' }}>lock</span> {t('chatbot.encrypted_notice')}
                        </div>
                    </div>
                </div >
            )}
        </div>
    );
};

export default Chatbot;
