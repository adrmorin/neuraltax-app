// NeuralTax AI - Main Logic
// Persona: Nerea

const state = {
    locale: 'es-LATAM',
    userRole: 'Free',
    taxYear: '2026',
    isChatOpen: false,
    conversationState: 'initial', // initial, awaiting_intent, awaiting_details, etc.
    context: {} // Store conversation context
};

// Conversation State Machine
const ConversationManager = {
    states: {
        INITIAL: 'initial',
        AWAITING_INTENT: 'awaiting_intent',
        AWAITING_REFUND_DETAILS: 'awaiting_refund_details',
        AWAITING_UPLOAD_CONFIRMATION: 'awaiting_upload_confirmation'
    },

    intents: {
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
        UNKNOWN: 'unknown'
    },

    detectIntent(message) {
        const lowerMsg = message.toLowerCase();

        // Context-aware checks
        if (window.location.pathname.includes('wizard.html')) {
            if (lowerMsg.includes('step') || lowerMsg.includes('next') || lowerMsg.includes('stuck') || lowerMsg.includes('help')) {
                return this.intents.WIZARD_HELP;
            }
        }

        if (lowerMsg.match(/\b(hello|hi|hola|hey|greetings|good morning|good afternoon)\b/)) return this.intents.GREETING;
        if (lowerMsg.match(/\b(status|track|where.*return|progress|update)\b/)) return this.intents.CHECK_STATUS;
        if (lowerMsg.match(/\b(refund|money|how much|estimate|calculator)\b/)) return this.intents.ESTIMATE_REFUND;
        if (lowerMsg.match(/\b(upload|document|w2|1099|file|submit|attach)\b/)) return this.intents.UPLOAD_DOCS;
        if (lowerMsg.match(/\b(human|agent|person|support|live|representative)\b/)) return this.intents.TALK_TO_HUMAN;
        if (lowerMsg.match(/\b(upgrade|premium|pay|subscription|cost|price)\b/)) return this.intents.UPGRADE;
        if (lowerMsg.match(/\b(help|options|menu|what can you do|assist)\b/)) return this.intents.HELP;
        if (lowerMsg.match(/\b(thank|thanks|thx|gracias|appreciate)\b/)) return this.intents.THANKS;
        if (lowerMsg.match(/\b(bye|goodbye|see ya|later|adios)\b/)) return this.intents.GOODBYE;
        if (lowerMsg.match(/\b(joke|funny|laugh)\b/)) return this.intents.JOKE;

        return this.intents.UNKNOWN;
    },

    getResponse(intent, message) {
        switch (intent) {
            case this.intents.GREETING:
                const greetings = [
                    "Hello! I'm Nerea, your AI Tax Assistant. Ready to get your taxes sorted?",
                    "Hi there! I'm Nerea. How can I make your tax season easier today?",
                    "Greetings! I'm Nerea, here to help you maximize your refund. What's on your mind?"
                ];
                return {
                    text: greetings[Math.floor(Math.random() * greetings.length)],
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
            case this.intents.WIZARD_HELP:
                let stepHelp = "I'm right here with you. What do you need help with?";
                if (typeof currentStep !== 'undefined') {
                    if (currentStep === 1) stepHelp = "We're just getting started! For **Personal Info**, double-check your SSN and spelling. It's the most common reason for rejections.";
                    if (currentStep === 2) stepHelp = "Income time! Don't forget side gigs. If you drove for Uber or sold on Etsy, select **1099-NEC**.";
                    if (currentStep === 3) stepHelp = "Deductions are where we save money! Standard deduction is $14,600 for singles in 2026. Unless you have a lot of expenses, it's usually the winner.";
                    if (currentStep === 4) stepHelp = "Almost done! Review everything carefully. If you need to change something, just click 'Back'.";
                }
                return {
                    text: stepHelp,
                    options: ['Continue', 'Talk to Human']
                };
            case this.intents.THANKS:
                return {
                    text: "You're very welcome! Is there anything else I can help you with?",
                    options: ['Check Status', 'Estimate Refund']
                };
            case this.intents.GOODBYE:
                return {
                    text: "Goodbye! Come back if you have more questions. Happy filing!",
                    options: []
                };
            case this.intents.JOKE:
                return {
                    text: "Why did the auditor cross the road? <br><br>To look at the chicken's receipts! 🐔🧾",
                    options: ['That was bad', 'One more']
                };
            case this.intents.CHECK_STATUS:
                return {
                    text: "Your 2026 Federal Return is currently **Processing**. <br><br>We filed it on Jan 18, 2026. The IRS typically accepts returns within 24-48 hours.",
                    options: ['Estimate Refund', 'Upload Docs']
                };
            case this.intents.ESTIMATE_REFUND:
                return {
                    text: "Based on your latest data, your estimated Federal Refund is **$2,450**. <br><br>This amount is subject to final IRS approval.",
                    options: ['Check Status', 'Spend it wisely!']
                };
            case this.intents.UPLOAD_DOCS:
                return {
                    text: "You can securely upload your W-2s, 1099s, and other tax documents here: <br><br><a href='upload.html' class='btn btn-primary' style='display: inline-block; margin-top: 0.5rem; font-size: 0.8rem; padding: 0.5rem 1rem;'>Go to Upload Page</a>",
                    options: ['Check Status', 'Estimate Refund']
                };
            case this.intents.TALK_TO_HUMAN:
                return {
                    text: "I can connect you with a certified tax professional. <br><br>Please note that live support is a **Premium** feature. Would you like to upgrade?",
                    options: ['Upgrade Plan', 'No thanks']
                };
            case this.intents.UPGRADE:
                return {
                    text: "Great choice! Premium includes audit protection, live support, and priority processing. <br><br><a href='#' style='color: var(--accent-green-bright); font-weight: 600;'>Click here to upgrade for $300/year</a>.",
                    options: ['Check Status']
                };
            case this.intents.HELP:
                return {
                    text: "I can help you check your **return status**, estimate your **refund**, or **upload documents**. What would you like to do?",
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
            default:
                return {
                    text: "I'm still learning! I didn't quite catch that. You can ask me about your **return status**, **refund estimate**, or how to **upload documents**.",
                    options: ['Check Status', 'Estimate Refund', 'Upload Docs']
                };
        }
    }
};

// DOM Elements
const chatTrigger = document.getElementById('chatTrigger');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('NeuralTax AI Initialized');
    setupChat();
});

function setupChat() {
    if (chatTrigger) {
        chatTrigger.addEventListener('click', () => {
            toggleChat();
        });

    }
}

function toggleChat() {
    state.isChatOpen = !state.isChatOpen;
    if (state.isChatOpen) {
        openChatUI();
    } else {
        closeChatUI();
    }
}

function openChatUI() {
    let chatContainer = document.getElementById('chatContainer');
    if (!chatContainer) {
        chatContainer = document.createElement('div');
        chatContainer.id = 'chatContainer';
        chatContainer.className = 'chat-container';

        chatContainer.innerHTML = `
            <div class="chat-header">
                <div class="chat-avatar-container">
                    <img src="nerea_avatar.png" class="chat-avatar" alt="Nerea">
                    <div class="chat-status-dot"></div>
                </div>
                <div class="chat-info">
                    <div class="chat-name">Nerea</div>
                    <div class="chat-role">AI Tax Expert • Online</div>
                </div>
                <button id="closeChat" class="close-chat-btn">&times;</button>
            </div>
            <div id="chatMessages" class="chat-messages">
                <!-- Messages will appear here -->
            </div>
            <div id="quickReplies" class="quick-replies">
                <!-- Quick replies will appear here -->
            </div>
            <div class="chat-input-area">
                <div class="input-wrapper">
                    <input type="text" id="chatInput" class="chat-input" placeholder="Type your message...">
                    <button id="sendBtn" class="send-btn">
                        <i class="fas fa-paper-plane" style="font-size: 1.1rem;"></i>
                    </button>
                </div>
                <div class="micro-copy">
                    <i class="fas fa-lock" style="font-size: 0.65rem; margin-right: 4px;"></i> Encrypted. Do not share SSN/ITIN.
                </div>
            </div>
        `;
        document.body.appendChild(chatContainer);

        // Event Listeners
        document.getElementById('closeChat').onclick = toggleChat;

        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');

        const sendMessage = () => {
            if (chatInput.value.trim()) {
                handleUserMessage(chatInput.value);
                chatInput.value = '';
            }
        };

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        sendBtn.addEventListener('click', sendMessage);

        // Initial Greeting
        if (state.conversationState === ConversationManager.states.INITIAL) {
            const response = ConversationManager.getResponse(ConversationManager.intents.GREETING);
            addBotMessage(response.text);
            showQuickReplies(response.options);
            state.conversationState = ConversationManager.states.AWAITING_INTENT;
        }
    }
    chatContainer.style.display = 'flex';
}

function closeChatUI() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
        chatContainer.style.display = 'none';
    }
}

function addUserMessage(text) {
    const chatMessages = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'user-message';
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(htmlContent) {
    const chatMessages = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'bot-message';
    msgDiv.innerHTML = htmlContent;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function showQuickReplies(options) {
    const container = document.getElementById('quickReplies');
    container.innerHTML = '';
    if (!options) return;

    options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'quick-reply-btn';
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.onclick = () => handleUserMessage(opt);
        container.appendChild(btn);
    });
}

function handleUserMessage(message) {
    addUserMessage(message);
    document.getElementById('quickReplies').innerHTML = ''; // Clear quick replies

    showTypingIndicator();

    // Simulate AI processing time
    setTimeout(() => {
        removeTypingIndicator();
        processResponse(message);
    }, 1000 + Math.random() * 500);
}

function processResponse(message) {
    // PII Check
    if (message.match(/\d{3}-\d{2}-\d{4}/) || message.match(/\d{9}/)) {
        addBotMessage("⚠️ I detected sensitive information (SSN/ITIN). For your security, please **do not** share these details in the chat. Use our secure <a href='upload.html' style='color: var(--accent-green-bright); text-decoration: underline;'>Document Upload</a> feature instead.");
        return;
    }

    const intent = ConversationManager.detectIntent(message);
    const response = ConversationManager.getResponse(intent, message);

    addBotMessage(response.text);
    showQuickReplies(response.options);
}
