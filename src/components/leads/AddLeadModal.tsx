import React, { useState } from 'react';
import { Lead, LeadOwner, LeadSource, LeadStatus } from '../../types/lead';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (lead: Omit<Lead, 'id' | 'notes' | 'timeline'>) => void;
}

export const AddLeadModal: React.FC<AddLeadModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Growth Manager');
  const [source, setSource] = useState<LeadSource>('Meta Ads');
  const [campaign, setCampaign] = useState('Q4 Performance Scaling');
  const [owner, setOwner] = useState<LeadOwner>('Unassigned');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !company.trim()) return;

    onAdd({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || '+91 98765 00000',
      company: company.trim(),
      role: role.trim() || 'Decision Maker',
      source,
      campaign: campaign.trim() || 'Direct Campaign',
      adCreative: 'Lead Magnet Form #01',
      status: 'New' as LeadStatus,
      owner,
      lastActivity: 'Just now',
      nextFollowUp: 'Not scheduled',
      score: Math.floor(Math.random() * 25) + 70,
      intentLevel: 'High',
      location: 'Bengaluru, India',
      companySize: '50–200',
      budget: '₹1L – ₹5L',
      purchaseTimeline: 'This month',
    });

    // Reset and close
    setName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Lead"
      subtitle="Manually create a new incoming lead in your pipeline."
    >
      <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
        <div>
          <label className="block font-semibold text-[#0F172A] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Elena Rostova"
            className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
          />
        </div>

        <div>
          <label className="block font-semibold text-[#0F172A] mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. elena@company.com"
            className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Company</label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Systems"
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Role / Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Head of Marketing"
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            />
          </div>
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Campaign</label>
            <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="e.g. Q4 Performance Scaling"
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Ad Source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value as LeadSource)}
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            >
              <option value="Meta Ads">Meta Ads</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Organic">Organic</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-[#0F172A] mb-1">Assign Owner</label>
            <select
              value={owner}
              onChange={(e) => setOwner(e.target.value as LeadOwner)}
              className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5]"
            >
              <option value="Unassigned">Unassigned</option>
              <option value="Amit Verma">Amit Verma</option>
              <option value="Neha Singh">Neha Singh</option>
              <option value="Rahul Mehta">Rahul Mehta</option>
            </select>
          </div>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-end gap-2">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
            Create Lead
          </Button>
        </div>
      </form>
    </Modal>
  );
};
