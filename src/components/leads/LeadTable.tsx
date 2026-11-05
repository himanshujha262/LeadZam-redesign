import React from 'react';
import { Lead } from '../../types/lead';
import { StatusBadge } from './StatusBadge';
import { Button } from '../ui/Button';
import { Eye, Sparkles } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  selectedLeadId: string | null;
  onSelectLead: (lead: Lead) => void;
  onQualifyLead: (lead: Lead) => void;
}

export const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  selectedLeadId,
  onSelectLead,
  onQualifyLead,
}) => {
  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          {/* Table Header */}
          <thead className="bg-[#F8FAFC] text-[#64748B] uppercase tracking-wider text-[11px] font-semibold border-b border-[#E2E8F0]">
            <tr>
              <th scope="col" className="py-3 px-4">
                Lead
              </th>
              <th scope="col" className="py-3 px-3">
                Source
              </th>
              <th scope="col" className="py-3 px-3">
                Campaign
              </th>
              <th scope="col" className="py-3 px-3">
                Status
              </th>
              <th scope="col" className="py-3 px-3">
                Owner
              </th>
              <th scope="col" className="py-3 px-3">
                Last Activity
              </th>
              <th scope="col" className="py-3 px-3">
                Next Follow-up
              </th>
              <th scope="col" className="py-3 px-4 text-right">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#E2E8F0]/70">
            {leads.map((lead) => {
              const isSelected = selectedLeadId === lead.id;
              const initials = lead.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2);

              return (
                <tr
                  key={lead.id}
                  onClick={() => onSelectLead(lead)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectLead(lead);
                    }
                  }}
                  className={`transition-colors cursor-pointer group focus:outline-none focus:bg-blue-50/50 ${
                    isSelected ? 'bg-blue-50/70 border-l-4 border-l-[#1264F5]' : 'hover:bg-slate-50/80'
                  }`}
                >
                  {/* Lead Column */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1264F5] font-bold text-xs flex items-center justify-center shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[#0F172A] group-hover:text-[#1264F5] transition-colors truncate">
                          {lead.name}
                        </div>
                        <div className="text-[11px] text-[#64748B] truncate">{lead.email}</div>
                      </div>
                    </div>
                  </td>

                  {/* Source Column */}
                  <td className="py-3.5 px-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${
                        lead.source === 'Meta Ads'
                          ? 'bg-blue-50 text-blue-700'
                          : lead.source === 'Google Ads'
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {lead.source}
                    </span>
                  </td>

                  {/* Campaign Column */}
                  <td className="py-3.5 px-3 text-[#0F172A] font-medium">
                    <div className="truncate max-w-[150px]">{lead.campaign}</div>
                    <div className="text-[10px] text-[#64748B] truncate">{lead.company}</div>
                  </td>

                  {/* Status Column */}
                  <td className="py-3.5 px-3">
                    <StatusBadge status={lead.status} size="sm" />
                  </td>

                  {/* Owner Column */}
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#0F172A]">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-[10px] font-bold flex items-center justify-center text-slate-700 shrink-0">
                        {lead.owner !== 'Unassigned'
                          ? lead.owner
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                          : '?'}
                      </span>
                      <span className="truncate max-w-[110px]">{lead.owner}</span>
                    </div>
                  </td>

                  {/* Last Activity */}
                  <td className="py-3.5 px-3 text-[#64748B] whitespace-nowrap">
                    {lead.lastActivity}
                  </td>

                  {/* Next Follow-up */}
                  <td className="py-3.5 px-3 text-[#0F172A] font-medium whitespace-nowrap">
                    {lead.nextFollowUp}
                  </td>

                  {/* Action Column */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {lead.status === 'New' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onQualifyLead(lead);
                          }}
                          className="px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#1264F5] font-bold text-[11px] transition inline-flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Qualify</span>
                        </button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectLead(lead);
                        }}
                        className="h-7 text-xs px-2.5"
                        leftIcon={<Eye className="w-3.5 h-3.5 text-[#64748B]" />}
                      >
                        View
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

