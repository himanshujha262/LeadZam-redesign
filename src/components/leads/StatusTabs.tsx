import React from 'react';
import { LeadStatus } from '../../types/lead';

interface StatusTabsProps {
  currentStatus: 'All' | LeadStatus;
  onSelectStatus: (status: 'All' | LeadStatus) => void;
  counts: {
    all: number;
    new: number;
    qualified: number;
    followUp: number;
    converted: number;
  };
}

export const StatusTabs: React.FC<StatusTabsProps> = ({
  currentStatus,
  onSelectStatus,
  counts,
}) => {
  const tabs: { label: string; value: 'All' | LeadStatus; count: number }[] = [
    { label: 'All', value: 'All', count: counts.all },
    { label: 'New', value: 'New', count: counts.new },
    { label: 'Qualified', value: 'Qualified', count: counts.qualified },
    { label: 'Follow-up', value: 'Follow-up', count: counts.followUp },
    { label: 'Converted', value: 'Converted', count: counts.converted },
  ];

  return (
    <div className="w-full border-b border-[#E2E8F0] overflow-x-auto no-scrollbar">
      <nav className="flex items-center gap-1 min-w-max" aria-label="Lead status tabs">
        {tabs.map((tab) => {
          const isActive = currentStatus === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => onSelectStatus(tab.value)}
              className={`px-3.5 py-2.5 text-xs font-semibold flex items-center gap-2 border-b-2 transition -mb-px focus:outline-none ${
                isActive
                  ? 'border-[#1264F5] text-[#1264F5]'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:border-slate-300'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive
                    ? 'bg-blue-100 text-[#1264F5]'
                    : 'bg-slate-100 text-[#64748B]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

