import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Plus, 
  Minus, 
  Play, 
  Star,
  Webhook,
  Calendar,
  CreditCard,
  LayoutGrid,
  Users,
  Filter,
  Timer,
  Layers,
  Send,
  Trophy,
  Target,
  BarChart3,
  Home,
  PlayCircle,
  Puzzle,
  User,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'dashboard' | 'qualify'>('live');
  const [isHovered, setIsHovered] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Auto-transition screens calmly every 3.8 seconds, paused on user hover
  useEffect(() => {
    if (isHovered) return;
    const tabs: Array<'live' | 'dashboard' | 'qualify'> = ['live', 'dashboard', 'qualify'];
    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3800);

    return () => clearTimeout(timer);
  }, [activeTab, isHovered]);

  const faqs = [
    {
      q: 'What is LeadZam?',
      a: 'LeadZam is a high-velocity CRM engineered specifically for marketing and sales teams running paid Meta and Google lead campaigns. It combines instant lead ingestion, automated WhatsApp/SMS response pipelines, context-preserving lead drawers, and closed-loop revenue reporting inside one clean workspace.'
    },
    {
      q: 'Which ad platforms can I connect?',
      a: 'LeadZam connects natively to Meta Ads (Facebook & Instagram Lead Ads), Google Ads (Lead Extensions & Search forms), WhatsApp Business Cloud API, Gmail, Microsoft Outlook, and Google Sheets. We also offer incoming webhook endpoints for custom landing pages.'
    },
    {
      q: 'How does LeadZam capture leads so quickly?',
      a: 'We leverage direct official OAuth webhooks from Meta Graph API and Google Ads API. When a prospect taps "Submit" on an ad form, the data is pushed to your LeadZam workspace in under 3 seconds without delayed polling cycles or brittle third-party connectors.'
    },
    {
      q: 'Can I automate WhatsApp and SMS follow-ups?',
      a: 'Yes! You can configure multi-step automated sequences including immediate WhatsApp templates, SMS confirmation, calendar booking links, and email autoresponders that trigger instantly based on campaign type or lead score.'
    },
    {
      q: 'Does LeadZam provide true marketing ROAS analytics?',
      a: 'Absolutely. LeadZam tracks the complete journey from initial ad click and creative ID down to closed revenue. You can view conversion rates by ad set, rep closing speeds, and calculated Return on Ad Spend (ROAS).'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes, we offer a 14-day fully featured free trial with no credit card required. You can connect your ad accounts, configure WhatsApp, and test live lead routing within minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#1264F5] selection:text-white">
      {/* 1. FLOATING ROUNDED PILL NAVBAR WITH ICONS */}
      <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[1080px] h-[56px] sm:h-[60px] bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] px-4 sm:px-5 flex items-center justify-between pointer-events-auto transition-all">
          {/* Logo & Beta Pill (Preserved strictly as requested) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link to="/" className="flex items-center">
              <img alt="LeadZam Logo" className="h-8 sm:h-8.5 w-auto object-contain" src="./assets/images/logo.png" />
            </Link>
            <span className="rounded-full bg-blue-100/80 text-[#1264F5] text-[11px] font-bold px-2.5 py-0.5 border border-blue-200 uppercase tracking-wide">
              BETA
            </span>
          </div>

          {/* Desktop Nav Links with Icons & Dividers */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs sm:text-[13px] font-medium text-[#475569]">
            <div className="h-4 w-px bg-slate-200 mx-2 xl:mx-2.5 shrink-0" />
            <a 
              href="#features" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#1264F5] font-semibold transition-all hover:bg-blue-100/70"
            >
              <Home className="w-4 h-4" />
              <span>Features</span>
            </a>
            <a 
              href="#workflow" 
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-[#475569] hover:text-[#1264F5] hover:bg-slate-50 transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Workflow</span>
            </a>
            <a 
              href="#screens" 
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-[#475569] hover:text-[#1264F5] hover:bg-slate-50 transition-all"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Screens &amp; Demo</span>
            </a>
            <a 
              href="#integrations" 
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-[#475569] hover:text-[#1264F5] hover:bg-slate-50 transition-all"
            >
              <Puzzle className="w-4 h-4" />
              <span>Integrations</span>
            </a>
            <a 
              href="#founder" 
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-[#475569] hover:text-[#1264F5] hover:bg-slate-50 transition-all"
            >
              <User className="w-4 h-4" />
              <span>About Founder</span>
            </a>
            <a 
              href="#faq" 
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-[#475569] hover:text-[#1264F5] hover:bg-slate-50 transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </a>
            <div className="h-4 w-px bg-slate-200 mx-2 xl:mx-2.5 shrink-0" />
          </nav>

          {/* Right Action CTAs: Pill Login + Solid Pill Get Started */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <Link 
              to="/login" 
              className="px-4 sm:px-5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-[#0F172A] hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="inline-flex items-center gap-1.5 bg-[#1264F5] hover:bg-blue-600 text-white text-xs font-bold px-4 sm:px-5 py-2 rounded-full shadow-xs hover:shadow transition-all"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-0">
        {/* 2. HERO SECTION */}
        <section className="relative w-full bg-gradient-to-b from-[#EFF6FF]/70 via-white to-white pt-28 sm:pt-32 pb-14 lg:pb-20 overflow-hidden">
          {/* Animated Background Orbs & Ambient Dot Matrix Grid */}
          <div className="landing-bg-animation" aria-hidden="true">
            <div className="landing-bg-grid" />
            <div className="landing-orb landing-orb-1" />
            <div className="landing-orb landing-orb-2" />
            <div className="landing-orb landing-orb-3" />
            <div className="landing-orb landing-orb-4" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1264F5] text-xs font-semibold uppercase tracking-wider mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#1264F5] animate-pulse"></span>
                  <span>CRM FOR PERFORMANCE MARKETING</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] font-extrabold text-[#0F172A] tracking-tight">
                  Turn more ad leads into customers.
                </h1>

                <h2 className="text-xl sm:text-2xl text-[#0F172A] font-semibold mt-4">
                  The CRM built for teams running Meta &amp; Google lead campaigns.
                </h2>

                <p className="text-[#64748B] text-base sm:text-lg leading-relaxed mt-4 max-w-lg">
                  Capture leads automatically in under 3 seconds, qualify opportunities without losing context in right-side drawers, automate WhatsApp follow-ups, and track actual ROAS.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
                  <Link 
                    to="/signup" 
                    className="bg-[#1264F5] hover:bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Start Free 14-Day Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/leads" 
                    className="border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-[#0F172A] px-5 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Play className="w-4 h-4 text-[#1264F5] fill-[#1264F5]" />
                    <span>Explore Live CRM</span>
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-200/80 w-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">RS</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">AK</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center">PS</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">MV</div>
                  </div>
                  <div className="text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="font-bold text-slate-800 ml-1">4.9/5</span>
                    </div>
                    <span>Trusted by 1,200+ performance marketers &amp; agencies</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Preview Card */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <span className="text-xs font-bold text-slate-700 ml-2">LeadZam Performance CRM</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Speed to Lead: &lt; 3s
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-[#0F172A]">Rahul Sharma</div>
                        <div className="text-[11px] text-slate-500">Meta Lead Ads • Solar Inverter Offer</div>
                      </div>
                      <Link to="/leads" className="text-xs font-bold text-[#1264F5] hover:underline flex items-center gap-1">
                        Inspect Lead →
                      </Link>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-[#0F172A]">Liam Scott</div>
                        <div className="text-[11px] text-slate-500">Google Ads • High Intent PMax Demo</div>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded-full">
                        Qualified (85/100)
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-[#0F172A]">Sarah Miller</div>
                        <div className="text-[11px] text-slate-500">Meta Lead Ads • Enterprise Scale V2</div>
                      </div>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold text-[10px] rounded-full">
                        Meeting Booked
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Average Ingestion Latency: <strong>2.4 seconds</strong></span>
                    <Link to="/leads" className="font-bold text-[#1264F5] hover:underline">
                      Open Full Pipeline →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 SOCIAL PROOF (Compact Trust Badges with 3D Pop-Out Architecture) */}
        <section className="w-full bg-white py-12 border-y border-[#E2E8F0] platform-trust-stage overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs uppercase tracking-widest font-bold text-[#64748B] mb-8">
              Works natively with the platforms your growth team already uses
            </p>

            <div className="platform-trust-grid flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2">
              {/* Meta Ads */}
              <div className="platform-pop-badge platform-pop-meta flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold shadow-sm">f</div>
                <span className="text-sm font-semibold text-[#0F172A]">Meta Lead Ads</span>
              </div>
              {/* Google Ads */}
              <div className="platform-pop-badge platform-pop-google flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">G</div>
                <span className="text-sm font-semibold text-[#0F172A]">Google Ads</span>
              </div>
              {/* WhatsApp */}
              <div className="platform-pop-badge platform-pop-whatsapp flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-[#0F172A]">WhatsApp Cloud API</span>
              </div>
              {/* Gmail */}
              <div className="platform-pop-badge platform-pop-gmail flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-rose-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">M</div>
                <span className="text-sm font-semibold text-[#0F172A]">Gmail &amp; Outlook</span>
              </div>
              {/* Google Sheets */}
              <div className="platform-pop-badge platform-pop-sheets flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">⊞</div>
                <span className="text-sm font-semibold text-[#0F172A]">Google Sheets</span>
              </div>
              {/* Webhooks */}
              <div className="platform-pop-badge platform-pop-webhooks flex items-center gap-2.5 px-4 py-2.5 rounded-xl">
                <div className="platform-pop-icon w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  <Webhook className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-[#0F172A]">Custom Webhooks</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. VALUE PROPOSITIONS & FEATURES */}
        <section id="features" className="w-full relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/60 to-[#FFFFFF] py-20 lg:py-28 border-t border-[#E2E8F0]">
          {/* Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 shadow-xs mb-4">
                <Layers className="w-4 h-4 text-[#2563EB]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">CORE FEATURES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
                Everything you need to turn{' '}
                <span className="relative inline-block text-[#2563EB]">
                  ad leads into
                  <svg className="absolute -bottom-2.5 left-0 w-full overflow-visible" height="12" viewBox="0 0 180 12" fill="none">
                    <path d="M2.5 9.5C45 2.5 135 1.5 177.5 7" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <span className="absolute -top-3.5 -right-4 text-[#2563EB] select-none text-base font-bold tracking-widest leading-none">՚ ՚</span>
                </span>
                <br />
                revenue
              </h2>

              <p className="text-[#64748B] text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                LeadZam brings lead generation, qualification, instant follow-ups, and ROAS reporting into one unified CRM workspace.
              </p>
            </div>

            {/* 6 Feature Cards (3x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              
              {/* Card 1: Capture Leads Automatically */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.09)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-blue-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors">
                      Capture Leads Automatically
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Fetch leads in real time from Meta, Google Ads, and other channels without manual effort.
                    </p>
                  </div>

                  {/* Right Graphic: Mini Browser Window with + Badge */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex items-center justify-center">
                    {/* Spark Lines */}
                    <svg className="absolute -top-1 -right-0.5 w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="none">
                      <path d="M4 14C7 10 11 6 15 3M9 17C12 13 15 9 17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {/* Mini Window Card */}
                    <div className="w-[98px] h-[72px] bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] rounded-xl border border-blue-200/90 shadow-xs p-1.5 flex flex-col justify-between relative group-hover:shadow-md transition-shadow">
                      {/* Header Bar */}
                      <div className="w-full h-3 bg-blue-500 rounded-md flex items-center px-1.5 gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-white/90" />
                        <span className="w-1 h-1 rounded-full bg-white/90" />
                        <span className="w-1 h-1 rounded-full bg-white/90" />
                      </div>
                      {/* Lead Row 1 */}
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-200 flex items-center justify-center text-[7px] text-blue-700 font-bold shrink-0">
                          <Users className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <div className="w-10 h-1 bg-blue-200 rounded-full" />
                          <div className="w-6 h-0.5 bg-slate-200 rounded-full" />
                        </div>
                      </div>
                      {/* Lead Row 2 */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-200 flex items-center justify-center text-[7px] text-blue-700 font-bold shrink-0">
                          <Users className="w-2.5 h-2.5 text-blue-600" />
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <div className="w-8 h-1 bg-blue-200 rounded-full" />
                          <div className="w-5 h-0.5 bg-slate-200 rounded-full" />
                        </div>
                      </div>
                      {/* Green Plus Badge */}
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-md ring-2 ring-white font-bold text-xs">
                        +
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/leads" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold hover:bg-blue-100 transition-all group-hover:gap-2">
                    <span>See how it works</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Context-Preserving Drawer */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.09)] hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#7C3AED] border border-purple-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Filter className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#7C3AED] transition-colors">
                      Context-Preserving Drawer
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Quickly view a lead's complete history — ads, forms, chats, notes, and more — without leaving your flow.
                    </p>
                  </div>

                  {/* Right Graphic: Sliding Drawer with Mouse Pointer */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex items-center justify-center">
                    <div className="w-[98px] h-[72px] bg-white rounded-xl border border-purple-200/90 shadow-xs p-2 flex items-center gap-2 relative bg-gradient-to-br from-white to-purple-50/50 group-hover:shadow-md transition-shadow">
                      {/* Avatar */}
                      <div className="w-7 h-7 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-[#7C3AED] shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      {/* Details Placeholder Bars */}
                      <div className="flex-1 space-y-1">
                        <div className="w-10 h-1.5 bg-purple-200 rounded-full" />
                        <div className="w-12 h-1 bg-slate-200 rounded-full" />
                        <div className="w-8 h-1 bg-slate-100 rounded-full" />
                      </div>
                      {/* Mouse Cursor Pointer Clicking */}
                      <svg className="absolute -bottom-1 -right-1 w-6 h-6 text-slate-800 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 2l12 11.5-5.5.5 3.5 7.5-2.5 1-3.5-7.5-4 4V2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/leads" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] text-[#6D28D9] text-xs font-semibold hover:bg-purple-100 transition-all group-hover:gap-2">
                    <span>Preview lead drawer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Instant WhatsApp Sequences */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.09)] hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] border border-emerald-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#059669] transition-colors">
                      Instant WhatsApp Sequences
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Trigger personalized WhatsApp messages and follow-up sequences automatically to keep leads engaged.
                    </p>
                  </div>

                  {/* Right Graphic: WhatsApp Message with Paper Plane */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex items-center justify-center">
                    {/* Spark Lines */}
                    <svg className="absolute -top-1 -right-0.5 w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="none">
                      <path d="M4 14C7 10 11 6 15 3M9 17C12 13 15 9 17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div className="w-[98px] h-[72px] bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]/60 rounded-xl border border-emerald-300/80 shadow-xs p-1.5 flex flex-col justify-between relative group-hover:shadow-md transition-shadow">
                      {/* WhatsApp Header */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-2xs shrink-0 text-[10px]">
                          💬
                        </div>
                        <div className="w-10 h-1 bg-emerald-400 rounded-full" />
                      </div>
                      {/* Chat Bubble */}
                      <div className="w-full bg-white rounded-lg p-1.5 border border-emerald-100 shadow-2xs space-y-1">
                        <div className="w-12 h-1 bg-slate-200 rounded-full" />
                        <div className="w-8 h-0.5 bg-slate-100 rounded-full" />
                      </div>
                      {/* Blue Send Paper Plane Badge */}
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#1264F5] text-white flex items-center justify-center shadow-md ring-2 ring-white">
                        <Send className="w-3 h-3 -rotate-12" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/dashboard" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold hover:bg-blue-100 transition-all group-hover:gap-2">
                    <span>View automation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Closed-Loop ROAS Reporting */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.09)] hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] text-[#EA580C] border border-orange-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#EA580C] transition-colors">
                      Closed-Loop ROAS Reporting
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Connect ad spends to real revenue with clear, channel-wise ROAS insights and performance tracking.
                    </p>
                  </div>

                  {/* Right Graphic: ROAS Pill + Bar Chart with Swoosh Arrow */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex flex-col items-center justify-end pb-1">
                    {/* ROAS Pill */}
                    <div className="absolute top-0 right-1 bg-[#ECFDF5] text-[#047857] border border-emerald-300/70 text-[9.5px] font-extrabold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                      <span>ROAS ↑ 3.2x</span>
                    </div>
                    {/* 4 Gradient Bars */}
                    <div className="flex items-end gap-1.5 h-11 relative">
                      <div className="w-3 h-4 bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-sm" />
                      <div className="w-3 h-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm" />
                      <div className="w-3 h-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" />
                      <div className="w-3 h-11 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t-sm" />
                      {/* Swooshing Upward Orange Growth Arrow */}
                      <svg className="absolute -top-3 -left-3 w-16 h-14 overflow-visible pointer-events-none" viewBox="0 0 64 50" fill="none">
                        <path d="M4 42 C16 38, 32 26, 52 8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M45 7 L54 7 L54 16" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/dashboard" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold hover:bg-blue-100 transition-all group-hover:gap-2">
                    <span>Explore analytics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 5: Table & Kanban Pipelines */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.09)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-blue-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors">
                      Table &amp; Kanban Pipelines
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Manage leads your way with a flexible table view or visual Kanban pipeline for better tracking and control.
                    </p>
                  </div>

                  {/* Right Graphic: Kanban Board with 3 Status Badges */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex items-center justify-center">
                    {/* Spark Lines */}
                    <svg className="absolute -top-1 -right-0.5 w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="none">
                      <path d="M4 14C7 10 11 6 15 3M9 17C12 13 15 9 17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div className="w-[102px] h-[74px] bg-slate-50/90 rounded-xl border border-slate-200 p-1 flex items-start gap-1 relative shadow-xs group-hover:shadow-md transition-shadow">
                      {/* Col 1 */}
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="bg-[#2563EB] text-white text-[7.5px] font-bold py-0.5 rounded text-center leading-tight">New</span>
                        <div className="h-3.5 bg-white border border-slate-200/90 rounded shadow-2xs" />
                        <div className="h-3.5 bg-white border border-slate-200/90 rounded shadow-2xs" />
                      </div>
                      {/* Col 2 */}
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="bg-[#38BDF8] text-white text-[7px] font-bold py-0.5 rounded text-center leading-tight">In Progress</span>
                        <div className="h-3.5 bg-white border border-slate-200/90 rounded shadow-2xs" />
                        <div className="h-3.5 bg-white border border-slate-200/90 rounded shadow-2xs" />
                      </div>
                      {/* Col 3 */}
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="bg-[#10B981] text-white text-[7.5px] font-bold py-0.5 rounded text-center leading-tight">Won</span>
                        <div className="h-3.5 bg-white border border-slate-200/90 rounded shadow-2xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/leads" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-semibold hover:bg-blue-100 transition-all group-hover:gap-2">
                    <span>Try pipeline view</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 6: Speed-to-Lead Timer */}
              <div className="rounded-[28px] bg-white border border-[#E2E8F0]/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.09)] hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-[#4F46E5] border border-indigo-100 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Timer className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#4F46E5] transition-colors">
                      Speed-to-Lead Timer
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#64748B] leading-relaxed">
                      Track and improve your response time with a real-time speed-to-lead timer and performance insights.
                    </p>
                  </div>

                  {/* Right Graphic: Stopwatch with Lightning Bolt and Speed Lines */}
                  <div className="w-[120px] h-[95px] relative shrink-0 flex items-center justify-center">
                    {/* Spark Lines */}
                    <svg className="absolute -top-1 -right-0.5 w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="none">
                      <path d="M4 14C7 10 11 6 15 3M9 17C12 13 15 9 17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {/* Speed Swoosh Lines on Left */}
                    <div className="flex flex-col items-end gap-1 mr-1.5">
                      <div className="w-3.5 h-0.5 bg-blue-300 rounded-full" />
                      <div className="w-5 h-0.5 bg-blue-500 rounded-full" />
                      <div className="w-3 h-0.5 bg-blue-400 rounded-full" />
                    </div>
                    {/* Stopwatch Circle */}
                    <div className="w-[48px] h-[48px] rounded-full border-[3px] border-[#2563EB] bg-white shadow-md flex items-center justify-center relative group-hover:scale-105 transition-transform">
                      {/* Crown Button */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#1D4ED8] rounded-t-sm" />
                      <Zap className="w-5 h-5 text-[#2563EB] fill-[#2563EB]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Link Pill */}
                <div className="mt-5">
                  <Link to="/dashboard" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] text-[#4338CA] text-xs font-semibold hover:bg-indigo-100 transition-all group-hover:gap-2">
                    <span>Test speed metrics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. WORKFLOW / SCREEN PREVIEWS */}
        <section id="screens" className="py-16 sm:py-24 bg-slate-50 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#1264F5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                INTERACTIVE PREVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3 tracking-tight">
                See LeadZam in action
              </h2>
              <p className="text-[#64748B] text-base mt-2">
                Designed to minimize context switching and keep reps moving fast.
              </p>
            </div>

            {/* Interactive Screen Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <button 
                onClick={() => setActiveTab('live')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'live' 
                    ? 'bg-[#1264F5] text-white shadow-xs' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Live Interactive Window</span>
              </button>
              <button 
                onClick={() => setActiveTab('dashboard')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'dashboard' 
                    ? 'bg-[#1264F5] text-white shadow-xs' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>CRM Dashboard Screen</span>
              </button>
              <button 
                onClick={() => setActiveTab('qualify')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'qualify' 
                    ? 'bg-[#1264F5] text-white shadow-xs' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Qualify Modal Screen</span>
              </button>
            </div>

            {/* Tab Containers with Smooth 1.5s Transition & Pause on Hover */}
            <div 
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl p-6 overflow-hidden transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {activeTab === 'live' && (
                <div key="live-tab" className="screen-showcase-view space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-base text-[#0F172A]">Live Ad Leads Queue</h3>
                      <p className="text-xs text-slate-500">Real-time leads streaming from Meta and Google Ads</p>
                    </div>
                    <Link 
                      to="/leads" 
                      className="px-4 py-2 bg-[#1264F5] hover:bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm transition flex items-center gap-1.5"
                    >
                      <span>Open Live Workspace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                        <tr>
                          <th className="py-3 px-4">Lead</th>
                          <th className="py-3 px-3">Channel</th>
                          <th className="py-3 px-3">Owner</th>
                          <th className="py-3 px-3">Status</th>
                          <th className="py-3 px-3">Score</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">Rahul Sharma</td>
                          <td className="py-3.5 px-3 text-blue-600 font-semibold">Meta Ads</td>
                          <td className="py-3.5 px-3 text-slate-600">Amit Verma</td>
                          <td className="py-3.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">New</span></td>
                          <td className="py-3.5 px-3 font-bold text-emerald-600">72 / 100</td>
                          <td className="py-3.5 px-4 text-right">
                            <Link to="/leads/1" className="px-3 py-1 rounded bg-[#1264F5] text-white font-bold hover:bg-blue-600">View</Link>
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">Priya Singh</td>
                          <td className="py-3.5 px-3 text-amber-600 font-semibold">Google Ads</td>
                          <td className="py-3.5 px-3 text-slate-600">Amit Verma</td>
                          <td className="py-3.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Qualified</span></td>
                          <td className="py-3.5 px-3 font-bold text-emerald-600">88 / 100</td>
                          <td className="py-3.5 px-4 text-right">
                            <Link to="/leads/2" className="px-3 py-1 rounded bg-[#1264F5] text-white font-bold hover:bg-blue-600">View</Link>
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">Aman Kumar</td>
                          <td className="py-3.5 px-3 text-blue-600 font-semibold">Meta Ads</td>
                          <td className="py-3.5 px-3 text-slate-600">Neha Singh</td>
                          <td className="py-3.5 px-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Follow-up</span></td>
                          <td className="py-3.5 px-3 font-bold text-slate-700">64 / 100</td>
                          <td className="py-3.5 px-4 text-right">
                            <Link to="/leads/3" className="px-3 py-1 rounded bg-[#1264F5] text-white font-bold hover:bg-blue-600">View</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'dashboard' && (
                <div key="dashboard-tab" className="screen-showcase-view bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
                    <span className="font-bold text-sm text-slate-800">Production CRM Dashboard View</span>
                    <Link to="/dashboard" className="text-xs font-bold text-[#1264F5] hover:underline">Open Live Dashboard →</Link>
                  </div>
                  
                  {/* Fitted Leads Pipeline Table */}
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="font-bold text-slate-800 text-sm">Active Leads Pipeline (2,846 total)</div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full border border-emerald-200">● Ingestion Active</span>
                        <Link to="/leads" className="px-3 py-1 bg-[#1264F5] text-white font-bold rounded-lg hover:bg-blue-600 transition">Manage Leads</Link>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-[#F8FAFC] border-b border-slate-200 text-[#64748B] font-bold uppercase tracking-wider">
                            <th className="py-3 px-4">Lead</th>
                            <th className="py-3 px-3">Source</th>
                            <th className="py-3 px-3">Campaign</th>
                            <th className="py-3 px-3">Status</th>
                            <th className="py-3 px-3">Owner</th>
                            <th className="py-3 px-3">Last Activity</th>
                            <th className="py-3 px-3">Next Follow-up</th>
                            <th className="py-3 px-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-blue-50/40 transition">
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <div>Rahul Sharma</div>
                              <div className="text-[10px] text-slate-400 font-normal">rahul.sharma@email.com</div>
                            </td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">Meta Ads</span></td>
                            <td className="py-3 px-3 text-slate-700">Summer Sale</td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">New</span></td>
                            <td className="py-3 px-3 text-slate-400 italic">Unassigned</td>
                            <td className="py-3 px-3 text-emerald-600 font-medium">2 min ago</td>
                            <td className="py-3 px-3 text-slate-400">Not scheduled</td>
                            <td className="py-3 px-4 text-right">
                              <Link to="/leads" className="px-2.5 py-1 text-[11px] font-bold text-[#1264F5] bg-blue-50 hover:bg-[#1264F5] hover:text-white rounded-lg transition border border-blue-200 inline-block">View Lead →</Link>
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50/40 transition">
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <div>Priya Singh</div>
                              <div className="text-[10px] text-slate-400 font-normal">priya.singh@email.com</div>
                            </td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">Google Ads</span></td>
                            <td className="py-3 px-3 text-slate-700">Demo Campaign</td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Qualified</span></td>
                            <td className="py-3 px-3 text-slate-700">Amit Verma</td>
                            <td className="py-3 px-3 text-slate-500">18 min ago</td>
                            <td className="py-3 px-3 text-emerald-700 font-medium">Today, 4:30 PM</td>
                            <td className="py-3 px-4 text-right">
                              <Link to="/leads" className="px-2.5 py-1 text-[11px] font-bold text-[#1264F5] bg-blue-50 hover:bg-[#1264F5] hover:text-white rounded-lg transition border border-blue-200 inline-block">View Lead →</Link>
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50/40 transition">
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <div>Aman Kumar</div>
                              <div className="text-[10px] text-slate-400 font-normal">aman.kumar@email.com</div>
                            </td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">Meta Ads</span></td>
                            <td className="py-3 px-3 text-slate-700">Product Ads</td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">Follow-up</span></td>
                            <td className="py-3 px-3 text-slate-700">Neha Singh</td>
                            <td className="py-3 px-3 text-slate-500">1 hour ago</td>
                            <td className="py-3 px-3 text-amber-700 font-medium">Tomorrow, 10:00 AM</td>
                            <td className="py-3 px-4 text-right">
                              <Link to="/leads" className="px-2.5 py-1 text-[11px] font-bold text-[#1264F5] bg-blue-50 hover:bg-[#1264F5] hover:text-white rounded-lg transition border border-blue-200 inline-block">View Lead →</Link>
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50/40 transition">
                            <td className="py-3 px-4 font-bold text-slate-900">
                              <div>Sneha Verma</div>
                              <div className="text-[10px] text-slate-400 font-normal">sneha.verma@email.com</div>
                            </td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">Google Ads</span></td>
                            <td className="py-3 px-3 text-slate-700">Search Leads</td>
                            <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold">Converted</span></td>
                            <td className="py-3 px-3 text-slate-700">Amit Verma</td>
                            <td className="py-3 px-3 text-slate-500">Yesterday</td>
                            <td className="py-3 px-3 text-slate-400">—</td>
                            <td className="py-3 px-4 text-right">
                              <Link to="/leads" className="px-2.5 py-1 text-[11px] font-bold text-[#1264F5] bg-blue-50 hover:bg-[#1264F5] hover:text-white rounded-lg transition border border-blue-200 inline-block">View Lead →</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-slate-800 leading-relaxed">
                      <strong className="text-[#1264F5]">High-Impact UX Improvement:</strong> Sales reps lose track of context when navigated away to individual full-page profile URLs. LeadZam's <strong>right-side Details Drawer</strong> maintains the user's filtered list position, allowing immediate lead evaluation, score review, assignment, and qualification confirmation in under 15 seconds.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'qualify' && (
                <div key="qualify-tab" className="screen-showcase-view space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-sm text-slate-800">BANT Qualification &amp; Routing Modal</span>
                    <Link to="/leads" className="text-xs font-bold text-[#1264F5] hover:underline">Try Qualification Flow →</Link>
                  </div>
                  <img src="./assets/images/crm-qualify-screen.png" alt="Qualify Lead Screen" className="w-full rounded-2xl border border-slate-200" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5. NATIVE INTEGRATIONS (Animated Movement of Blocks from Left to Right) */}
        <section id="integrations" className="w-full bg-[#EFF6FF]/40 py-20 border-t border-[#E2E8F0] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1264F5]">Native Ecosystem</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
                Seamless integrations with your sales stack
              </h2>
              <p className="text-[#64748B] text-base mt-2">
                One-click OAuth connection to your ad accounts, communication channels, and databases.
              </p>
            </div>
          </div>

          {/* Marquee Track Moving Left to Right */}
          <div className="integrations-marquee-wrapper">
            <div className="integrations-marquee-track">
              {/* Slide Set 1 */}
              <div className="integrations-slide flex items-stretch gap-6 px-3">
                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    f
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Meta Lead Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Direct Graph API webhooks with zero dropped instant forms.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Native OAuth
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    G
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Search extension forms and YouTube lead ingestion in real time.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Webhook
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">WhatsApp Cloud</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Official Meta Business API for instant automated template messages.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Official Partner
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ⊞
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Sheets</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Instant 2-way spreadsheet synchronization for backup &amp; reporting.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 2-Way Sync
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">api</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">REST &amp; Webhooks</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Ingest leads from custom landing pages, WordPress, Webflow or Unbounce.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> 99.99% Uptime
                  </span>
                </div>

                {/* Repeat for wide screens */}
                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    f
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Meta Lead Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Direct Graph API webhooks with zero dropped instant forms.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Native OAuth
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    G
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Search extension forms and YouTube lead ingestion in real time.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Webhook
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">WhatsApp Cloud</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Official Meta Business API for instant automated template messages.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Official Partner
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ⊞
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Sheets</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Instant 2-way spreadsheet synchronization for backup &amp; reporting.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 2-Way Sync
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">api</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">REST &amp; Webhooks</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Ingest leads from custom landing pages, WordPress, Webflow or Unbounce.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> 99.99% Uptime
                  </span>
                </div>
              </div>

              {/* Slide Set 2 (Identical Clone for Seamless Infinite Loop) */}
              <div className="integrations-slide flex items-stretch gap-6 px-3" aria-hidden="true">
                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    f
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Meta Lead Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Direct Graph API webhooks with zero dropped instant forms.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Native OAuth
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    G
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Search extension forms and YouTube lead ingestion in real time.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Webhook
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">WhatsApp Cloud</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Official Meta Business API for instant automated template messages.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Official Partner
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ⊞
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Sheets</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Instant 2-way spreadsheet synchronization for backup &amp; reporting.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 2-Way Sync
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">api</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">REST &amp; Webhooks</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Ingest leads from custom landing pages, WordPress, Webflow or Unbounce.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> 99.99% Uptime
                  </span>
                </div>

                {/* Repeat for wide screens */}
                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    f
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Meta Lead Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Direct Graph API webhooks with zero dropped instant forms.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Native OAuth
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    G
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Ads</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Search extension forms and YouTube lead ingestion in real time.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Webhook
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">WhatsApp Cloud</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Official Meta Business API for instant automated template messages.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Official Partner
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ⊞
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">Google Sheets</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Instant 2-way spreadsheet synchronization for backup &amp; reporting.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 2-Way Sync
                  </span>
                </div>

                <div className="integration-card w-[260px] sm:w-[280px] shrink-0 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center select-none cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">api</span>
                  </div>
                  <h4 className="font-bold text-base text-[#0F172A] group-hover:text-[#1264F5] transition-colors">REST &amp; Webhooks</h4>
                  <p className="text-xs text-[#64748B] mt-2 mb-4 leading-relaxed">Ingest leads from custom landing pages, WordPress, Webflow or Unbounce.</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> 99.99% Uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ABOUT FOUNDER */}
        <section id="founder" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="founder-card max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-[#E2E8F0] p-8 sm:p-12 shadow-sm group select-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Founder Photo / Avatar Ring */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="founder-avatar-ring relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#1264F5] via-blue-400 to-emerald-400 shadow-md">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 border-4 border-white">
                      <img 
                        src="./assets/images/founder.png" 
                        alt="Himanshu Mishra, Founder &amp; CEO of LeadZam" 
                        className="founder-avatar-img w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">verified</span>
                    <span className="text-xs font-bold text-slate-700">Verified Growth Operator</span>
                  </div>
                </div>

                {/* Right: Founder Narrative */}
                <div className="md:col-span-8 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1264F5] mb-2 group-hover:tracking-wider transition-all duration-300">
                    Built by operators who understand lead generation
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] leading-tight group-hover:text-[#1264F5] transition-colors duration-300">
                    Himanshu Mishra
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    Founder &amp; CEO, LeadZam
                  </p>
                  <blockquote className="founder-quote-bar text-[#0F172A]/90 text-sm sm:text-base leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1 mb-6">
                    “As performance marketers running seven figures in Meta and Google ad spend, we felt the frustration of lead leakage firsthand. Leads taking hours to reach reps, fragmented spreadsheets, and zero feedback loop between sales closing and ad optimization. We built LeadZam to give growth teams instant speed-to-lead and complete clarity from impression to revenue.”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <a className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1264F5] group-hover:text-blue-700 transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform duration-300">share</span>
                      <span>Connect on LinkedIn <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                    </a>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-[#64748B]">Over $12M+ managed in ad campaigns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ ACCORDION */}
        <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-[#1264F5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                GOT QUESTIONS?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-[#0F172A]"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      openFaq === idx ? 'bg-blue-100 text-[#1264F5]' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed pt-2 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA BANNER (High-Velocity Conversion Modern Redesign) */}
        <section className="w-full cta-banner-modern py-20 lg:py-28 text-white relative overflow-hidden">
          {/* Background Ambient Light Sweeps & Dot Matrix Grid */}
          <div className="cta-banner-dots" aria-hidden="true" />
          <div className="cta-banner-light-sweeps" aria-hidden="true">
            <div className="cta-banner-light-arc cta-banner-light-arc-1" />
            <div className="cta-banner-light-arc cta-banner-light-arc-2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Copy, Value Props, and CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Rocket Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-semibold shadow-sm mb-6">
                  <span className="text-base leading-none">🚀</span>
                  <span>LeadZam CRM</span>
                </div>

                {/* Headline with Yellow Sparks & Cyan Swoop Underline */}
                <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] text-white">
                  Stop Losing Leads.<br className="hidden sm:inline" />
                  Start Closing More <span className="relative inline-block whitespace-nowrap">
                    Deals.
                    {/* Playful Yellow Rays above Deals */}
                    <svg className="absolute -top-6 -right-5 sm:-top-7 sm:-right-7 w-6 h-6 sm:w-8 sm:h-8 text-[#FACC15]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 14L8 18M16 4V10M26 10L20 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    {/* Cyan Highlight Swoop Underline */}
                    <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#38BDF8]" viewBox="0 0 180 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M2 12C45 4 135 3 178 9C145 13 55 14 2 12Z" fill="currentColor" fillOpacity="0.85"/>
                    </svg>
                  </span>
                </h2>

                {/* Paragraph */}
                <p className="text-blue-100/95 text-base sm:text-lg leading-relaxed mt-5 max-w-xl">
                  Capture every lead, automate follow-ups, track your sales pipeline, and convert more prospects into paying customers — all from one powerful CRM platform.
                </p>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8 w-full sm:w-auto">
                  <Link 
                    to="/signup" 
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#0F56D2] font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Start Your Free 14-Day Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/35 hover:border-white/60 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Explore Interactive CRM</span>
                  </Link>
                </div>

                {/* Trust Checklist with Vertical Dividers */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 text-xs sm:text-[13px] text-white/90 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-white" />
                    <span>14-Day Free Trial</span>
                  </div>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-white" />
                    <span>No Credit Card Required</span>
                  </div>
                  <span className="text-white/40 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
                    <span>Setup in Minutes</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Angled macOS CRM Mockup & Floating Annotation */}
              <div className="lg:col-span-5 relative cta-mockup-stage pt-6 lg:pt-0">
                {/* Floating Speech Bubble / Callout Annotation */}
                <div className="relative flex justify-end pr-4 sm:pr-8 mb-3 z-20">
                  {/* Hand-drawn curved dotted arrow */}
                  <svg className="absolute -bottom-5 right-48 sm:right-56 w-16 h-12 text-white/90" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 45C18 35 32 15 58 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3"/>
                    <path d="M52 5L62 12L53 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Callout Sticker */}
                  <div className="relative inline-flex items-center gap-1.5 bg-[#0F56D2] border border-blue-300/40 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xl shadow-blue-950/40">
                    <span>Turn leads into customers</span>
                    {/* Yellow rays */}
                    <svg className="absolute -top-3.5 -right-3 w-5 h-5 text-[#FACC15]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M10 2V6M16 6L13 9M18 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Mockup Window Card */}
                <div className="cta-mockup-card bg-white rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_30px_70px_-15px_rgba(0,18,70,0.45),0_15px_30px_-10px_rgba(0,0,0,0.2)] overflow-hidden">
                  {/* Window Chrome Header */}
                  <div className="bg-slate-50/95 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                      <Home className="w-3.5 h-3.5 text-[#1264F5]" />
                      <span>LeadZam CRM</span>
                    </div>
                    <div className="w-12" />
                  </div>

                  {/* Window Workspace */}
                  <div className="p-3 sm:p-4 grid grid-cols-12 gap-3 sm:gap-4 bg-[#F8FAFC]">
                    {/* Micro Sidebar */}
                    <div className="col-span-4 sm:col-span-3 bg-white rounded-xl border border-slate-100 p-2 sm:p-2.5 flex flex-col gap-1 sm:gap-1.5 shadow-sm text-xs">
                      <div className="bg-[#1264F5] text-white font-bold px-2 py-1.5 rounded-lg flex items-center gap-1.5">
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span className="truncate">Dashboard</span>
                      </div>
                      <div className="text-slate-600 font-medium px-2 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">Leads</span>
                      </div>
                      <div className="text-slate-600 font-medium px-2 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">Deals</span>
                      </div>
                      <div className="text-slate-600 font-medium px-2 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors">
                        <Zap className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">Automations</span>
                      </div>
                      <div className="text-slate-600 font-medium px-2 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors">
                        <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">Reports</span>
                      </div>
                    </div>

                    {/* Main Content Stage */}
                    <div className="col-span-8 sm:col-span-9 flex flex-col gap-3">
                      {/* 3 Stat Cards Row */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                        {/* Stat 1 */}
                        <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-slate-100 shadow-sm flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-1">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-blue-50 text-[#1264F5] flex items-center justify-center">
                              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded leading-none">↑ +32%</span>
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-black text-[#0F172A] leading-tight">248</div>
                            <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">New Leads</div>
                          </div>
                        </div>
                        {/* Stat 2 */}
                        <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-slate-100 shadow-sm flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-1">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                              <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded leading-none">↑ +18%</span>
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-black text-[#0F172A] leading-tight">78%</div>
                            <div className="text-[9px] sm:text-[10px] font-medium text-slate-500 truncate">Follow-up Rate</div>
                          </div>
                        </div>
                        {/* Stat 3 */}
                        <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-slate-100 shadow-sm flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-1">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                              <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded leading-none">↑ +40%</span>
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-black text-[#0F172A] leading-tight">42</div>
                            <div className="text-[9px] sm:text-[10px] font-medium text-slate-500 truncate">Deals Won</div>
                          </div>
                        </div>
                      </div>

                      {/* Big Chart Card */}
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] sm:text-xs font-bold text-[#0F172A]">Lead Conversion</span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded leading-none">↑ +40%</span>
                        </div>
                        {/* Upward Trend Chart SVG */}
                        <div className="w-full h-16 sm:h-20">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="ctaChartGradReact" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.32" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Area Fill */}
                            <path d="M0,65 Q40,68 70,52 T140,58 T200,38 T250,42 T300,16 L300,80 L0,80 Z" fill="url(#ctaChartGradReact)" />
                            {/* Line Stroke */}
                            <path d="M0,65 Q40,68 70,52 T140,58 T200,38 T250,42 T300,16" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Data Points */}
                            <circle cx="0" cy="65" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                            <circle cx="70" cy="52" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                            <circle cx="140" cy="58" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                            <circle cx="200" cy="38" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                            <circle cx="250" cy="42" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                            <circle cx="300" cy="16" r="3.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="./assets/images/logo.png" alt="LeadZam" className="h-6 w-auto brightness-200" />
            <span>© 2026 LeadZam Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="hover:text-white transition-colors">Sign In</Link>
            <Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link>
            <Link to="/leads" className="hover:text-white transition-colors">Leads CRM</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
