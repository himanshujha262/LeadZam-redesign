/**
 * LeadZam — Sign In Handler (js/signin.js)
 */

function togglePasswordVisibility() {
  const input = document.getElementById('password');
  const icon = document.getElementById('eye-icon');
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

  btn.disabled = true;
  text.textContent = 'Connecting Demo Workspace...';
  success.classList.remove('hidden');

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 700);
}

function handleSocialAuth(provider) {
  const success = document.getElementById('success-banner');
  success.querySelector('span:last-child').textContent = `Authenticating with ${provider}... Redirecting to workspace.`;
  success.classList.remove('hidden');
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 800);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('work-email').value;
  const btn = document.getElementById('submit-btn');
  const text = document.getElementById('btn-text');
  const success = document.getElementById('success-banner');
  const error = document.getElementById('error-banner');

  error.classList.add('hidden');

  if (!email.includes('@')) {
    document.getElementById('email-error-msg').classList.remove('hidden');
    return;
  }

  btn.disabled = true;
  text.textContent = 'Verifying credentials...';

  setTimeout(() => {
    success.classList.remove('hidden');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 600);
  }, 600);
}
