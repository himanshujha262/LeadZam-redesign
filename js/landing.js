/**
 * LeadZam — Marketing Landing Page Scripts (js/landing.js)
 */

function switchScreenTab(tabId) {
  const views = ['live', 'dashboard-screen', 'drawer-screen', 'qualify-screen'];
  views.forEach((v) => {
    const el = document.getElementById('screen-view-' + v);
    const btn = document.getElementById('tab-btn-' + v);
    if (el) el.classList.add('hidden');
    if (btn) {
      btn.className =
        'px-4 py-2 rounded-xl text-xs font-semibold transition bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-2';
    }
  });

  const activeEl = document.getElementById('screen-view-' + tabId);
  const activeBtn = document.getElementById('tab-btn-' + tabId);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.className =
      'px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs bg-[#1264F5] text-white flex items-center gap-2';
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
  const tabs = ['live', 'dashboard-screen', 'drawer-screen', 'qualify-screen'];
  tabs.forEach((tabId) => {
    const btn = document.getElementById('tab-btn-' + tabId);
    if (btn) {
      btn.addEventListener('click', () => switchScreenTab(tabId));
    }
  });

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
