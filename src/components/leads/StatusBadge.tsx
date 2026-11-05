import React from 'react';
import { LeadStatus } from '../../types/lead';

interface StatusBadgeProps {
  status: LeadStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-0.5 text-xs';

  switch (status) {
    case 'New':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-50 text-[#1264F5] border border-blue-200/80 ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1264F5] animate-pulse"></span>
          <span>New</span>
        </span>
      );
    case 'Qualified':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-emerald-50 text-[#16A34A] border border-emerald-200/80 ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
          <span>Qualified</span>
        </span>
      );
    case 'Follow-up':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-amber-50 text-[#D97706] border border-amber-200/80 ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
          <span>Follow-up</span>
        </span>
      );
    case 'Converted':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-purple-50 text-purple-700 border border-purple-200/80 ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
          <span>Converted</span>
        </span>
      );
    case 'Disqualified':
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200 ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          <span>Disqualified</span>
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-slate-100 text-slate-700 ${sizeClasses}`}
        >
          <span>{status}</span>
        </span>
      );
  }
};

