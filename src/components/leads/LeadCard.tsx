import React from 'react';
import { Lead } from '../../types/lead';
import { StatusBadge } from './StatusBadge';
import { ArrowRight, Clock, User, Megaphone } from 'lucide-react';

interface LeadCardProps {
  lead: Lead;
  onSelect: (lead: Lead) => void;
  onQualify: (lead: Lead) => void;
}

export const LeadCard: React.FC<LeadCardProps> = ({ lead, onSelect, onQualify }) => {
  return (
    <div
      onClick={() => onSelect(lead)}
      className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm hover:shadow-md hover:border-[#1264F5]/40 transition-all cursor-pointer space-y-3 active:scale-[0.99]"
    >
      {/* Header: Name, Email & Status */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1264F5] font-bold text-xs flex items-center justify-center shrink-0">
              {lead.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div className="truncate">
              <h3 className="text-sm font-bold text-[#0F172A] truncate">{lead.name}</h3>
              <p className="text-xs text-[#64748B] truncate">{lead.email}</p>
            </div>
          </div>
        </div>
        <StatusBadge status={lead.status} size="sm" />
      </div>

      {/* Campaign & Score preview */}
      <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
        <span className="truncate max-w-[200px] font-medium text-[#0F172A]">
          {lead.company}
        </span>
        <div className="flex items-center gap-1 shrink-0 font-bold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded">
          <span>{lead.score}</span>
          <span className="text-[10px] text-[#64748B] font-normal">/100</span>
        </div>
      </div>

      {/* Grid of Key Metadata */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E2E8F0]/70 text-xs text-[#64748B]">
        <div className="flex items-center gap-1.5 truncate">
          <Megaphone className="w-3.5 h-3.5 text-[#1264F5] shrink-0" />
          <span className="truncate">Source: <strong className="text-[#0F172A] font-semibold">{lead.source}</strong></span>
        </div>
        <div className="flex items-center gap-1.5 truncate">
          <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">Owner: <strong className="text-[#0F172A] font-semibold">{lead.owner}</strong></span>
        </div>
        <div className="col-span-2 flex items-center gap-1.5 text-[11px] truncate">
          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">Next Follow-up: <strong className="text-[#0F172A] font-medium">{lead.nextFollowUp || 'Not scheduled'}</strong></span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-[#E2E8F0]/70 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQualify(lead);
          }}
          className="text-xs font-semibold text-[#1264F5] hover:text-[#0E52CD] py-1 px-2 rounded hover:bg-blue-50 transition"
        >
          Qualify Lead
        </button>
        <span className="text-xs font-semibold text-[#1264F5] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};

