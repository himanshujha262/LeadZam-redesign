import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLeads } from '../context/LeadContext';
import { StatusBadge } from '../components/leads/StatusBadge';
import { Button } from '../components/ui/Button';
import {
  Users,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { leads, openLeadDetails, openQualifyModal } = useLeads();
  const navigate = useNavigate();

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'New').length;
  const qualifiedLeads = leads.filter((l) => l.status === 'Qualified').length;
  const followUpLeads = leads.filter((l) => l.status === 'Follow-up').length;

  const recentLeads = leads.slice(0, 5);

  const stats = [
    {
      label: 'Total Leads',
      value: totalLeads,
      icon: <Users className="w-5 h-5 text-[#1264F5]" />,
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      trend: '+18% this week',
    },
    {
      label: 'New Leads',
      value: newLeads,
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      trend: 'Requires immediate action',
      highlight: true,
    },
    {
      label: 'Qualified Leads',
      value: qualifiedLeads,
      icon: <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />,
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      trend: 'High intent pipeline',
    },
    {
      label: 'Follow-ups',
      value: followUpLeads,
      icon: <Clock className="w-5 h-5 text-[#D97706]" />,
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      trend: 'Scheduled touchpoints',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
              Dashboard Overview
            </h1>
            <span className="bg-emerald-50 text-[#16A34A] text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-200">
              Live Pipeline
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            Track and convert high-intent ad leads without losing list context.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="primary"
            onClick={() => navigate('/leads')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Go to Leads Pipeline
          </Button>
        </div>
      </div>

      {/* Lightweight Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-5 rounded-xl border bg-white shadow-xs space-y-3 transition-transform hover:-translate-y-0.5 ${
              stat.highlight ? 'border-[#1264F5]/40 ring-1 ring-[#1264F5]/10' : 'border-[#E2E8F0]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#64748B]">{stat.label}</span>
              <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center`}>
                {stat.icon}
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0F172A]">{stat.value}</span>
            </div>

            <div className="text-[11px] text-[#64748B] flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Speed-to-lead Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1264F5] text-white flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A]">Core Workflow: Zero Context-Switching</h4>
            <p className="text-[#64748B] mt-0.5">
              Inspect, qualify, assign, and follow up directly within the Leads view using context-preserving sliding drawers.
            </p>
          </div>
        </div>
        <Link
          to="/leads"
          className="font-bold text-[#1264F5] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Open Leads Pipeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Small Recent Leads Section */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0F172A]">Recent Incoming Leads</h3>
            <p className="text-xs text-[#64748B] mt-0.5">Latest leads submitted via Meta & Google ad campaigns</p>
          </div>
          <Link
            to="/leads"
            className="text-xs font-semibold text-[#1264F5] hover:text-[#0E52CD] flex items-center gap-1"
          >
            <span>View All ({totalLeads})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8FAFC] text-[#64748B] uppercase tracking-wider text-[11px] font-semibold border-b border-[#E2E8F0]">
              <tr>
                <th className="py-3 px-4">Lead</th>
                <th className="py-3 px-3">Ad Channel</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Owner</th>
                <th className="py-3 px-3">Score</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]/70">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#0F172A]">{lead.name}</div>
                    <div className="text-[11px] text-[#64748B]">{lead.company}</div>
                  </td>
                  <td className="py-3 px-3 text-[#64748B] font-medium">{lead.source}</td>
                  <td className="py-3 px-3">
                    <StatusBadge status={lead.status} size="sm" />
                  </td>
                  <td className="py-3 px-3 text-[#0F172A] font-medium">{lead.owner}</td>
                  <td className="py-3 px-3 font-bold text-[#16A34A]">{lead.score}/100</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {lead.status === 'New' && (
                        <button
                          onClick={() => openQualifyModal(lead)}
                          className="px-2 py-1 rounded bg-blue-50 text-[#1264F5] font-bold text-[11px] hover:bg-blue-100"
                        >
                          Qualify
                        </button>
                      )}
                      <button
                        onClick={() => {
                          openLeadDetails(lead);
                          navigate('/leads');
                        }}
                        className="px-2.5 py-1 rounded border border-[#E2E8F0] text-[#0F172A] font-medium text-[11px] hover:bg-slate-100"
                      >
                        Inspect
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden divide-y divide-[#E2E8F0]">
          {recentLeads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => {
                openLeadDetails(lead);
                navigate('/leads');
              }}
              className="p-3.5 flex items-center justify-between gap-3 active:bg-slate-50 cursor-pointer"
            >
              <div>
                <div className="font-bold text-xs text-[#0F172A]">{lead.name}</div>
                <div className="text-[11px] text-[#64748B]">{lead.company} • {lead.source}</div>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={lead.status} size="sm" />
                <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

