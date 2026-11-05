/**
 * LeadZam — Sign Up Handler (js/signup.js)
 */

function updateStrength(val) {
  const b1 = document.getElementById('bar1');
  const b2 = document.getElementById('bar2');
  const b3 = document.getElementById('bar3');
  const txt = document.getElementById('strengthText');

  if (val.length < 5) {
    b1.className = 'h-1 flex-1 rounded-full bg-red-400';
    b2.className = 'h-1 flex-1 rounded-full bg-slate-200';
    b3.className = 'h-1 flex-1 rounded-full bg-slate-200';
    txt.textContent = 'Weak';
    txt.className = 'text-[11px] font-semibold text-red-500 pl-1';
  } else if (val.length < 8) {
    b1.className = 'h-1 flex-1 rounded-full bg-amber-400';
    b2.className = 'h-1 flex-1 rounded-full bg-amber-400';
    b3.className = 'h-1 flex-1 rounded-full bg-slate-200';
    txt.textContent = 'Medium';
    txt.className = 'text-[11px] font-semibold text-amber-500 pl-1';
  } else {
    b1.className = 'h-1 flex-1 rounded-full bg-emerald-500';
    b2.className = 'h-1 flex-1 rounded-full bg-emerald-500';
    b3.className = 'h-1 flex-1 rounded-full bg-emerald-500';
    txt.textContent = 'Strong';
    txt.className = 'text-[11px] font-semibold text-emerald-600 pl-1';
  }
}

function simulateSocialSignup(provider) {
  const alertBox = document.getElementById('state-success-alert');
  alertBox.querySelector('h4').textContent = `Authenticated with ${provider}!`;
  alertBox.classList.remove('hidden');
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 700);
}

function simulateSubmit() {
  const btn = document.getElementById('submitBtn');
  const text = document.getElementById('btnText');
  const alertBox = document.getElementById('state-success-alert');

  btn.disabled = true;
  text.textContent = 'Setting up workspace...';
  alertBox.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 800);
}
