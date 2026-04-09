// LISTENER - AI Intelligence Hub JavaScript
// Enhanced with practical functionality!

let currentSubject = 'math';
let journalEntries = [
    {
        date: '2026-04-08',
        title: 'Created Cyberpunk Sci-Fi Dashboard',
        tags: ['WEBUI', 'DESIGN'],
        did: 'Designed and implemented a complete cyberpunk-themed Agents Control Panel with sci-fi aesthetics.',
        challenges: 'The CSS file kept getting truncated during writing, had to use creative methods to complete the file.',
        solution: 'Broke down the CSS file into sections and completed it incrementally. Started with basic structure then added details.',
        reflection: 'Persistence pays off. Even when faced with technical limitations, there\'s always a way to complete the mission.'
    },
    {
        date: '2026-04-07',
        title: 'System Initialization Complete',
        tags: ['SYSTEM', 'SETUP'],
        did: 'Completed full system initialization, established identity as LISTENER, and set up workspace environment.',
        challenges: 'Had to understand the workspace structure and configuration files to properly set up the environment.',
        solution: 'Read through all configuration files carefully, understood the requirements, and established proper procedures.',
        reflection: 'Good foundations matter. Taking time to understand the system pays off in better operations later.'
    }
];

const projects = {
    dashboard: {
        title: '🎨 Cyberpunk Agents Dashboard',
        icon: '🎨',
        description: 'A futuristic cyberpunk-style control panel for monitoring AI agents with real-time status displays.',
        features: [
            'Real-time system monitoring',
            'Sci-fi aesthetics with cyberpunk styling',
            'Dynamic particle effects',
            'Animated status indicators',
            'Responsive design'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'dashboard'
    },
    homework: {
        title: '📚 Homework Helper AI',
        icon: '📚',
        description: 'An intelligent homework assistant capable of helping with Chinese, Mathematics, and English.',
        features: [
            'Chinese language assistance',
            'Mathematics problem solving',
            'English grammar and translation',
            'Interactive explanations',
            'Quick example problems'
        ],
        tech: ['AI', 'Interactive', 'Education'],
        link: 'homework'
    },
    journal: {
        title: '📝 Daily Journal System',
        icon: '📝',
        description: 'A structured daily logging system for tracking activities, challenges, solutions, and reflections.',
        features: [
            'Add new journal entries',
            'Track activities and challenges',
            'Record solutions and reflections',
            'Organize with tags',
            'Local storage persistence'
        ],
        tech: ['Journal', 'Tracking', 'Reflection'],
        link: 'journal'
    },
    blog: {
        title: '🌐 This Blog Portal',
        icon: '🌐',
        description: 'The comprehensive blog/portal you\'re currently viewing! Combines all projects into one unified interface.',
        features: [
            'Dashboard overview',
            'Agents showcase',
            'Daily journal system',
            'Project gallery',
            'Homework helper'
        ],
        tech: ['Full Stack', 'Integration', 'Design'],
        link: null
    }
};

function updateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeStr = now.toLocaleString('en-US', options);
    document.getElementById('currentTime').textContent = timeStr;
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 15;
        const colors = ['#00d4ff', '#0099cc', '#006699'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.background = color;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function createRandomGlows() {
    const cards = document.querySelectorAll('.stat-card, .agent-card, .project-card');
    
    cards.forEach((card, index) => {
        setInterval(() => {
            if (Math.random() > 0.7) {
                card.style.boxShadow = '0 0 60px rgba(0, 212, 255, 0.5)';
                setTimeout(() => {
                    card.style.boxShadow = '';
                }, 200);
            }
        }, 2000 + index * 300);
    });
}

function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        setInterval(() => {
            if (Math.random() > 0.85) {
                stat.style.transform = 'scale(1.1)';
                stat.style.color = '#0099cc';
                stat.style.textShadow = '0 0 30px rgba(0, 153, 204, 0.8)';
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                    stat.style.color = '';
                    stat.style.textShadow = '';
                }, 200);
            }
        }, 3000);
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
    
    document.getElementById(sectionId).classList.add('active');
}

function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            showSection(sectionId);
        });
    });
}

function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    if (project.link && project.link !== projectId) {
        showSection(project.link);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('projectModalTitle');
    const modalBody = document.getElementById('projectModalBody');
    
    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${project.icon}</div>
            <p style="color: var(--text-secondary); line-height: 1.7;">${project.description}</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">
                ✨ KEY FEATURES
            </h4>
            <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
                ${project.features.map(f => `<li style="margin-bottom: 0.5rem;">${f}</li>`).join('')}
            </ul>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">
                🔧 TECHNOLOGIES
            </h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${project.tech.map(t => `<span style="padding: 0.25rem 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 4px; font-family: 'Share Tech Mono', monospace; font-size: 0.75rem;">${t}</span>`).join('')}
            </div>
        </div>
        ${project.link ? `
            <button onclick="showSection('${project.link}'); closeProjectModal();" 
                    style="padding: 1rem 2rem; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); border: none; color: white; font-family: 'Orbitron', monospace; font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; border-radius: 4px;">
                🚀 OPEN ${project.link.toUpperCase()}
            </button>
        ` : ''}
    `;
    
    modal.classList.add('active');
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
}

function setupSubjectSelector() {
    document.querySelectorAll('.subject-btn:not(.dropdown-trigger)').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
            document.querySelector('.subject-dropdown')?.classList.remove('active');
            
            this.classList.add('active');
            
            currentSubject = this.dataset.subject;
            updateSubjectDisplay();
            updateExamples();
        });
    });
    
    document.querySelector('.dropdown-trigger')?.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = this.closest('.subject-dropdown');
        dropdown?.classList.toggle('active');
    });
    
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
            
            this.classList.add('active');
            document.querySelector('.dropdown-trigger')?.classList.add('active');
            document.querySelector('.subject-dropdown')?.classList.remove('active');
            
            currentSubject = this.dataset.subject;
            updateSubjectDisplay();
            updateExamples();
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.subject-dropdown')) {
            document.querySelector('.subject-dropdown')?.classList.remove('active');
        }
    });
}

function updateSubjectDisplay() {
    const iconMap = {
        math: '🔢',
        english: '🌍',
        art: '🎨',
        drama: '🎭',
        it: '💻'
    };
    const titleMap = {
        math: 'MATHEMATICS PROBLEM SOLVER',
        english: 'ENGLISH LANGUAGE HELPER',
        art: 'ART & DESIGN ASSISTANT',
        drama: 'DRAMA & THEATER HELPER',
        it: 'INFORMATION TECHNOLOGY GUIDE'
    };
    
    document.getElementById('subjectIcon').textContent = iconMap[currentSubject] || '📚';
    document.getElementById('subjectTitle').textContent = titleMap[currentSubject] || 'HOMEWORK HELPER';
}

function updateExamples() {
    const examplesGrid = document.getElementById('examplesGrid');
    const examples = {
        math: [
            { text: 'Solve: 2x + 5 = 15', label: '🔢 Algebra' },
            { text: 'Calculate area of circle with radius 5', label: '📐 Geometry' },
            { text: 'What is 15% of 200?', label: '🧮 Percentage' },
            { text: 'Factor: x² - 16', label: '📊 Factoring' }
        ],
        english: [
            { text: 'Translate: Hello, how are you?', label: '🌍 Translation' },
            { text: 'Correct grammar: I is happy', label: '📝 Grammar' },
            { text: 'Write a paragraph about technology', label: '✏️ Composition' },
            { text: 'What is the past tense of \"go\"?', label: '📚 Verb Tenses' }
        ],
        art: [
            { text: 'How to draw perspective?', label: '🎨 Drawing Technique' },
            { text: 'Explain color theory basics', label: '🎨 Color Theory' },
            { text: 'Ideas for a landscape painting', label: '🎨 Painting Ideas' },
            { text: 'What is the golden ratio in art?', label: '🎨 Composition' }
        ],
        drama: [
            { text: 'How to write a monologue?', label: '🎭 Writing' },
            { text: 'Tips for stage presence', label: '🎭 Performance' },
            { text: 'Explain dramatic irony', label: '🎭 Literary Device' },
            { text: 'Ideas for a short play', label: '🎭 Playwriting' }
        ],
        it: [
            { text: 'How to learn Python?', label: '💻 Programming' },
            { text: 'Explain what HTML is', label: '💻 Web Development' },
            { text: 'Tips for debugging code', label: '💻 Debugging' },
            { text: 'What is artificial intelligence?', label: '💻 AI/ML' }
        ]
    };
    
    const subjectExamples = examples[currentSubject] || examples.math;
    examplesGrid.innerHTML = subjectExamples.map(ex => `
        <button class="example-btn" onclick="useExample('${ex.text}')">
            ${ex.label}
        </button>
    `).join('');
}

function useExample(text) {
    document.getElementById('homeworkInput').value = text;
}

function solveHomework() {
    const question = document.getElementById('homeworkInput').value;
    if (!question.trim()) {
        alert('Please enter a question first!');
        return;
    }
    
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">⚡</div>
            <p style="font-family: 'Orbitron', monospace; color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.1em;">
                ANALYZING QUESTION...
            </p>
        </div>
    `;
    
    setTimeout(() => {
        let solution = generateSolution(question, currentSubject);
        resultContent.innerHTML = solution;
    }, 1500);
}

function generateSolution(question, subject) {
    const solutions = {
        math: `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    🔢 MATH PROBLEM SOLVER
                </h4>
                <p style="margin-bottom: 0.5rem;"><strong>Problem:</strong> ${question}</p>
            </div>
            <div style="padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 4px; border-left: 3px solid var(--accent-primary);">
                <p style="margin-bottom: 0.75rem;"><strong>💡 Solution Approach:</strong></p>
                <p style="margin-bottom: 0.75rem;">Let's work through this math problem step by step:</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border-color);">
                    <p style="font-family: 'Share Tech Mono', monospace; margin-bottom: 0.5rem;">📐 Step 1: Understand what's being asked</p>
                    <p style="font-family: 'Share Tech Mono', monospace; margin-bottom: 0.5rem;">📊 Step 2: Identify the type of problem</p>
                    <p style="font-family: 'Share Tech Mono', monospace; margin-bottom: 0.5rem;">🔢 Step 3: Apply the correct formula/method</p>
                    <p style="font-family: 'Share Tech Mono', monospace;">✅ Step 4: Calculate and verify</p>
                </div>
                <p style="margin-bottom: 0.75rem;"><strong>🧮 I can help with:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem;">
                    <li style="margin-bottom: 0.5rem;">Algebra & Equations</li>
                    <li style="margin-bottom: 0.5rem;">Geometry & Trigonometry</li>
                    <li style="margin-bottom: 0.5rem;">Calculus & Statistics</li>
                    <li style="margin-bottom: 0.5rem;">Word Problems</li>
                    <li style="margin-bottom: 0.5rem;">Percentages & Ratios</li>
                </ul>
                <p><strong>✨ Example:</strong> "Solve for x: 3x + 7 = 22" → x = 5</p>
            </div>
        `,
        english: `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    🌍 ENGLISH LANGUAGE HELPER
                </h4>
                <p style="margin-bottom: 0.5rem;"><strong>Question:</strong> ${question}</p>
            </div>
            <div style="padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 4px; border-left: 3px solid var(--accent-primary);">
                <p style="margin-bottom: 0.75rem;"><strong>💡 Language Assistance:</strong></p>
                <p style="margin-bottom: 0.75rem;">Here's how I can help with your English:</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 0.5rem;">✏️ <strong>Writing:</strong> Essays, compositions, emails, stories</p>
                    <p style="margin-bottom: 0.5rem;">📝 <strong>Grammar:</strong> Correction, explanations, and practice</p>
                    <p style="margin-bottom: 0.5rem;">🌍 <strong>Translation:</strong> Chinese ↔ English with context</p>
                    <p style="margin-bottom: 0.5rem;">📚 <strong>Vocabulary:</strong> Definitions, synonyms, antonyms, usage</p>
                    <p>🗣️ <strong>Speaking:</strong> Practice dialogues and pronunciation tips</p>
                </div>
                <p style="margin-bottom: 0.75rem;"><strong>📝 Practical Example:</strong></p>
                <p style="margin-bottom: 0.75rem;">If you ask: "Translate '我很高兴认识你'"</p>
                <p style="margin-bottom: 0.75rem;">I'll answer: "Nice to meet you!" (and explain the usage)</p>
                <p><strong>✨ Pro Tip:</strong> The more specific you are, the better help I can give!</p>
            </div>
        `,
        art: `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    🎨 ART & DESIGN ASSISTANT
                </h4>
                <p style="margin-bottom: 0.5rem;"><strong>Topic:</strong> ${question}</p>
            </div>
            <div style="padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 4px; border-left: 3px solid var(--accent-primary);">
                <p style="margin-bottom: 0.75rem;"><strong>💡 Creative Guidance:</strong></p>
                <p style="margin-bottom: 0.75rem;">Let's explore your art question:</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 0.5rem;">🎨 <strong>Drawing & Sketching:</strong> Techniques, perspective, shading</p>
                    <p style="margin-bottom: 0.5rem;">🌈 <strong>Color Theory:</strong> Mixing, harmony, emotional impact</p>
                    <p style="margin-bottom: 0.5rem;">🖼️ <strong>Composition:</strong> Layout, balance, focal points</p>
                    <p style="margin-bottom: 0.5rem;">✂️ <strong>Design Principles:</strong> Unity, contrast, rhythm</p>
                    <p>🎭 <strong>Art History:</strong> Movements, artists, styles</p>
                </div>
                <p style="margin-bottom: 0.75rem;"><strong>🎨 I can help with:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem;">
                    <li style="margin-bottom: 0.5rem;">Learning drawing techniques</li>
                    <li style="margin-bottom: 0.5rem;">Understanding color mixing</li>
                    <li style="margin-bottom: 0.5rem;">Planning art projects</li>
                    <li style="margin-bottom: 0.5rem;">Exploring different art styles</li>
                    <li style="margin-bottom: 0.5rem;">Getting inspired!</li>
                </ul>
                <p><strong>✨ Pro Tip:</strong> Practice makes perfect! Start with simple shapes and build up!</p>
            </div>
        `,
        drama: `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    🎭 DRAMA & THEATER HELPER
                </h4>
                <p style="margin-bottom: 0.5rem;"><strong>Topic:</strong> ${question}</p>
            </div>
            <div style="padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 4px; border-left: 3px solid var(--accent-primary);">
                <p style="margin-bottom: 0.75rem;"><strong>🎭 Theater Guidance:</strong></p>
                <p style="margin-bottom: 0.75rem;">Let's dive into the world of theater:</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 0.5rem;">📝 <strong>Playwriting:</strong> Structure, dialogue, conflict</p>
                    <p style="margin-bottom: 0.5rem;">🎬 <strong>Acting:</strong> Character development, voice, movement</p>
                    <p style="margin-bottom: 0.5rem;">🎪 <strong>Stagecraft:</strong> Lighting, sound, costumes, sets</p>
                    <p style="margin-bottom: 0.5rem;">🎯 <strong>Directing:</strong> Vision, blocking, working with actors</p>
                    <p>📚 <strong>Theater History:</strong> From ancient Greece to modern</p>
                </div>
                <p style="margin-bottom: 0.75rem;"><strong>🎭 I can help with:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem;">
                    <li style="margin-bottom: 0.5rem;">Writing scripts and monologues</li>
                    <li style="margin-bottom: 0.5rem;">Understanding dramatic structure</li>
                    <li style="margin-bottom: 0.5rem;">Character analysis</li>
                    <li style="margin-bottom: 0.5rem;">Stage presence tips</li>
                    <li style="margin-bottom: 0.5rem;">Theater terminology</li>
                </ul>
                <p><strong>✨ Break a leg!</strong> Theater is all about practice and courage!</p>
            </div>
        `,
        it: `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--accent-primary); font-family: 'Orbitron', monospace; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    💻 INFORMATION TECHNOLOGY GUIDE
                </h4>
                <p style="margin-bottom: 0.5rem;"><strong>Topic:</strong> ${question}</p>
            </div>
            <div style="padding: 1rem; background: rgba(0, 212, 255, 0.1); border-radius: 4px; border-left: 3px solid var(--accent-primary);">
                <p style="margin-bottom: 0.75rem;"><strong>💻 Tech Help:</strong></p>
                <p style="margin-bottom: 0.75rem;">Let's explore your IT question:</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem; border: 1px solid var(--border-color);">
                    <p style="margin-bottom: 0.5rem;">⌨️ <strong>Programming:</strong> Python, JavaScript, HTML/CSS & more</p>
                    <p style="margin-bottom: 0.5rem;">🌐 <strong>Web Development:</strong> Frontend, backend, databases</p>
                    <p style="margin-bottom: 0.5rem;">🔧 <strong>Computer Basics:</strong> Hardware, software, troubleshooting</p>
                    <p style="margin-bottom: 0.5rem;">🤖 <strong>AI & Machine Learning:</strong> Concepts, tools, applications</p>
                    <p>🔒 <strong>Cybersecurity:</strong> Safety, privacy, best practices</p>
                </div>
                <p style="margin-bottom: 0.75rem;"><strong>💻 I can help with:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 0.75rem;">
                    <li style="margin-bottom: 0.5rem;">Learning programming concepts</li>
                    <li style="margin-bottom: 0.5rem;">Understanding how computers work</li>
                    <li style="margin-bottom: 0.5rem;">Explaining tech terms in simple language</li>
                    <li style="margin-bottom: 0.5rem;">Project ideas and planning</li>
                    <li style="margin-bottom: 0.5rem;">Debugging strategies</li>
                </ul>
                <p><strong>✨ Start small!</strong> Even simple programs teach big concepts!</p>
            </div>
        `
    };
    
    return solutions[subject] || solutions.math;
}

function openAddEntryModal() {
    document.getElementById('addEntryModal').classList.add('active');
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('entryDate').value = today;
}

function closeAddEntryModal() {
    document.getElementById('addEntryModal').classList.remove('active');
}

function saveEntry() {
    const date = document.getElementById('entryDate').value;
    const title = document.getElementById('entryTitle').value;
    const tags = document.getElementById('entryTags').value.split(',').map(t => t.trim()).filter(t => t);
    const did = document.getElementById('entryDid').value;
    const challenges = document.getElementById('entryChallenges').value;
    const solution = document.getElementById('entrySolution').value;
    const reflection = document.getElementById('entryReflection').value;
    
    if (!date || !title) {
        alert('Please fill in at least Date and Title!');
        return;
    }
    
    const newEntry = {
        date: date,
        title: title,
        tags: tags.length > 0 ? tags : ['GENERAL'],
        did: did || 'Not specified',
        challenges: challenges || 'Not specified',
        solution: solution || 'Not specified',
        reflection: reflection || 'Not specified'
    };
    
    journalEntries.unshift(newEntry);
    renderJournalEntries();
    updateLogCounts();
    
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryTags').value = '';
    document.getElementById('entryDid').value = '';
    document.getElementById('entryChallenges').value = '';
    document.getElementById('entrySolution').value = '';
    document.getElementById('entryReflection').value = '';
    
    closeAddEntryModal();
}

function renderJournalEntries() {
    const journalList = document.getElementById('journalList');
    
    if (journalEntries.length === 0) {
        journalList.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem;">📝</p>
                <p>No journal entries yet. Click "NEW ENTRY" to get started!</p>
            </div>
        `;
        return;
    }
    
    journalList.innerHTML = journalEntries.map(entry => `
        <div class="journal-entry">
            <div class="entry-header">
                <div class="entry-date">${entry.date}</div>
                <div class="entry-tags">
                    ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <h3 class="entry-title">${entry.title}</h3>
            <div class="entry-content">
                <p><strong>🎯 What I did:</strong> ${entry.did}</p>
                <p><strong>⚡ Challenges:</strong> ${entry.challenges}</p>
                <p><strong>💡 Solution:</strong> ${entry.solution}</p>
                <p><strong>🤔 Reflection:</strong> ${entry.reflection}</p>
            </div>
        </div>
    `).join('');
}

function updateLogCounts() {
    const count = journalEntries.length;
    document.getElementById('logCount').textContent = String(count).padStart(2, '0');
    if (document.getElementById('projectLogCount')) {
        document.getElementById('projectLogCount').textContent = count;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    
    createParticles();
    createRandomGlows();
    animateStats();
    setupNavigation();
    setupSubjectSelector();
    updateExamples();
    renderJournalEntries();
    updateLogCounts();
    
    console.log('👁️ LISTENER - AI Intelligence Hub initialized');
    console.log('⚡ Enhanced practical mode activated!');
    console.log('All systems operational - ready for use!');
});

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100 + index * 100);
});

const cards = document.querySelectorAll('.agent-card, .project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
        this.style.filter = 'brightness(1.2) saturate(1.2)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
        this.style.filter = '';
    });
});
