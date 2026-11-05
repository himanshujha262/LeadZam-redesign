import React, { useState, useEffect } from 'react';
import { Lead, CompanySize, BudgetRange, PurchaseTimeline, InterestLevel, QualificationFormData, QualificationValidationErrors } from '../../types/lead';
import { X, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface QualificationModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (leadId: string, data: QualificationFormData) => Promise<void>;
}

export const QualificationModal: React.FC<QualificationModalProps> = ({
  lead,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [formData, setFormData] = useState<QualificationFormData>({
    companySize: '',
    budget: '',
    purchaseTimeline: '',
    interestLevel: '',
  });

  const [errors, setErrors] = useState<QualificationValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill defaults or lead's existing data when opened
  useEffect(() => {
    if (lead) {
      setFormData({
        companySize: lead.companySize || '50–200',
        budget: lead.budget || '₹1L – ₹5L',
        purchaseTimeline: lead.purchaseTimeline || 'This month',
        interestLevel: lead.intentLevel || 'High',
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [lead, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isSubmitting]);

  if (!isOpen || !lead) return null;

  const validate = (): boolean => {
    const newErrors: QualificationValidationErrors = {};
    if (!formData.companySize) {
      newErrors.companySize = 'Please select a company size.';
    }
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget.';
    }
    if (!formData.purchaseTimeline) {
      newErrors.purchaseTimeline = 'Please select a purchase timeline.';
    }
    if (!formData.interestLevel) {
      newErrors.interestLevel = 'Please select an interest level.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await onConfirm(lead.id, formData);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qualification-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-5 sm:p-6 text-left my-auto animate-in zoom-in-95 duration-200 max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-[#E2E8F0]">
          <div>
            <h2 id="qualification-modal-title" className="text-lg font-bold text-[#0F172A] tracking-tight">
              Qualify this lead?
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
              Add a few details before moving this lead to Qualified.
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors -mr-1 -mt-1 disabled:opacity-50"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lead Summary Info Card */}
        <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3.5 my-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1264F5] font-bold text-sm flex items-center justify-center shrink-0">
              {lead.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F172A] leading-tight">{lead.name}</div>
              <div className="text-xs text-[#64748B] mt-0.5">{lead.company}</div>
              <div className="mt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#1264F5] border border-blue-200">
                  Status: {lead.status}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-[#0F172A]">{lead.score}</span>
              <span className="text-xs text-[#64748B]">/ 100</span>
            </div>
            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#16A34A] border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
              High Intent
            </span>
          </div>
        </div>

        {/* Qualification Form */}
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 overflow-y-auto pr-1">
          {/* Field 1: Company Size */}
          <div>
            <label htmlFor="companySize" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Company Size <span className="text-red-500">*</span>
            </label>
            <select
              id="companySize"
              disabled={isSubmitting}
              value={formData.companySize}
              onChange={(e) => {
                setFormData({ ...formData, companySize: e.target.value as CompanySize });
                if (errors.companySize) setErrors({ ...errors, companySize: undefined });
              }}
              className={`w-full h-10 px-3 bg-white border rounded-lg text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1264F5]/20 focus:border-[#1264F5] transition ${
                errors.companySize ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            >
              <option value="">Select company size...</option>
              <option value="1–10">1–10 employees</option>
              <option value="11–50">11–50 employees</option>
              <option value="50–200">50–200 employees</option>
              <option value="201–500">201–500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            {errors.companySize && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.companySize}</span>
              </p>
            )}
          </div>

          {/* Field 2: Budget */}
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Budget (Estimated Annual) <span className="text-red-500">*</span>
            </label>
            <select
              id="budget"
              disabled={isSubmitting}
              value={formData.budget}
              onChange={(e) => {
                setFormData({ ...formData, budget: e.target.value as BudgetRange });
                if (errors.budget) setErrors({ ...errors, budget: undefined });
              }}
              className={`w-full h-10 px-3 bg-white border rounded-lg text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1264F5]/20 focus:border-[#1264F5] transition ${
                errors.budget ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            >
              <option value="">Select budget range...</option>
              <option value="Under ₹50K">Under ₹50K</option>
              <option value="₹50K – ₹1L">₹50K – ₹1L</option>
              <option value="₹1L – ₹5L">₹1L – ₹5L</option>
              <option value="₹5L – ₹10L">₹5L – ₹10L</option>
              <option value="₹10L+">₹10L+</option>
            </select>
            {errors.budget && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.budget}</span>
              </p>
            )}
          </div>

          {/* Field 3: Purchase Timeline */}
          <div>
            <label htmlFor="purchaseTimeline" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Purchase Timeline <span className="text-red-500">*</span>
            </label>
            <select
              id="purchaseTimeline"
              disabled={isSubmitting}
              value={formData.purchaseTimeline}
              onChange={(e) => {
                setFormData({ ...formData, purchaseTimeline: e.target.value as PurchaseTimeline });
                if (errors.purchaseTimeline) setErrors({ ...errors, purchaseTimeline: undefined });
              }}
              className={`w-full h-10 px-3 bg-white border rounded-lg text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1264F5]/20 focus:border-[#1264F5] transition ${
                errors.purchaseTimeline ? 'border-red-500 bg-red-50/20' : 'border-[#E2E8F0]'
              }`}
            >
              <option value="">Select purchase timeline...</option>
              <option value="Immediate">Immediate</option>
              <option value="This month">This month</option>
              <option value="Next quarter">Next quarter</option>
              <option value="Exploring">Exploring</option>
            </select>
            {errors.purchaseTimeline && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.purchaseTimeline}</span>
              </p>
            )}
          </div>

          {/* Field 4: Interest Level */}
          <div>
            <label htmlFor="interestLevel" className="block text-xs font-semibold text-[#0F172A] mb-1">
              Interest Level <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['High', 'Medium', 'Low'] as InterestLevel[]).map((level) => {
                const isSelected = formData.interestLevel === level;
                return (
                  <button
                    type="button"
                    key={level}
                    disabled={isSubmitting}
                    onClick={() => {
                      setFormData({ ...formData, interestLevel: level });
                      if (errors.interestLevel) setErrors({ ...errors, interestLevel: undefined });
                    }}
                    className={`h-9 rounded-lg text-xs font-semibold border transition flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-blue-50 border-[#1264F5] text-[#1264F5] shadow-xs'
                        : 'bg-white border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50'
                    }`}
                  >
                    <span>{level}</span>
                  </button>
                );
              })}
            </div>
            {errors.interestLevel && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.interestLevel}</span>
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end gap-2.5">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={onClose}
              className="text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              className="text-xs"
              leftIcon={!isSubmitting ? <Sparkles className="w-4 h-4" /> : undefined}
            >
              {isSubmitting ? 'Qualifying...' : 'Confirm Qualification'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

