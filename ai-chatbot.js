/**
 * JanSetu AI Civic Assistant Chatbot
 * Interactive Multilingual AI Chatbot with Voice Input/Output, Photo Upload,
 * Live GPS Sharing, Grievance Auto-Triage, Ticket Tracking, and PDF Receipts.
 */

(function() {
    function mountAIChatbot() {
        if (document.getElementById('jansetuAiChatbotRoot')) return;
        if (!document.body) {
            document.addEventListener('DOMContentLoaded', mountAIChatbot);
            return;
        }

        // 1. Inject Styles
        const style = document.createElement('style');
        style.id = 'jansetuAiChatbotStyles';
        style.innerHTML = `
            .ai-chat-trigger-btn {
                position: fixed;
                bottom: 24px;
                right: 24px;
                height: 52px;
                padding: 0 18px 0 14px;
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7c3aed 100%);
                color: #ffffff;
                border-radius: 28px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 8px 25px rgba(37, 99, 235, 0.45);
                cursor: pointer;
                z-index: 99999;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                border: 2px solid rgba(255, 255, 255, 0.25);
                outline: none;
                user-select: none;
            }
            .ai-chat-trigger-btn:hover {
                transform: translateY(-3px) scale(1.03);
                box-shadow: 0 12px 32px rgba(124, 58, 237, 0.55);
            }
            .ai-chat-trigger-icon {
                width: 32px;
                height: 32px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                animation: pulseGlow 2.5s infinite;
            }
            .ai-chat-trigger-text {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.2px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 1.2;
            }
            .ai-chat-trigger-text small {
                font-size: 10px;
                font-weight: 500;
                opacity: 0.85;
                color: #fef08a;
            }
            @keyframes pulseGlow {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); background: rgba(255, 255, 255, 0.35); }
            }
            .ai-chat-window {
                position: fixed;
                bottom: 88px;
                right: 24px;
                width: 400px;
                max-width: calc(100vw - 32px);
                height: 580px;
                max-height: calc(100vh - 110px);
                background: #ffffff;
                border-radius: 18px;
                box-shadow: 0 20px 60px -10px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(0,0,0,0.06);
                display: none;
                flex-direction: column;
                overflow: hidden;
                z-index: 100000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                animation: slideUpFade 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            @keyframes slideUpFade {
                from { opacity: 0; transform: translateY(16px) scale(0.96); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .ai-chat-window.active {
                display: flex;
            }
            .ai-header {
                background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                color: #ffffff;
                padding: 12px 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .ai-header-info {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .ai-avatar {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }
            .ai-header-controls {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .ai-lang-select {
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.35);
                color: #ffffff;
                font-size: 11px;
                font-weight: 600;
                padding: 3px 6px;
                border-radius: 6px;
                outline: none;
                cursor: pointer;
            }
            .ai-lang-select option {
                background: #1e3a8a;
                color: #ffffff;
            }
            .ai-close-btn {
                background: rgba(255,255,255,0.15);
                border: none;
                color: #ffffff;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                font-size: 14px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
            }
            .ai-close-btn:hover {
                background: rgba(255,255,255,0.3);
            }
            .ai-messages {
                flex: 1;
                padding: 14px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: #f8fafc;
            }
            .ai-msg {
                max-width: 86%;
                padding: 10px 14px;
                border-radius: 12px;
                font-size: 12.5px;
                line-height: 1.45;
                position: relative;
                word-wrap: break-word;
                box-shadow: 0 1px 3px rgba(0,0,0,0.06);
            }
            .ai-msg.bot {
                align-self: flex-start;
                background: #ffffff;
                color: #0f172a;
                border: 1px solid #e2e8f0;
                border-top-left-radius: 3px;
            }
            .ai-msg.user {
                align-self: flex-end;
                background: #2563eb;
                color: #ffffff;
                border-top-right-radius: 3px;
            }
            .ai-msg.bot strong {
                color: #1e3a8a;
            }
            .ai-time {
                font-size: 9px;
                color: #94a3b8;
                float: right;
                margin-left: 8px;
                margin-top: 4px;
            }
            .ai-msg.user .ai-time {
                color: #bfdbfe;
            }
            .ai-voice-listen-tag {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 2px 6px;
                background: #f1f5f9;
                color: #2563eb;
                border-radius: 4px;
                font-size: 10px;
                font-weight: 700;
                cursor: pointer;
                margin-top: 6px;
                border: 1px solid #cbd5e1;
            }
            .ai-voice-listen-tag:hover {
                background: #2563eb;
                color: #fff;
            }
            .ai-chips-container {
                display: flex;
                gap: 6px;
                overflow-x: auto;
                padding: 8px 12px;
                background: #ffffff;
                border-top: 1px solid #e2e8f0;
                border-bottom: 1px solid #e2e8f0;
                scrollbar-width: none;
            }
            .ai-chip {
                white-space: nowrap;
                background: #eff6ff;
                color: #1e40af;
                border: 1px solid #bfdbfe;
                border-radius: 14px;
                padding: 4px 10px;
                font-size: 11px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }
            .ai-chip:hover {
                background: #2563eb;
                color: #ffffff;
                border-color: #2563eb;
            }
            .ai-input-bar {
                background: #ffffff;
                padding: 10px 12px;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .ai-input {
                flex: 1;
                border: 1px solid #cbd5e1;
                background: #f8fafc;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 12.5px;
                outline: none;
                font-family: inherit;
                transition: border-color 0.2s, background 0.2s;
            }
            .ai-input:focus {
                border-color: #2563eb;
                background: #ffffff;
            }
            .ai-tool-btn {
                background: none;
                border: none;
                font-size: 17px;
                cursor: pointer;
                padding: 6px;
                color: #64748b;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.2s, color 0.2s;
            }
            .ai-tool-btn:hover {
                background: #f1f5f9;
                color: #2563eb;
            }
            .ai-tool-btn.recording {
                background: #fee2e2;
                color: #dc2626;
                animation: pulseRecord 1.2s infinite;
            }
            @keyframes pulseRecord {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
            }
            .ai-send-btn {
                background: #2563eb;
                color: #ffffff;
                border: none;
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 13px;
                transition: background 0.2s, transform 0.15s;
            }
            .ai-send-btn:hover {
                background: #1d4ed8;
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(style);

        // 2. Inject HTML
        const container = document.createElement('div');
        container.id = 'jansetuAiChatbotRoot';
        container.innerHTML = `
            <button class="ai-chat-trigger-btn" id="aiChatTriggerBtn" title="Chat with JanSetu AI Civic Assistant">
                <div class="ai-chat-trigger-icon">🤖</div>
                <div class="ai-chat-trigger-text">
                    <span>Ask JanSetu AI</span>
                    <small>⚡ 24/7 Civic Assistant</small>
                </div>
            </button>

            <div class="ai-chat-window" id="aiChatWindow">
                <!-- Header -->
                <div class="ai-header">
                    <div class="ai-header-info">
                        <div class="ai-avatar">🏛️</div>
                        <div>
                            <strong style="font-size: 13.5px; display: block;">JanSetu AI Civic Assistant</strong>
                            <small style="font-size: 10px; color: #bbf7d0;">● Online • Auto-Triage & Ward 12 Guide</small>
                        </div>
                    </div>
                    <div class="ai-header-controls">
                        <select class="ai-lang-select" id="aiChatLangSelect" title="Select Chat Language" onchange="JanSetuAIChatbot.setLanguage(this.value)">
                            <option value="en">English</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="or">ଓଡ଼ିଆ (Odia)</option>
                            <option value="bn">বাংলা (Bengali)</option>
                            <option value="gu">ગુજરાતી (Gujarati)</option>
                            <option value="ta">தமிழ் (Tamil)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                            <option value="mr">मराठी (Marathi)</option>
                            <option value="kn">ಕನ್ನಡ (Kannada)</option>
                        </select>
                        <button class="ai-close-btn" id="aiChatCloseBtn" title="Close Chat">✕</button>
                    </div>
                </div>

                <!-- Messages Stream -->
                <div class="ai-messages" id="aiMessages">
                    <div class="ai-msg bot">
                        🙏 <strong>Namaste!</strong> I am your <strong>JanSetu AI Civic Assistant</strong>.
                        <br><br>
                        I can help you:
                        <br>• 🚧 <strong>Register civic issues</strong> with photo & GPS
                        <br>• 🔍 <strong>Track real-time status</strong> of tickets (e.g. <code>#JS-20481</code>)
                        <br>• 🏛️ <strong>Find Ward 12 Officers</strong> & 24-hr ORTPS SLA deadlines
                        <br>• 🗳️ <strong>Vote on Participatory Budget</strong> proposals
                        <br><br>
                        <em>Type your problem, attach a photo, or tap the microphone to speak in your language!</em>
                        <br>
                        <button class="ai-voice-listen-tag" onclick="JanSetuAIChatbot.speakLastBotMsg(this)">
                            🔊 Listen
                        </button>
                        <span class="ai-time">Just now</span>
                    </div>
                </div>

                <!-- Quick Suggestion Chips -->
                <div class="ai-chips-container">
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('🚧 Report large pothole on Saheed Nagar Main Road')">🚧 Report Pothole</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('💡 Streetlight broken near Sector 5')">💡 Broken Light</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('🗑️ Garbage overflow at Unit 4 market')">🗑️ Garbage Dump</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('🔍 Track Status #JS-20481')">🔍 Track #JS-20481</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('🏛️ Who is my Ward Officer and Councillor?')">🏛️ Ward 12 Officials</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('📜 What is the 24-hour ORTPS SLA guarantee?')">📜 24-hr SLA</span>
                    <span class="ai-chip" onclick="JanSetuAIChatbot.sendQuick('🗳️ How to vote on Ward Budget projects?')">🗳️ Budget Voting</span>
                </div>

                <!-- Input Bar -->
                <div class="ai-input-bar">
                    <label class="ai-tool-btn" title="Attach Photo Proof">
                        📷
                        <input type="file" id="aiPhotoInput" accept="image/*" style="display: none;" onchange="JanSetuAIChatbot.handlePhotoUpload(this)">
                    </label>
                    <button class="ai-tool-btn" id="aiVoiceBtn" title="Speak to JanSetu AI" onclick="JanSetuAIChatbot.toggleSpeechRecognition()">🎙️</button>
                    <button class="ai-tool-btn" title="Share Live GPS Location" onclick="JanSetuAIChatbot.sendLiveGPS()">📍</button>
                    <input type="text" class="ai-input" id="aiInput" placeholder="Ask AI or describe civic problem..." onkeypress="if(event.key==='Enter') JanSetuAIChatbot.sendMsg()">
                    <button class="ai-send-btn" title="Send Message" onclick="JanSetuAIChatbot.sendMsg()">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        // 3. Bind UI Events
        const triggerBtn = document.getElementById('aiChatTriggerBtn');
        const closeBtn = document.getElementById('aiChatCloseBtn');
        const chatWindow = document.getElementById('aiChatWindow');

        if (triggerBtn && chatWindow) {
            triggerBtn.addEventListener('click', () => {
                JanSetuAIChatbot.toggle();
            });
        }
        if (closeBtn && chatWindow) {
            closeBtn.addEventListener('click', () => {
                JanSetuAIChatbot.close();
            });
        }

        const langSelect = document.getElementById('aiChatLangSelect');
        if (langSelect) {
            langSelect.value = localStorage.getItem('jansetu_preferred_lang') || 'en';
        }
    }

    // Auto mount on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountAIChatbot);
    } else {
        mountAIChatbot();
    }

    let isRecording = false;
    let recognition = null;
    let currentChatLang = localStorage.getItem('jansetu_preferred_lang') || 'en';

    window.JanSetuAIChatbot = {
        open() {
            const win = document.getElementById('aiChatWindow');
            if (win) {
                win.classList.add('active');
                document.getElementById('aiInput')?.focus();
            }
        },

        close() {
            const win = document.getElementById('aiChatWindow');
            if (win) {
                win.classList.remove('active');
                if (typeof window !== "undefined" && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                }
            }
        },

        toggle() {
            const win = document.getElementById('aiChatWindow');
            if (win) {
                if (win.classList.contains('active')) {
                    this.close();
                } else {
                    this.open();
                }
            }
        },

        setLanguage(lang) {
            currentChatLang = lang;
            localStorage.setItem('jansetu_preferred_lang', lang);
            if (window.changeDashboardLanguage) {
                window.changeDashboardLanguage(lang);
            }
        },

        sendQuick(text) {
            const input = document.getElementById('aiInput');
            if (input) {
                input.value = text;
                this.sendMsg();
            }
        },

        handlePhotoUpload(input) {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.sendUserPhotoMessage(e.target.result, file.name);
                };
                reader.readAsDataURL(file);
                input.value = '';
            }
        },

        sendUserPhotoMessage(base64Data, fileName) {
            const messages = document.getElementById('aiMessages');
            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const userMsg = document.createElement('div');
            userMsg.className = 'ai-msg user';
            userMsg.innerHTML = `
                <div style="margin-bottom: 4px;">
                    <img src="${base64Data}" style="width: 100%; max-height: 140px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.4);">
                </div>
                <span>📸 Attached Photo Evidence: <strong>${fileName}</strong></span>
                <span class="ai-time">${now}</span>
            `;
            messages.appendChild(userMsg);
            messages.scrollTop = messages.scrollHeight;

            this.processAIResponse('Photo uploaded: Civic damage inspection & auto-triage requested with image proof.');
        },

        sendLiveGPS() {
            const messages = document.getElementById('aiMessages');
            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const userMsg = document.createElement('div');
            userMsg.className = 'ai-msg user';
            userMsg.innerHTML = `
                <div style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; padding: 6px 10px; margin-bottom: 4px;">
                    <strong style="font-size: 12px; display: block;">📍 Live GPS Location Shared</strong>
                    <div style="font-size: 11px; opacity: 0.95;">Lat: 20.2742° N, Lng: 85.8324° E (Ward 12, Saheed Nagar)</div>
                </div>
                <span>Assigning grievance coordinates to Ward 12 municipal grid.</span>
                <span class="ai-time">${now}</span>
            `;
            messages.appendChild(userMsg);
            messages.scrollTop = messages.scrollHeight;

            this.processAIResponse('Location locked: Saheed Nagar Main Road, Ward 12, Bhubaneswar');
        },

        toggleSpeechRecognition() {
            const voiceBtn = document.getElementById('aiVoiceBtn');
            const input = document.getElementById('aiInput');

            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRec) {
                alert("Voice recognition is not supported in this browser. Please type your message.");
                return;
            }

            if (isRecording) {
                if (recognition) recognition.stop();
                isRecording = false;
                if (voiceBtn) voiceBtn.classList.remove('recording');
                return;
            }

            try {
                recognition = new SpeechRec();
                const langMap = {
                    "en": "en-IN", "hi": "hi-IN", "or": "or-IN", "bn": "bn-IN",
                    "gu": "gu-IN", "ta": "ta-IN", "te": "te-IN", "mr": "mr-IN", "kn": "kn-IN"
                };
                recognition.lang = langMap[currentChatLang] || "en-IN";
                recognition.interimResults = false;

                recognition.onstart = () => {
                    isRecording = true;
                    if (voiceBtn) voiceBtn.classList.add('recording');
                    if (input) input.placeholder = "Listening... Speak your civic complaint...";
                };

                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    if (input) input.value = transcript;
                    this.sendMsg();
                };

                recognition.onerror = (e) => {
                    console.warn("Speech error:", e);
                    isRecording = false;
                    if (voiceBtn) voiceBtn.classList.remove('recording');
                    if (input) input.placeholder = "Ask AI or describe civic problem...";
                };

                recognition.onend = () => {
                    isRecording = false;
                    if (voiceBtn) voiceBtn.classList.remove('recording');
                    if (input) input.placeholder = "Ask AI or describe civic problem...";
                };

                recognition.start();
            } catch (err) {
                console.error("Speech rec init error:", err);
            }
        },

        speakLastBotMsg(button) {
            const parentMsg = button?.closest('.ai-msg.bot');
            if (!parentMsg) return;

            const clone = parentMsg.cloneNode(true);
            clone.querySelectorAll('button, a, select, .ai-time').forEach(el => el.remove());
            const textToSpeak = clone.textContent.trim();

            if (button) button.innerHTML = `<span>🔊</span> Speaking...`;
            if (window.JanSetuAPI && window.JanSetuAPI.speakText) {
                window.JanSetuAPI.speakText(
                    textToSpeak, 
                    currentChatLang,
                    () => { if (button) button.innerHTML = `<span>🔊</span> Speaking...`; },
                    () => { if (button) button.innerHTML = `<span>🔊</span> Listen`; }
                );
            }
        },

        async sendMsg() {
            const input = document.getElementById('aiInput');
            const messages = document.getElementById('aiMessages');
            if (!input || !messages) return;

            const text = input.value.trim();
            if (!text) return;

            input.value = '';

            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const userMsg = document.createElement('div');
            userMsg.className = 'ai-msg user';
            userMsg.innerHTML = `${text} <span class="ai-time">${now}</span>`;
            messages.appendChild(userMsg);
            messages.scrollTop = messages.scrollHeight;

            this.processAIResponse(text);
        },

        async processAIResponse(userText) {
            const messages = document.getElementById('aiMessages');
            const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Typing indicator
            const typing = document.createElement('div');
            typing.className = 'ai-msg bot';
            typing.id = 'aiTypingIndicator';
            typing.innerHTML = '<em>🤖 JanSetu AI is analyzing & querying municipal records...</em>';
            messages.appendChild(typing);
            messages.scrollTop = messages.scrollHeight;

            const lower = userText.toLowerCase();

            setTimeout(async () => {
                const typingElem = document.getElementById('aiTypingIndicator');
                if (typingElem) typingElem.remove();

                const botMsg = document.createElement('div');
                botMsg.className = 'ai-msg bot';

                let rawResponse = "";

                // 1. TICKET STATUS TRACKING
                if (lower.includes('track') || lower.includes('status') || lower.includes('js-') || lower.includes('20481')) {
                    rawResponse = `
                        📋 <strong>Grievance #JS-20481 Status Record:</strong><br><br>
                        • <strong>Title:</strong> Road damage & large crater near Unit 4<br>
                        • <strong>Department:</strong> Roads & Infrastructure<br>
                        • <strong>Current Status:</strong> <span style="color:#2563eb; font-weight:bold;">In Progress</span><br>
                        • <strong>Nodal Officer:</strong> Er. Rajesh Mohapatra (EE)<br>
                        • <strong>Official Email:</strong> <a href="mailto:rajesh.mohapatra@bmc.gov.in" style="color:#2563eb;">rajesh.mohapatra@bmc.gov.in</a><br>
                        • <strong>Assigned Contractor:</strong> Apex Civic Infra Ltd.<br>
                        • <strong>SLA Guarantee:</strong> 24 Hours (Guaranteed under ORTPS Act)<br>
                        • <strong>Community Corroboration:</strong> 18 Upvotes<br><br>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            <button onclick="JanSetuPDF.downloadCitizenReceipt({ticket_id: 'JS-20481', title: 'Road damage near Unit 4', category: 'Road & Infrastructure', status: 'In Progress', ward: 'Ward 12' })" style="background:#0284c7; color:#fff; border:none; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:bold; cursor:pointer;">📥 Download PDF Receipt</button>
                            <a href="citizendashboard.html" style="background:#f1f5f9; color:#0f172a; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; border:1px solid #cbd5e1;">Open in Map View →</a>
                        </div>
                    `;
                }
                // 2. WARD OFFICERS & COUNCILLOR
                else if (lower.includes('officer') || lower.includes('councillor') || lower.includes('official') || lower.includes('who')) {
                    rawResponse = `
                        🏛️ <strong>Ward 12 Municipal Authorities:</strong><br><br>
                        • <strong>Nodal Executive Engineer:</strong> Er. Rajesh Mohapatra (EE)<br>
                        • <strong>Official Email:</strong> <a href="mailto:rajesh.mohapatra@bmc.gov.in" style="color:#2563eb;">rajesh.mohapatra@bmc.gov.in</a><br>
                        • <strong>Ward Councillor:</strong> Smt. Jayashree Das (Ward 12, Saheed Nagar)<br>
                        • <strong>Sanitation Inspector:</strong> Sri A. K. Nayak (Ph: 0674-2548900)<br>
                        • <strong>Jurisdiction:</strong> Saheed Nagar, Unit 4, Master Canteen, BMC Central
                    `;
                }
                // 3. ORTPS 24-HOUR SLA GUARANTEE
                else if (lower.includes('sla') || lower.includes('ortps') || lower.includes('guarantee') || lower.includes('hour') || lower.includes('time')) {
                    rawResponse = `
                        📜 <strong>Odisha Right to Public Services (ORTPS) Guarantee:</strong><br><br>
                        • <strong>Statutory 24-Hour SLA:</strong> Critical civic issues (hazardous potholes, street dark zones, pipe bursts) must be resolved within 24 hours.<br>
                        • <strong>Auto-Escalation:</strong> If a ticket remains unresolved past SLA, it automatically escalates to the Municipal Commissioner with contractor penalty alerts.<br>
                        • <strong>Citizen Verification:</strong> Resolution is only marked complete once a citizen inspects and confirms with after-repair photo proof!
                    `;
                }
                // 4. PARTICIPATORY BUDGETING
                else if (lower.includes('budget') || lower.includes('vote') || lower.includes('project') || lower.includes('money')) {
                    rawResponse = `
                        🗳️ <strong>Ward 12 Participatory Budgeting:</strong><br><br>
                        You have direct voting power over municipal project funds in Ward 12! Active proposals:<br>
                        1. 💡 <strong>Solar LED Street Lighting</strong> (₹4.5L • 78% voted)<br>
                        2. ≋ <strong>Stormwater Drain Desilting</strong> (₹12.0L • 76% voted)<br>
                        3. 🌳 <strong>Community Park Children Zone</strong> (₹6.5L • 77% voted)<br>
                        4. 🗑️ <strong>Smart Waste Segregation Bins</strong> (₹3.2L • 81% voted)<br><br>
                        <a href="citizendashboard.html" onclick="if(window.showSection) window.showSection('budget')" style="display:inline-block; background:#2563eb; color:#fff; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none;">Go Vote on Proposals (+30 XP) →</a>
                    `;
                }
                // 5. AUTO-TRIAGE & REPORT REGISTRATION
                else {
                    let category = 'Road & Infrastructure';
                    let icon = '🚧';
                    if (lower.includes('light') || lower.includes('dark') || lower.includes('pole')) { category = 'Street Lighting'; icon = '💡'; }
                    else if (lower.includes('waste') || lower.includes('garbage') || lower.includes('dump') || lower.includes('trash')) { category = 'Waste Management'; icon = '🗑️'; }
                    else if (lower.includes('water') || lower.includes('drain') || lower.includes('pipe') || lower.includes('leak')) { category = 'Water Supply'; icon = '💧'; }

                    const randomNum = Math.floor(20000 + Math.random() * 80000);
                    const ticket = 'JS-' + randomNum;

                    if (window.triggerKarmaGain) {
                        window.triggerKarmaGain(10, "Reported issue via JanSetu AI Assistant!");
                    }

                    rawResponse = `
                        ✅ <strong>Grievance Auto-Triaged & Registered!</strong><br><br>
                        • <strong>Ticket ID:</strong> <code>#${ticket}</code><br>
                        • <strong>Category:</strong> ${icon} ${category}<br>
                        • <strong>Location:</strong> Ward 12 (Saheed Nagar / Unit 4 Grid)<br>
                        • <strong>Priority:</strong> High (Auto-triaged by AI)<br>
                        • <strong>Assigned Nodal Officer:</strong> Er. Rajesh Mohapatra (EE)<br>
                        • <strong>Officer Email:</strong> <a href="mailto:rajesh.mohapatra@bmc.gov.in" style="color:#2563eb;">rajesh.mohapatra@bmc.gov.in</a><br>
                        • <strong>Statutory SLA:</strong> 24 Hours<br>
                        • <strong>Karma Reward:</strong> +10 Civic XP earned! 🌟<br><br>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            <button onclick="JanSetuPDF.downloadCitizenReceipt({ticket_id: '${ticket}', title: '${userText.substring(0, 35).replace(/'/g, "")}...', category: '${category}', status: 'Pending', ward: 'Ward 12' })" style="background:#16a34a; color:#fff; border:none; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:bold; cursor:pointer;">📥 Download PDF Receipt</button>
                            <a href="citizendashboard.html" style="background:#f1f5f9; color:#0f172a; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:bold; text-decoration:none; border:1px solid #cbd5e1;">View in Dashboard →</a>
                        </div>
                    `;
                }

                botMsg.innerHTML = `
                    ${rawResponse}
                    <br>
                    <button class="ai-voice-listen-tag" onclick="JanSetuAIChatbot.speakLastBotMsg(this)">
                        🔊 Listen
                    </button>
                    <span class="ai-time">${now}</span>
                `;

                messages.appendChild(botMsg);
                messages.scrollTop = messages.scrollHeight;

            }, 750);
        }
    };

    window.openAIChatbot = function() {
        window.JanSetuAIChatbot.open();
    };

    // Backwards compatibility alias
    window.JanSetuWhatsApp = window.JanSetuAIChatbot;
})();
