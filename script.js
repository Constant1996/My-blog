// ====================================
// 个人博客 · 主逻辑
// ====================================

const siteData = {
  essays: [
    { id: 1, title: '霓虹织满深港天际线', date: '2026-04-18', excerpt: '数据流与代码在指尖流淌...', content: '霓虹织满深港天际线...' },
    { id: 2, title: '第一次完成机甲建模', date: '2026-04-10', excerpt: '花了整整一周...', content: '从概念设计到最终渲染...' }
  ],
  models: [
    { id: 1, title: '科幻机甲战士', category: '角色', software: 'Blender', description: '全流程制作', thumbnail: 'mecha', downloads: 128, likes: 45 },
    { id: 2, title: '未来城市景观', category: '场景', software: '3ds Max', description: '赛博朋克风格', thumbnail: 'city', downloads: 89, likes: 32 },
    { id: 3, title: '科幻武器道具', category: '道具', software: 'Maya', description: '高精度模型', thumbnail: 'weapon', downloads: 256, likes: 78 }
  ],
  games: [
    { id: 1, title: '星际贪吃蛇', category: '休闲', description: '经典重制版', tech: 'HTML5 Canvas', thumbnail: 'snake', plays: 1024 },
    { id: 2, title: '赛博打砖块', category: '街机', description: '多种道具', tech: 'HTML5 Canvas', thumbnail: 'breakout', plays: 768 }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollEffects();
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.module-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

function scrollToModules() {
  document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(section) {
  const subpage = document.getElementById('subpage');
  const mainPage = document.getElementById('main-page');
  let content = '';
  switch(section) {
    case 'about': content = renderAboutPage(); break;
    case 'essay': content = renderEssayPage(); break;
    case 'models': content = renderModelsPage(); break;
    case 'games': content = renderGamesPage(); break;
    default: return;
  }
  subpage.innerHTML = content;
  subpage.classList.add('active');
  mainPage.style.display = 'none';
  document.body.style.overflow = 'hidden';
}

function goBack() {
  const subpage = document.getElementById('subpage');
  const mainPage = document.getElementById('main-page');
  subpage.classList.remove('active');
  mainPage.style.display = '';
  document.body.style.overflow = '';
  setTimeout(() => subpage.innerHTML = '', 500);
}

function renderAboutPage() {
  return `
    <div class="subpage-header">
      <div class="subpage-nav">
        <button class="back-btn" onclick="goBack()">← 返回首页</button>
        <div style="font-weight:600;letter-spacing:0.1em;">自我介绍</div>
      </div>
    </div>
    <div class="page-content" style="padding:4rem 2rem;max-width:800px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3rem;">
        <div style="width:150px;height:150px;border-radius:50%;background:var(--gradient-primary);margin:0 auto 1.5rem;display:flex;align-items:center;justify-content:center;font-size:3rem;">👤</div>
        <h1 style="font-size:2.5rem;margin-bottom:1rem;">赛博少年的数字疆域</h1>
        <p style="color:var(--color-text-secondary);letter-spacing:0.2em;">慢慢沉淀，悄悄发光</p>
      </div>
      <div style="font-size:1.1rem;line-height:1.9;color:var(--color-text-secondary);">
        <p style="margin-bottom:1.5rem;color:var(--color-text);font-size:1.25rem;">霓虹织满深港天际线，代码与数据流在指尖流淌 —— 我是扎根深圳的高中生，也是游走在虚拟与现实边界的赛博少年。</p>
        <p style="margin-bottom:1.5rem;">运动是我对抗重力的本能，游戏是我闯入异次元的入口，而三维建模，是我构筑专属数字疆域的武器。这里是我的 Agents 自建博客，一方属于自我的赛博据点。</p>
        <p>我会在此记录生活与学习轨迹，不定期更新建模作品，也会开发各类实用学习工具上传。数据流永不休眠，创意永不设限，欢迎同频者前来交流碰撞，一起在数字世界里肆意生长。</p>
      </div>
    </div>
  `;
}

function renderEssayPage() {
  return `
    <div class="subpage-header">
      <div class="subpage-nav">
        <button class="back-btn" onclick="goBack()">← 返回首页</button>
        <div style="font-weight:600;letter-spacing:0.1em;">个人随笔</div>
      </div>
    </div>
    <div class="page-content" style="padding:4rem 2rem;max-width:800px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h1 style="font-size:2.5rem;margin-bottom:1rem;">记录思想的轨迹</h1>
        <p style="color:var(--color-text-secondary);">不定期更新生活与学习心得</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        ${siteData.essays.map(e => `
          <div style="padding:2rem;background:var(--gradient-glass);border:1px solid var(--color-border);border-radius:var(--radius-lg);cursor:pointer;transition:all 0.3s;" onmouseover="this.style.transform='translateX(8px)';this.style.borderColor='var(--color-primary)';" onmouseout="this.style.transform='';this.style.borderColor='var(--color-border)';">
            <div style="font-size:0.85rem;color:var(--color-text-tertiary);margin-bottom:0.5rem;">${e.date}</div>
            <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${e.title}</h3>
            <p style="color:var(--color-text-secondary);">${e.excerpt}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderModelsPage() {
  return `
    <div class="subpage-header">
      <div class="subpage-nav">
        <button class="back-btn" onclick="goBack()">← 返回首页</button>
        <div style="font-weight:600;letter-spacing:0.1em;">模型开源</div>
      </div>
    </div>
    <div class="page-content" style="padding:4rem 2rem;max-width:1200px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h1 style="font-size:2.5rem;margin-bottom:1rem;">数字疆域的构筑</h1>
        <p style="color:var(--color-text-secondary);">分享我的三维建模作品</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
        ${siteData.models.map(m => `
          <div style="background:var(--gradient-glass);border:1px solid var(--color-border);border-radius:var(--radius-lg);overflow:hidden;transition:all 0.3s;cursor:pointer;" onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='var(--shadow-soft)';" onmouseout="this.style.transform='';this.style.boxShadow='';">
            <div style="aspect-ratio:4/3;background:linear-gradient(135deg,var(--color-primary),var(--color-accent));"></div>
            <div style="padding:1.5rem;">
              <div style="font-size:0.75rem;color:var(--color-primary);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">${m.category}</div>
              <h3 style="font-size:1.1rem;font-weight:600;margin-bottom:0.5rem;">${m.title}</h3>
              <p style="font-size:0.9rem;color:var(--color-text-secondary);margin-bottom:1rem;">${m.description}</p>
              <div style="display:flex;gap:1rem;font-size:0.85rem;color:var(--color-text-tertiary);">
                <span>↓ ${m.downloads}</span>
                <span>♥ ${m.likes}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderGamesPage() {
  return `
    <div class="subpage-header">
      <div class="subpage-nav">
        <button class="back-btn" onclick="goBack()">← 返回首页</button>
        <div style="font-weight:600;letter-spacing:0.1em;">游戏建造</div>
      </div>
    </div>
    <div class="page-content" style="padding:4rem 2rem;max-width:1000px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h1 style="font-size:2.5rem;margin-bottom:1rem;">闯入异次元的入口</h1>
        <p style="color:var(--color-text-secondary);">开发与分享 HTML 游戏</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;">
        ${siteData.games.map(g => `
          <div style="background:var(--gradient-glass);border:1px solid var(--color-border);border-radius:var(--radius-lg);overflow:hidden;transition:all 0.3s;" onmouseover="this.style.transform='translateY(-8px)';" onmouseout="this.style.transform='';">
            <div style="aspect-ratio:16/9;background:linear-gradient(135deg,var(--color-success),var(--color-accent));display:flex;align-items:center;justify-content:center;">
              <div style="padding:1rem 2rem;background:rgba(0,0,0,0.6);border-radius:var(--radius-md);color:white;font-weight:600;cursor:pointer;">立即游玩</div>
            </div>
            <div style="padding:1.5rem;">
              <div style="font-size:0.75rem;color:var(--color-accent);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">${g.category}</div>
              <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:0.5rem;">${g.title}</h3>
              <p style="color:var(--color-text-secondary);margin-bottom:0.5rem;">${g.description}</p>
              <div style="font-size:0.85rem;color:var(--color-text-tertiary);">▶ ${g.plays} 次游玩</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}