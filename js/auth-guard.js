/**
 * LeadZam Security Guard (js/auth-guard.js)
 * Ensures that without signing in or signing up, users cannot enter the dashboard overview.
 */
(function () {
  function isAuthenticated() {
    try {
      const auth = localStorage.getItem('leadzam_auth');
      if (auth === 'true') {
        return true;
      }
      const userStr = localStorage.getItem('leadzam_user');
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user && (user.email || user.isAuthenticated)) {
          return true;
        }
      }
    } catch (e) {
      // Storage access error or invalid JSON
    }
    return false;
  }

  if (!isAuthenticated()) {
    try {
      sessionStorage.setItem('leadzam_redirect_after_login', window.location.href);
    } catch (e) {}

    // Halt and immediately redirect to sign in before the dashboard renders
    window.location.replace('signin.html?auth_required=true');
  }
})();
