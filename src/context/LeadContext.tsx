import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lead, LeadOwner, LeadStatus, QualificationFormData } from '../types/lead';
import { INITIAL_LEADS } from '../data/leads';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface LeadContextType {
  leads: Lead[];
  isLoading: boolean;
  hasError: boolean;
  selectedLeadId: string | null;
  activeDrawerLead: Lead | null;
  qualifyingLead: Lead | null;
  successQualifiedLead: Lead | null;
  toasts: ToastMessage[];
  setSelectedLeadId: (id: string | null) => void;
  openLeadDetails: (lead: Lead) => void;
  closeLeadDetails: () => void;
  openQualifyModal: (lead: Lead) => void;
  closeQualifyModal: () => void;
  closeSuccessModal: () => void;
  qualifyLead: (leadId: string, data: QualificationFormData) => Promise<void>;
  markAsFollowUp: (leadId: string) => void;
  disqualifyLead: (leadId: string) => void;
  updateLeadOwner: (leadId: string, newOwner: LeadOwner) => void;
  addLead: (lead: Omit<Lead, 'id' | 'notes' | 'timeline'>) => void;
  retryFetchLeads: () => void;
  triggerErrorState: (enable: boolean) => void;
  triggerLoadingState: (durationMs?: number) => void;
  showToast: (title: string, message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = sessionStorage.getItem('leadzam_leads');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved leads from session', e);
      }
    }
    return INITIAL_LEADS;
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [qualifyingLead, setQualifyingLead] = useState<Lead | null>(null);
  const [successQualifiedLead, setSuccessQualifiedLead] = useState<Lead | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    sessionStorage.setItem('leadzam_leads', JSON.stringify(leads));
  }, [leads]);

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const activeDrawerLead = leads.find((l) => l.id === selectedLeadId) || null;

  const openLeadDetails = (lead: Lead) => {
    setSelectedLeadId(lead.id);
  };

  const closeLeadDetails = () => {
    setSelectedLeadId(null);
  };

  const openQualifyModal = (lead: Lead) => {
    setQualifyingLead(lead);
  };

  const closeQualifyModal = () => {
    setQualifyingLead(null);
  };

  const closeSuccessModal = () => {
    setSuccessQualifiedLead(null);
  };

  const qualifyLead = async (leadId: string, data: QualificationFormData): Promise<void> => {
    // Simulate realistic async operation (600ms)
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          const updatedOwner = lead.owner === 'Unassigned' ? 'Amit Verma' : lead.owner;
          const updatedLead: Lead = {
            ...lead,
            status: 'Qualified' as LeadStatus,
            owner: updatedOwner,
            companySize: data.companySize || lead.companySize,
            budget: data.budget || lead.budget,
            purchaseTimeline: data.purchaseTimeline || lead.purchaseTimeline,
            intentLevel: data.interestLevel || lead.intentLevel,
            score: Math.max(lead.score, 85),
            lastActivity: 'Just now',
            timeline: [
              {
                id: 't-' + Date.now(),
                title: 'Lead Qualified Successfully',
                subtitle: `Criteria verified (Size: ${data.companySize}, Budget: ${data.budget}). Assigned to ${updatedOwner}.`,
                timestamp: 'Just now',
                type: 'qualification',
              },
              ...lead.timeline,
            ],
          };
          setSuccessQualifiedLead(updatedLead);
          return updatedLead;
        }
        return lead;
      })
    );

    setQualifyingLead(null);
    showToast('Lead Qualified Successfully', `${qualifyingLead?.name || 'Lead'} has been moved to Qualified.`);
  };

  const markAsFollowUp = (leadId: string) => {
    let leadName = '';
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          leadName = lead.name;
          return {
            ...lead,
            status: 'Follow-up' as LeadStatus,
            lastActivity: 'Just now',
            nextFollowUp: lead.nextFollowUp === 'Not scheduled' || lead.nextFollowUp === '—' ? 'Tomorrow, 10:00 AM' : lead.nextFollowUp,
            timeline: [
              {
                id: 't-' + Date.now(),
                title: 'Marked for Follow-up',
                subtitle: 'Status moved to Follow-up. Follow-up reminder queued.',
                timestamp: 'Just now',
                type: 'call',
              },
              ...lead.timeline,
            ],
          };
        }
        return lead;
      })
    );
    showToast('Status Updated', `${leadName || 'Lead'} marked for Follow-up.`, 'info');
  };

  const disqualifyLead = (leadId: string) => {
    let leadName = '';
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          leadName = lead.name;
          return {
            ...lead,
            status: 'Disqualified' as LeadStatus,
            lastActivity: 'Just now',
            timeline: [
              {
                id: 't-' + Date.now(),
                title: 'Lead Disqualified',
                subtitle: 'Does not match ICP or budget parameters.',
                timestamp: 'Just now',
                type: 'status',
              },
              ...lead.timeline,
            ],
          };
        }
        return lead;
      })
    );
    showToast('Lead Disqualified', `${leadName || 'Lead'} marked as Disqualified.`, 'info');
  };

  const updateLeadOwner = (leadId: string, newOwner: LeadOwner) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          return {
            ...lead,
            owner: newOwner,
            lastActivity: 'Just now',
            timeline: [
              {
                id: 't-' + Date.now(),
                title: 'Owner Reassigned',
                subtitle: `Assigned sales representative changed to ${newOwner}`,
                timestamp: 'Just now',
                type: 'system',
              },
              ...lead.timeline,
            ],
          };
        }
        return lead;
      })
    );
    showToast('Assignment Updated', `Lead owner changed to ${newOwner}.`, 'info');
  };

  const addLead = (leadData: Omit<Lead, 'id' | 'notes' | 'timeline'>) => {
    const newLead: Lead = {
      ...leadData,
      id: 'lead-' + Date.now(),
      notes: [],
      timeline: [
        {
          id: 't-' + Date.now(),
          title: 'Lead Created Manually',
          subtitle: `Created by user. Origin: ${leadData.source}`,
          timestamp: 'Just now',
          type: 'system',
        },
      ],
    };
    setLeads((prev) => [newLead, ...prev]);
    showToast('Lead Added', `${newLead.name} has been added to the pipeline.`, 'success');
  };

  const retryFetchLeads = () => {
    setHasError(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast('Data Synced', 'Pipeline leads reloaded successfully.');
    }, 600);
  };

  const triggerErrorState = (enable: boolean) => {
    setHasError(enable);
  };

  const triggerLoadingState = (durationMs = 1200) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, durationMs);
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        isLoading,
        hasError,
        selectedLeadId,
        activeDrawerLead,
        qualifyingLead,
        successQualifiedLead,
        toasts,
        setSelectedLeadId,
        openLeadDetails,
        closeLeadDetails,
        openQualifyModal,
        closeQualifyModal,
        closeSuccessModal,
        qualifyLead,
        markAsFollowUp,
        disqualifyLead,
        updateLeadOwner,
        addLead,
        retryFetchLeads,
        triggerErrorState,
        triggerLoadingState,
        showToast,
        removeToast,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = (): LeadContextType => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
};

