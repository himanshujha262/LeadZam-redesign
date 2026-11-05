import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic Password Strength Meter
  const passwordStrength = useMemo(() => {
    if (!password) return { label: 'Empty', score: 0, color: 'bg-slate-200' };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { label: 'Weak', score: 1, color: 'bg-red-500', text: 'text-red-500' };
    if (score === 2) return { label: 'Fair', score: 2, color: 'bg-amber-500', text: 'text-amber-500' };
    if (score === 3) return { label: 'Good', score: 3, color: 'bg-blue-500', text: 'text-blue-500' };
    return { label: 'Strong', score: 4, color: 'bg-emerald-500', text: 'text-emerald-500' };
  }, [password]);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your full name.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please enter a valid work email.';
    if (!company.trim()) errs.company = 'Please enter your company or agency name.';
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (!agreeTerms) errs.terms = 'You must agree to the Terms of Service and Privacy Policy.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await signup(name, email, company, password);
      navigate('/leads');
    } catch {
      setErrors({ form: 'Registration failed. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center p-4 sm:p-6 font-sans antialiased text-[#0F172A]">
      {/* Brand Header */}
      <div className="flex items-center justify-center gap-2.5 mb-7">
        <Link to="/leads" className="flex items-center gap-2">
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

      {/* Auth Card */}
      <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8">
        <div className="text-left mb-6">
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Create your account</h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-normal">
            Start managing and converting your leads with LeadZam.
          </p>
        </div>

        {/* Social SSO Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => {
              signup('Google User', 'user@gmail.com', 'Google Workspace', 'pass123');
              navigate('/leads');
            }}
            className="w-full inline-flex justify-center items-center gap-2 py-2 px-3 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs"
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
            onClick={() => {
              signup('Microsoft User', 'user@microsoft.com', 'Microsoft Workspace', 'pass123');
              navigate('/leads');
            }}
            className="w-full inline-flex justify-center items-center gap-2 py-2 px-3 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs"
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
            OR SIGN UP WITH EMAIL
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <label htmlFor="signup-name" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="e.g. Rahul Sharma"
              className={`w-full h-9 px-3 bg-white border rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label htmlFor="signup-email" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Work Email
            </label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="name@company.com"
              className={`w-full h-9 px-3 bg-white border rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Company / Agency */}
          <div>
            <label htmlFor="signup-company" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Company / Agency
            </label>
            <input
              id="signup-company"
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                if (errors.company) setErrors({ ...errors, company: '' });
              }}
              placeholder="e.g. Zenith Growth Agency"
              className={`w-full h-9 px-3 bg-white border rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition ${
                errors.company ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            />
            {errors.company && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.company}</span>
              </p>
            )}
          </div>

          {/* Password & Password Strength Indicator */}
          <div>
            <label htmlFor="signup-password" text-xs className="block text-xs font-semibold text-[#0F172A] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                placeholder="At least 6 characters"
                className={`w-full h-9 pl-3 pr-10 bg-white border rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition ${
                  errors.password ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
                }`}
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

            {/* Strength Meter Bar */}
            {password && (
              <div className="mt-2 space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#64748B]">Password strength:</span>
                  <span className={`font-semibold ${passwordStrength.text}`}>
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex gap-1">
                  <div
                    className={`h-full w-1/4 transition-all duration-300 ${
                      passwordStrength.score >= 1 ? passwordStrength.color : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 transition-all duration-300 ${
                      passwordStrength.score >= 2 ? passwordStrength.color : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 transition-all duration-300 ${
                      passwordStrength.score >= 3 ? passwordStrength.color : 'bg-transparent'
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 transition-all duration-300 ${
                      passwordStrength.score >= 4 ? passwordStrength.color : 'bg-transparent'
                    }`}
                  />
                </div>
              </div>
            )}

            {errors.password && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="pt-1">
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  if (errors.terms) setErrors({ ...errors, terms: '' });
                }}
                className="h-4 w-4 mt-0.5 rounded border-[#E2E8F0] text-[#1264F5] focus:ring-[#1264F5]"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-[#64748B] leading-tight">
                I agree to the{' '}
                <a href="#" className="text-[#1264F5] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#1264F5] hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors.terms && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.terms}</span>
              </p>
            )}
          </div>

          {/* Primary Action Button */}
          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            className="w-full h-10 text-xs font-bold mt-2"
          >
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#1264F5] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

