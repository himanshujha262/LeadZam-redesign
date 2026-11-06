/**
 * LeadZam — Marketing Landing Page Scripts (js/landing.js)
 */

const screenTabs = ['live', 'dashboard-screen', 'qualify-screen'];
let currentScreenIndex = 0;
let autoTransitionTimer = null;
let isUserInteracting = false;
const SCREEN_DWELL_MS = 3800; // Calm, comfortable pace (never rushed)

function switchScreenTab(tabId, isManual = false) {
  const index = screenTabs.indexOf(tabId);
  if (index !== -1) {
    currentScreenIndex = index;
  }

  screenTabs.forEach((v) => {
    const el = document.getElementById('screen-view-' + v);
    const btn = document.getElementById('tab-btn-' + v);
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('screen-showcase-view');
    }
    if (btn) {
      btn.className =
        'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-2';
    }
  });

  const activeEl = document.getElementById('screen-view-' + tabId);
  const activeBtn = document.getElementById('tab-btn-' + tabId);
  if (activeEl) {
    activeEl.classList.remove('hidden');
    // Force DOM reflow to trigger smooth 0.9s cinematic ease animation
    void activeEl.offsetWidth;
    activeEl.classList.add('screen-showcase-view');
  }
  if (activeBtn) {
    activeBtn.className =
      'px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 shadow-sm bg-[#1264F5] text-white flex items-center gap-2';
  }

  if (isManual) {
    stopAutoTransition();
    autoTransitionTimer = setTimeout(() => {
      startAutoTransition();
    }, 6000);
  }
}

function startAutoTransition() {
  stopAutoTransition();
  if (isUserInteracting) return;

  autoTransitionTimer = setTimeout(() => {
    currentScreenIndex = (currentScreenIndex + 1) % screenTabs.length;
    switchScreenTab(screenTabs[currentScreenIndex], false);
    startAutoTransition();
  }, SCREEN_DWELL_MS);
}

function stopAutoTransition() {
  if (autoTransitionTimer) {
    clearTimeout(autoTransitionTimer);
    autoTransitionTimer = null;
  }
}

function toggleFaq(btn) {
  const parent = btn.closest('.faq-item');
  if (!parent) return;
  const content = parent.querySelector('.faq-content');
  const badge = parent.querySelector('.toggle-badge');
  if (!content || !badge) return;
  const icon = badge.querySelector('span');

  const isHidden = content.classList.contains('hidden');

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.textContent = 'remove';
    badge.classList.remove('bg-slate-100', 'text-slate-600');
    badge.classList.add('bg-blue-100', 'text-[#1264F5]');
  } else {
    content.classList.add('hidden');
    if (icon) icon.textContent = 'add';
    badge.classList.remove('bg-blue-100', 'text-[#1264F5]');
    badge.classList.add('bg-slate-100', 'text-slate-600');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Screen tab switcher listeners
  screenTabs.forEach((tabId) => {
    const btn = document.getElementById('tab-btn-' + tabId);
    if (btn) {
      btn.addEventListener('click', () => switchScreenTab(tabId, true));
    }
  });

  // Showcase section hover pause/resume
  const showcaseSection = document.getElementById('dashboard');
  if (showcaseSection) {
    showcaseSection.addEventListener('mouseenter', () => {
      isUserInteracting = true;
      stopAutoTransition();
    });
    showcaseSection.addEventListener('mouseleave', () => {
      isUserInteracting = false;
      startAutoTransition();
    });
  }

  // Initial 1.5s auto transition
  startAutoTransition();

  // Table rows navigation to dashboard.html
  const clickableRows = document.querySelectorAll('.demo-lead-row');
  clickableRows.forEach((row) => {
    row.addEventListener('click', () => {
      window.location.href = 'dashboard.html';
    });
  });

  // FAQ accordion toggles
  const faqButtons = document.querySelectorAll('.faq-toggle-btn');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => toggleFaq(btn));
  });
});

