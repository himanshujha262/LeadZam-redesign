import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Plus, 
  Minus, 
  Play, 
  SlidersHorizontal,
  Star
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'dashboard' | 'drawer' | 'qualify'>('live');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      {/* 1. STICKY NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl h-[70px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Beta Pill */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <img alt="LeadZam Logo" className="h-8 sm:h-9 w-auto object-contain" src="./assets/images/logo.png" />
            </Link>
            <span className="rounded-full bg-blue-100/80 text-[#1264F5] text-[11px] font-bold px-2.5 py-0.5 border border-blue-200 uppercase tracking-wide">
              BETA
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#64748B]">
            <a href="#features" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all">Features</a>
            <a href="#workflow" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all">Workflow</a>
            <a href="#screens" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all flex items-center gap-1.5">
              <span>Screens &amp; Demo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1264F5]"></span>
            </a>
            <a href="#integrations" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all">Integrations</a>
            <a href="#founder" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all">Founder</a>
            <a href="#faq" className="px-3.5 py-1.5 rounded-lg hover:text-[#1264F5] hover:bg-blue-50/70 transition-all">FAQ</a>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link 
              to="/login" 
              className="text-sm font-semibold text-[#64748B] hover:text-[#0F172A] px-3 py-2 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="inline-flex items-center gap-1.5 bg-[#1264F5] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-[70px]">
        {/* 2. HERO SECTION */}
        <section className="relative w-full bg-gradient-to-b from-[#EFF6FF]/70 via-white to-white py-14 lg:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* 3. VALUE PROPOSITIONS & FEATURES */}
        <section id="features" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#1264F5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                BUILT FOR CONVERSIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-3 tracking-tight">
                Everything you need to close ad leads faster
              </h2>
              <p className="text-[#64748B] text-base mt-2">
                Stop losing leads in spreadsheets. LeadZam accelerates your sales cycle from the second an ad is clicked.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1264F5] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">Instant Ingestion</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Real-time webhooks capture leads from Meta Instant Forms and Google Search Ads in under 3 seconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">Context-Preserving Drawer</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Inspect and qualify prospects in a 430px sliding drawer while keeping the main leads list visible behind.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">1-Click WhatsApp</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Dispatch approved Meta WhatsApp templates with booking links right from the lead's contact record.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">Closed-Loop ROAS</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Attribute won revenue back to specific campaigns, ad sets, and reps to maximize return on ad spend.
                </p>
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
                onClick={() => setActiveTab('drawer')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'drawer' 
                    ? 'bg-[#1264F5] text-white shadow-xs' 
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>Lead Drawer Screen</span>
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

            {/* Tab Containers */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl p-6 overflow-hidden">
              {activeTab === 'live' && (
                <div className="space-y-4">
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
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-sm text-slate-800">CRM Dashboard Overview View</span>
                    <Link to="/dashboard" className="text-xs font-bold text-[#1264F5] hover:underline">Open Live Dashboard →</Link>
                  </div>
                  <img src="./assets/images/crm-dashboard-screen.png" alt="CRM Dashboard" className="w-full rounded-2xl border border-slate-200" />
                </div>
              )}

              {activeTab === 'drawer' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-sm text-slate-800">430px Context-Preserving Lead Drawer</span>
                    <Link to="/leads/1" className="text-xs font-bold text-[#1264F5] hover:underline">Test Drawer in App →</Link>
                  </div>
                  <img src="./assets/images/crm-drawer-screen.png" alt="Lead Drawer" className="w-full rounded-2xl border border-slate-200" />
                </div>
              )}

              {activeTab === 'qualify' && (
                <div className="space-y-3">
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

        {/* 5. ABOUT FOUNDER */}
        <section id="founder" className="py-16 sm:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-slate-50 p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-8">
              <img 
                src="./assets/images/founder.png" 
                alt="LeadZam Founder" 
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-white shadow-md shrink-0" 
              />
              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold text-[#1264F5] uppercase tracking-wider">FOUNDER PERSPECTIVE</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">Built for Performance Teams</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  "Traditional enterprise CRMs are bloated and slow. Performance teams need a focused workflow: ingest ad leads within 3 seconds, qualify them without losing context, and trigger immediate follow-ups. That is why we built LeadZam."
                </p>
                <div className="font-semibold text-xs text-slate-900">
                  Himanshu Jha • Product &amp; Engineering, LeadZam
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

        {/* 7. FINAL CTA BANNER */}
        <section className="w-full bg-[#1264F5] py-20 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to turn more ad leads into customers?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-4 max-w-xl mx-auto">
              Join leading performance marketing agencies and sales teams accelerating their conversions with LeadZam.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link 
                to="/signup" 
                className="bg-white hover:bg-slate-50 text-[#1264F5] px-7 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/leads" 
                className="border border-white/40 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <span>Live Interactive Demo</span>
              </Link>
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
