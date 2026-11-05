import React, { useState } from 'react';
import { LeadFiltersState, LeadOwner, LeadSource, LeadStatus } from '../../types/lead';
import { Search, Filter, RotateCcw, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '../ui/Button';

interface LeadFiltersProps {
  filters: LeadFiltersState;
  onFilterChange: (filters: LeadFiltersState) => void;
  onReset: () => void;
  activeFilterCount: number;
}

export const LeadFilters: React.FC<LeadFiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
  activeFilterCount,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const owners: LeadOwner[] = ['Amit Verma', 'Neha Singh', 'Rahul Mehta', 'Unassigned'];
  const sources: LeadSource[] = ['Meta Ads', 'Google Ads', 'Organic'];
  const statuses: LeadStatus[] = ['New', 'Qualified', 'Follow-up', 'Converted', 'Disqualified'];

  return (
    <div className="w-full">
      {/* Desktop / Tablet Filters Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            placeholder="Search leads by name, email or phone..."
            className="w-full h-9 pl-9 pr-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#1264F5] focus:ring-2 focus:ring-[#1264F5]/20 transition"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ ...filters, search: '' })}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Desktop Filter Dropdowns */}
        <div className="hidden md:flex items-center gap-2 flex-wrap">
          {/* Status Select */}
          <select
            value={filters.status}
            onChange={(e) =>
              onFilterChange({ ...filters, status: e.target.value as 'All' | LeadStatus })
            }
            className="h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition"
          >
            <option value="All">All Statuses</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Source Select */}
          <select
            value={filters.source}
            onChange={(e) =>
              onFilterChange({ ...filters, source: e.target.value as 'All' | LeadSource })
            }
            className="h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition"
          >
            <option value="All">All Sources</option>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Owner Select */}
          <select
            value={filters.owner}
            onChange={(e) =>
              onFilterChange({ ...filters, owner: e.target.value as 'All' | LeadOwner })
            }
            className="h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition"
          >
            <option value="All">All Owners</option>
            {owners.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="h-9 text-xs text-[#64748B] hover:text-[#0F172A]"
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            >
              Reset
            </Button>
          )}
        </div>

        {/* Mobile Filter Trigger Button */}
        <div className="flex md:hidden items-center justify-between gap-2">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex-1 h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#0F172A] flex items-center justify-center gap-1.5 shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#64748B]" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#1264F5] text-white text-[10px] flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeFilterCount > 0 && (
            <button
              onClick={onReset}
              className="h-9 px-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold rounded-lg flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Filter Sheet / Modal */}
      {isMobileFilterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/40 backdrop-blur-xs md:hidden"
        >
          <div className="bg-white rounded-t-2xl p-5 space-y-4 animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#1264F5]" />
                <h3 className="text-sm font-bold text-[#0F172A]">Filter Leads</h3>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Status */}
              <div>
                <label className="block font-semibold text-[#0F172A] mb-1.5">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) =>
                    onFilterChange({ ...filters, status: e.target.value as 'All' | LeadStatus })
                  }
                  className="w-full h-10 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A]"
                >
                  <option value="All">All Statuses</option>
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Source */}
              <div>
                <label className="block font-semibold text-[#0F172A] mb-1.5">Ad Source</label>
                <select
                  value={filters.source}
                  onChange={(e) =>
                    onFilterChange({ ...filters, source: e.target.value as 'All' | LeadSource })
                  }
                  className="w-full h-10 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A]"
                >
                  <option value="All">All Sources</option>
                  {sources.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Owner */}
              <div>
                <label className="block font-semibold text-[#0F172A] mb-1.5">Assigned Owner</label>
                <select
                  value={filters.owner}
                  onChange={(e) =>
                    onFilterChange({ ...filters, owner: e.target.value as 'All' | LeadOwner })
                  }
                  className="w-full h-10 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A]"
                >
                  <option value="All">All Owners</option>
                  {owners.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  onReset();
                  setIsMobileFilterOpen(false);
                }}
              >
                Clear All
              </Button>
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

