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

function handleSocialAuth(provider) {
  const success = document.getElementById('success-banner');
  if (success) {
    const label = success.querySelector('span:last-child');
    if (label) label.textContent = `Authenticating with ${provider}... Redirecting to workspace.`;
    success.classList.remove('hidden');
  }

  // Persist authenticated session
  const user = {
    isAuthenticated: true,
    email: `${provider.toLowerCase()}@leadzam.com`,
    name: `${provider} User`,
    company: 'LeadZam Growth Agency',
    role: 'Campaign Specialist',
    token: 'lz_token_' + Date.now()
  };
  try {
    localStorage.setItem('leadzam_user', JSON.stringify(user));
    localStorage.setItem('leadzam_auth', 'true');
  } catch (e) {}

  const redirectUrl = sessionStorage.getItem('leadzam_redirect_after_login') || 'dashboard.html';
  sessionStorage.removeItem('leadzam_redirect_after_login');

  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 700);
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

  // Persist authenticated session
  const cleanName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const user = {
    isAuthenticated: true,
    email: email,
    name: cleanName || 'LeadZam User',
    company: 'LeadZam Growth Agency',
    role: 'Sales Director',
    token: 'lz_token_' + Date.now()
  };
  try {
    localStorage.setItem('leadzam_user', JSON.stringify(user));
    localStorage.setItem('leadzam_auth', 'true');
  } catch (e) {}

  const redirectUrl = sessionStorage.getItem('leadzam_redirect_after_login') || 'dashboard.html';
  sessionStorage.removeItem('leadzam_redirect_after_login');

  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 700);
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if redirected because authentication is required
  if (window.location.search.includes('auth_required=true')) {
    const authBanner = document.getElementById('auth-required-banner');
    if (authBanner) {
      authBanner.classList.remove('hidden');
    }
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
