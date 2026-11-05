import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ToastContainer } from '../ui/Toast';
import { QualificationModal } from '../leads/QualificationModal';
import { SuccessModal } from '../states/SuccessState';
import { useLeads } from '../../context/LeadContext';

export const AppLayout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {
    qualifyingLead,
    closeQualifyModal,
    qualifyLead,
    successQualifiedLead,
    closeSuccessModal,
    openLeadDetails,
  } = useLeads();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-[#0F172A] font-sans antialiased overflow-x-hidden">
      {/* Sidebar (desktop 240px, tablet collapsible, mobile drawer) */}
      <Sidebar isOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Qualification Modal (Desktop modal / mobile sheet) */}
      <QualificationModal
        lead={qualifyingLead}
        isOpen={!!qualifyingLead}
        onClose={closeQualifyModal}
        onConfirm={qualifyLead}
      />

      {/* Success Modal */}
      {successQualifiedLead && (
        <SuccessModal
          lead={successQualifiedLead}
          onViewLead={(lead) => {
            closeSuccessModal();
            openLeadDetails(lead);
          }}
          onBackToLeads={closeSuccessModal}
        />
      )}

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
};

