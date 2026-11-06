import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Eye, EyeOff, AlertCircle, Lock, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/leads';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your work email.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    try {
      setIsSubmitting(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch {
      setError('Invalid credentials. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleSocialAuth = (provider: string) => {
    login(`${provider.toLowerCase()}@user.com`, 'samplePass123!');
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between p-4 sm:p-6 font-sans antialiased text-[#0F172A]">
      {/* Top Bar with Back Link & Auth Switcher */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between py-2 px-1 sm:px-0">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs hover:shadow transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-2 p-1 pl-3 bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-full shadow-xs hover:shadow-sm transition-all">
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">New to LeadZam?</span>
          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1264F5] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-xs group"
          >
            <span>Create free account</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </header>

      {/* Main Centered Authentication Area */}
      <main className="w-full flex-1 flex flex-col justify-center items-center py-6 sm:py-8">
        {/* Brand Logo Header */}
        <div className="flex items-center justify-center gap-2.5 mb-7">
          <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/images/logo.png"
            alt="LeadZam"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-bold text-2xl text-[#0F172A] tracking-tight">LeadZam</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-[#1264F5] border border-blue-200">
            BETA
          </span>
        </Link>
      </div>

      {/* Centered Auth Card */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8">
        {/* Card Header */}
        <div className="text-left mb-6">
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Welcome back</h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-normal">
            Sign in to manage your leads and campaigns.
          </p>
        </div>

        {/* Logout Success Banner */}
        {location.search.includes('logout=true') && (
          <div className="mb-5 p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#1264F5] shrink-0" />
            <span>You have been signed out of your LeadZam workspace.</span>
          </div>
        )}

        {/* Authentication Required Banner */}
        {location.state?.from && !location.search.includes('logout=true') && (
          <div className="mb-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Authentication required. Please sign in or register to access the dashboard overview.</span>
          </div>
        )}

        {/* Social SSO Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => handleSocialAuth('Google')}
            className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-3 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs active:scale-[0.99]"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                fill="#4285F4"
              />
              <path
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                fill="#34A853"
              />
              <path
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27 0-.78.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12c0 1.96.45 3.82 1.25 5.42l4.03-3.15z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                fill="#EA4335"
              />
            </svg>
            <span className="truncate">Continue with Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialAuth('Microsoft')}
            className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-3 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs active:scale-[0.99]"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 23 23">
              <path d="M1 1h10v10H1z" fill="#f35325" />
              <path d="M12 1h10v10H12z" fill="#81bc06" />
              <path d="M1 12h10v10H1z" fill="#05a6f0" />
              <path d="M12 12h10v10H12z" fill="#ffba08" />
            </svg>
            <span className="truncate">Continue with Microsoft</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-full border-t border-[#E2E8F0]"></div>
          <span className="absolute bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
            OR CONTINUE WITH EMAIL
          </span>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Email / Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
              Work email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full h-10 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#1264F5] focus:ring-2 focus:ring-[#1264F5]/20 transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="login-password" text-xs className="text-xs font-semibold text-[#0F172A]">
                Password
              </label>
              <button
                type="button"
                onClick={() => alert('Password reset instructions dispatched to your email.')}
                className="text-xs text-[#1264F5] hover:underline font-medium"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-10 pl-3 pr-10 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#1264F5] focus:ring-2 focus:ring-[#1264F5]/20 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-[#E2E8F0] text-[#1264F5] focus:ring-[#1264F5]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-xs text-[#64748B]">
              Remember me
            </label>
          </div>

          {/* Primary Action Button */}
          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            className="w-full h-10 text-xs font-bold"
          >
            Sign In
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
          Don't have a LeadZam account?{' '}
          <Link to="/signup" className="font-bold text-[#1264F5] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
      </main>

      <footer className="w-full max-w-5xl mx-auto py-4 text-center text-[11px] text-slate-400">
        © 2026 LeadZam Inc. All rights reserved. • ISO 27001 &amp; SOC2 Type II Certified
      </footer>
    </div>
  );
};

