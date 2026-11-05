/**
 * LeadZam — Sign In Handler (js/signin.js)
 */

function togglePasswordVisibility() {
  const input = document.getElementById('password');
  const icon = document.getElementById('eye-icon');
  if (!input || !icon) return;
  if (input.type === 'password') {
    input.type = 'text';
    icon.textContent = 'visibility_off';
  } else {
    input.type = 'password';
    icon.textContent = 'visibility';
  }
}

function instantDemoLogin() {
  const btn = document.getElementById('submit-btn');
  const text = document.getElementById('btn-text');
  const success = document.getElementById('success-banner');

  if (btn) btn.disabled = true;
  if (text) text.textContent = 'Connecting Demo Workspace...';
  if (success) success.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 700);
}

function handleSocialAuth(provider) {
  const success = document.getElementById('success-banner');
  if (success) {
    const label = success.querySelector('span:last-child');
    if (label) label.textContent = `Authenticating with ${provider}... Redirecting to workspace.`;
    success.classList.remove('hidden');
  }
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 800);
}

function handleFormSubmit(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById('work-email');
  const btn = document.getElementById('submit-btn');
  const text = document.getElementById('btn-text');
  const success = document.getElementById('success-banner');
  const error = document.getElementById('error-banner');

  if (error) error.classList.add('hidden');

  const email = emailInput ? emailInput.value : '';
  if (!email.includes('@')) {
    if (error) error.classList.remove('hidden');
    return;
  }

  if (btn) btn.disabled = true;
  if (text) text.textContent = 'Verifying credentials...';
  if (success) success.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  const demoBtn = document.getElementById('demo-login-btn');
  if (demoBtn) {
    demoBtn.addEventListener('click', instantDemoLogin);
  }

  const googleBtn = document.getElementById('google-login-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => handleSocialAuth('Google'));
  }

  const msBtn = document.getElementById('microsoft-login-btn');
  if (msBtn) {
    msBtn.addEventListener('click', () => handleSocialAuth('Microsoft'));
  }

  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', handleFormSubmit);
  }

  const togglePassBtn = document.getElementById('toggle-password-btn');
  if (togglePassBtn) {
    togglePassBtn.addEventListener('click', togglePasswordVisibility);
  }

  const forgotLink = document.getElementById('forgot-password-link');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Password reset link has been dispatched to your work email.');
    });
  }
});
