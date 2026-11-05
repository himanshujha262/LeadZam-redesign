import React from 'react';
import { SearchX, Plus, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

interface EmptyStateProps {
  onClearFilters: () => void;
  onAddLead: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters, onAddLead }) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-10 sm:p-14 text-center max-w-lg mx-auto shadow-xs">
      <div className="w-12 h-12 rounded-full bg-slate-100 text-[#64748B] flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-[#0F172A]">No leads found</h3>
      <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 max-w-xs mx-auto leading-relaxed">
        Try adjusting your filters or search for a different lead.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <Button variant="outline" size="sm" onClick={onClearFilters} leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
          Clear Filters
        </Button>
        <Button variant="primary" size="sm" onClick={onAddLead} leftIcon={<Plus className="w-4 h-4" />}>
          + Add Lead
        </Button>
      </div>
    </div>
  );
};

