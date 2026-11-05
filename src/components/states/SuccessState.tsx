import React from 'react';
import { Lead } from '../../types/lead';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

interface SuccessStateProps {
  lead: Lead;
  onViewLead: (lead: Lead) => void;
  onBackToLeads: () => void;
}

export const SuccessModal: React.FC<SuccessStateProps> = ({ lead, onViewLead, onBackToLeads }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-[460px] bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-6 sm:p-7 text-center animate-in zoom-in-95 duration-200">
        {/* Glow Success Icon */}
        <div className="relative w-14 h-14 bg-emerald-50 rounded-full mx-auto flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#16A34A]">
            <Check className="w-6 h-6 stroke-[3]" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">Lead qualified successfully</h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
          <span className="font-semibold text-[#0F172A]">{lead.name}</span> has been moved to{' '}
          <span className="font-semibold text-[#16A34A]">Qualified</span>.
        </p>

        {/* Lead update summary box */}
        <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4 my-5 text-left space-y-2.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[#64748B] font-medium">Updated Status:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#16A34A] border border-emerald-200 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
              Qualified
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#64748B] font-medium">Assigned Owner:</span>
            <span className="font-semibold text-[#0F172A]">{lead.owner}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#64748B] font-medium">Lead Score:</span>
            <span className="font-bold text-[#16A34A]">{lead.score} / 100 (High-intent)</span>
          </div>

          {lead.budget && (
            <div className="flex items-center justify-between">
              <span className="text-[#64748B] font-medium">Budget:</span>
              <span className="font-semibold text-[#0F172A]">{lead.budget}</span>
            </div>
          )}

          {lead.companySize && (
            <div className="flex items-center justify-between">
              <span className="text-[#64748B] font-medium">Company Size:</span>
              <span className="font-semibold text-[#0F172A]">{lead.companySize} employees</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 justify-center">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onBackToLeads}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Leads
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => onViewLead(lead)}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Lead
          </Button>
        </div>
      </div>
    </div>
  );
};

