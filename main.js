// NeuralTax AI - Main Logic
// Persona: Nerea

const state = {
    locale: 'es-LATAM',
    userRole: 'Free',
    taxYear: '2026',
    isChatOpen: false
};

// DOM Elements
const chatTrigger = document.getElementById('chatTrigger');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('NeuralTax AI Initialized');
    setupChat();
});

function setupChat() {
    chatTrigger.addEventListener('click', () => {
        toggleChat();
    });
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
    // Basic chat UI implementation
    let chatContainer = document.getElementById('chatContainer');
    if (!chatContainer) {
        chatContainer = document.createElement('div');
        chatContainer.id = 'chatContainer';
        chatContainer.className = 'card';
        chatContainer.style.position = 'fixed';
        chatContainer.style.bottom = '90px';
        chatContainer.style.right = '2rem';
        chatContainer.style.width = '350px';
        chatContainer.style.height = '500px';
        chatContainer.style.display = 'flex';
        chatContainer.style.flexDirection = 'column';
        chatContainer.style.zIndex = '1000';
        chatContainer.style.padding = '0';
        chatContainer.style.overflow = 'hidden';

        chatContainer.innerHTML = `
            <div style="background-color: var(--bg-dark); color: white; padding: 1rem; display: flex; align-items: center; gap: 1rem;">
                <img src="nerea_avatar.png" style="width: 40px; height: 40px; border-radius: 50%;" alt="Nerea">
                <div>
                    <div style="font-weight: 600;">Nerea</div>
                    <div style="font-size: 10px; color: var(--accent-mint);">Experta en Taxes AI</div>
                </div>
                <button id="closeChat" style="margin-left: auto; background: none; border: none; color: white; cursor: pointer; font-size: 20px;">&times;</button>
            </div>
            <div id="chatMessages" style="flex: 1; padding: 1rem; overflow-y: auto; background-color: var(--bg-light); display: flex; flex-direction: column; gap: 1rem;">
                <div style="background-color: white; padding: 0.75rem; border-radius: var(--border-radius); max-width: 85%; align-self: flex-start; box-shadow: 0 2px 4px var(--shadow-color);">
                    ¡Hola! Soy Nerea. Estoy aquí para guiarte en tu declaración de taxes del año ${state.taxYear}. ¿En qué puedo ayudarte hoy?
                </div>
            </div>
            <div style="padding: 1rem; border-top: 1px solid var(--border-color); background-color: white;">
                <input type="text" id="chatInput" placeholder="Escribe tu mensaje..." style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); outline: none;">
                <div class="micro-copy" style="margin-top: 0.5rem; color: var(--text-secondary);">No compartas tu SSN/ITIN aquí.</div>
            </div>
        `;
        document.body.appendChild(chatContainer);
        
        document.getElementById('closeChat').onclick = toggleChat;
        
        const chatInput = document.getElementById('chatInput');
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && chatInput.value.trim()) {
                handleUserMessage(chatInput.value);
                chatInput.value = '';
            }
        });
    }
    chatContainer.style.display = 'flex';
}

function closeChatUI() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
        chatContainer.style.display = 'none';
    }
}

function handleUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.style = "background-color: var(--accent-mint); padding: 0.75rem; border-radius: var(--border-radius); max-width: 85%; align-self: flex-end; box-shadow: 0 2px 4px var(--shadow-color); color: var(--bg-dark);";
    userMsgDiv.textContent = message;
    chatMessages.appendChild(userMsgDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simple Nerea response logic
    setTimeout(() => {
        const nereaMsgDiv = document.createElement('div');
        nereaMsgDiv.style = "background-color: white; padding: 0.75rem; border-radius: var(--border-radius); max-width: 85%; align-self: flex-start; box-shadow: 0 2px 4px var(--shadow-color);";
        
        // PII Check
        if (message.match(/\d{3}-\d{2}-\d{4}/) || message.match(/\d{9}/)) {
            nereaMsgDiv.innerHTML = "He detectado información sensible (SSN/ITIN). Por favor, **NO** compartas estos datos en el chat. Utiliza nuestra carga segura de documentos para proteger tu privacidad.";
        } else {
            nereaMsgDiv.textContent = "Entiendo. Para ayudarte mejor con eso, ¿podrías decirme si estás presentando como individuo o como negocio?";
        }
        
        chatMessages.appendChild(nereaMsgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}
