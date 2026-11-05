import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLeads } from '../context/LeadContext';
import { Lead, LeadFiltersState } from '../types/lead';
import { LeadTable } from '../components/leads/LeadTable';
import { LeadCard } from '../components/leads/LeadCard';
import { LeadDetails } from '../components/leads/LeadDetails';
import { StatusTabs } from '../components/leads/StatusTabs';
import { LeadFilters } from '../components/leads/LeadFilters';
import { AddLeadModal } from '../components/leads/AddLeadModal';
import { TableSkeleton, CardSkeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/states/EmptyState';
import { ErrorState } from '../components/states/ErrorState';
import { Button } from '../components/ui/Button';
import { Download, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export const LeadsPage: React.FC = () => {
  const { id: paramLeadId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    leads,
    isLoading,
    hasError,
    selectedLeadId,
    setSelectedLeadId,
    openLeadDetails,
    closeLeadDetails,
    openQualifyModal,
    markAsFollowUp,
    disqualifyLead,
    updateLeadOwner,
    addLead,
    retryFetchLeads,
    showToast,
  } = useLeads();

  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);

  // Synchronize URL param /leads/:id with drawer selection
  useEffect(() => {
    if (paramLeadId) {
      setSelectedLeadId(paramLeadId);
    }
  }, [paramLeadId, setSelectedLeadId]);

  // Filters state
  const [filters, setFilters] = useState<LeadFiltersState>({
    search: '',
    status: 'All',
    source: 'All',
    owner: 'All',
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Active filter count (excluding status tab if selected separately)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.source !== 'All') count++;
    if (filters.owner !== 'All') count++;
    if (filters.status !== 'All') count++;
    return count;
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      status: 'All',
      source: 'All',
      owner: 'All',
    });
    setCurrentPage(1);
  };

  // Status Tab Counts
  const counts = useMemo(() => {
    return {
      all: leads.length,
      new: leads.filter((l) => l.status === 'New').length,
      qualified: leads.filter((l) => l.status === 'Qualified').length,
      followUp: leads.filter((l) => l.status === 'Follow-up').length,
      converted: leads.filter((l) => l.status === 'Converted').length,
    };
  }, [leads]);

  // Combined Multi-Filter Logic
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Status filter
      if (filters.status !== 'All' && lead.status !== filters.status) {
        return false;
      }

      // Source filter
      if (filters.source !== 'All' && lead.source !== filters.source) {
        return false;
      }

      // Owner filter
      if (filters.owner !== 'All' && lead.owner !== filters.owner) {
        return false;
      }

      // Search query (name, email, phone)
      if (filters.search) {
        const query = filters.search.toLowerCase().trim();
        const matchesName = lead.name.toLowerCase().includes(query);
        const matchesEmail = lead.email.toLowerCase().includes(query);
        const matchesPhone = lead.phone.toLowerCase().includes(query);
        const matchesCompany = lead.company.toLowerCase().includes(query);
        if (!matchesName && !matchesEmail && !matchesPhone && !matchesCompany) {
          return false;
        }
      }

      return true;
    });
  }, [leads, filters]);

  // Paginated Leads
  const totalPages = Math.ceil(filteredLeads.length / pageSize) || 1;
  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredLeads.slice(startIndex, startIndex + pageSize);
  }, [filteredLeads, currentPage, pageSize]);

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Source', 'Campaign', 'Status', 'Owner', 'Score'];
    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.company}"`,
      `"${l.source}"`,
      `"${l.campaign}"`,
      `"${l.status}"`,
      `"${l.owner}"`,
      l.score,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leadzam_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Export Complete', `Exported ${filteredLeads.length} leads to CSV.`);
  };

  const handleSelectLead = (lead: Lead) => {
    openLeadDetails(lead);
    // Optionally update URL smoothly without reload
    window.history.replaceState(null, '', `/leads/${lead.id}`);
  };

  const handleCloseDrawer = () => {
    closeLeadDetails();
    if (paramLeadId) {
      navigate('/leads', { replace: true });
    } else {
      window.history.replaceState(null, '', '/leads');
    }
  };

  const activeDrawerLead = leads.find((l) => l.id === selectedLeadId) || null;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Leads</h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            Manage, qualify, and follow up with your leads.
          </p>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            leftIcon={<Download className="w-3.5 h-3.5 text-[#64748B]" />}
          >
            Export
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsAddLeadModalOpen(true)}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            + Add Lead
          </Button>
        </div>
      </div>

      {/* Status Tabs */}
      <StatusTabs
        currentStatus={filters.status}
        onSelectStatus={(status) => {
          setFilters((prev) => ({ ...prev, status }));
          setCurrentPage(1);
        }}
        counts={counts}
      />

      {/* Search and Filters */}
      <LeadFilters
        filters={filters}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          setCurrentPage(1);
        }}
        onReset={handleResetFilters}
        activeFilterCount={activeFilterCount}
      />

      {/* Main Content Area */}
      {hasError ? (
        <ErrorState onRetry={retryFetchLeads} />
      ) : isLoading ? (
        <>
          <div className="hidden md:block">
            <TableSkeleton rows={pageSize} />
          </div>
          <div className="block md:hidden">
            <CardSkeleton count={4} />
          </div>
        </>
      ) : filteredLeads.length === 0 ? (
        <EmptyState
          onClearFilters={handleResetFilters}
          onAddLead={() => setIsAddLeadModalOpen(true)}
        />
      ) : (
        <div className="space-y-4">
          {/* Desktop Table (> 768px) */}
          <div className="hidden md:block">
            <LeadTable
              leads={paginatedLeads}
              selectedLeadId={selectedLeadId}
              onSelectLead={handleSelectLead}
              onQualifyLead={openQualifyModal}
            />
          </div>

          {/* Mobile Cards (< 768px) */}
          <div className="block md:hidden space-y-3">
            {paginatedLeads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onSelect={handleSelectLead}
                onQualify={openQualifyModal}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="px-4 py-3 bg-white rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-3">
            <div>
              Showing{' '}
              <strong className="text-[#0F172A] font-semibold">
                {filteredLeads.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
              </strong>{' '}
              to{' '}
              <strong className="text-[#0F172A] font-semibold">
                {Math.min(currentPage * pageSize, filteredLeads.length)}
              </strong>{' '}
              of <strong className="text-[#0F172A] font-semibold">{filteredLeads.length}</strong> leads
            </div>

            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="h-8 px-2.5"
                leftIcon={<ChevronLeft className="w-4 h-4" />}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                // Only show first 5 pages if many
                if (totalPages > 5 && Math.abs(pageNumber - currentPage) > 2 && pageNumber !== 1 && pageNumber !== totalPages) {
                  return null;
                }
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition ${
                      isActive
                        ? 'bg-[#1264F5] text-white shadow-xs'
                        : 'bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <Button
                variant="outline"
                size="sm"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="h-8 px-2.5"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Context-Preserving Lead Details Drawer */}
      <LeadDetails
        lead={activeDrawerLead}
        isOpen={!!activeDrawerLead}
        onClose={handleCloseDrawer}
        onQualify={openQualifyModal}
        onMarkFollowUp={markAsFollowUp}
        onDisqualify={disqualifyLead}
        onUpdateOwner={updateLeadOwner}
      />

      {/* Add Lead Modal */}
      <AddLeadModal
        isOpen={isAddLeadModalOpen}
        onClose={() => setIsAddLeadModalOpen(false)}
        onAdd={addLead}
      />
    </div>
  );
};
