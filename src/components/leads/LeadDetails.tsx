import React, { useState } from 'react';
import { Lead, LeadOwner } from '../../types/lead';
import { StatusBadge } from './StatusBadge';
import { Button } from '../ui/Button';
import {
  X,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  User,
  Clock,
  Send,
  Building,
  FileText,
  History,
  MoreVertical,
} from 'lucide-react';

interface LeadDetailsProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onQualify: (lead: Lead) => void;
  onMarkFollowUp: (leadId: string) => void;
  onDisqualify: (leadId: string) => void;
  onUpdateOwner: (leadId: string, owner: LeadOwner) => void;
}

export const LeadDetails: React.FC<LeadDetailsProps> = ({
  lead,
  isOpen,
  onClose,
  onQualify,
  onMarkFollowUp,
  onDisqualify,
  onUpdateOwner,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity' | 'notes'>('overview');
  const [newNote, setNewNote] = useState('');
  const [notesList, setNotesList] = useState(lead?.notes || []);

  if (!isOpen || !lead) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const note = {
      id: 'n-' + Date.now(),
      author: 'You (Sales Rep)',
      content: newNote.trim(),
      timestamp: 'Just now',
    };
    setNotesList([note, ...notesList]);
    setNewNote('');
  };

  const ownersList: LeadOwner[] = ['Amit Verma', 'Neha Singh', 'Rahul Mehta', 'Unassigned'];

  return (
    <>
      {/* Backdrop (visible on desktop blur, handles close on click) */}
      <div
        className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs transition-opacity duration-300 md:block"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container:
          - Mobile (< 768px): Full-screen view fixed inset-0
          - Desktop (>= 768px): Right-side drawer 430px wide
      */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Lead Details"
        className="fixed inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[430px] lg:w-[440px] bg-white z-50 shadow-drawer flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#E2E8F0]"
      >
        {/* Header */}
        <div className="h-16 px-5 border-b border-[#E2E8F0] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Back button on mobile */}
            <button
              onClick={onClose}
              className="md:hidden p-1.5 -ml-1 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Back to leads"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-base font-bold text-[#0F172A] tracking-tight">Lead Details</h2>
              <span className="text-[11px] text-[#64748B]">ID: {lead.id}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="hidden md:flex p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close lead details"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-1.5 text-[#64748B] hover:text-[#0F172A] rounded-lg"
              aria-label="More options"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lead Identity Summary */}
        <div className="px-5 py-4 border-b border-[#E2E8F0] bg-slate-50/60 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1264F5] font-bold text-base flex items-center justify-center shrink-0">
                {lead.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#0F172A] truncate">{lead.name}</h3>
                </div>
                <p className="text-xs text-[#64748B] truncate mt-0.5">{lead.role || 'Decision Maker'} • {lead.company}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <StatusBadge status={lead.status} size="sm" />
                </div>
              </div>
            </div>

            {/* Lead Score Indicator */}
            <div className="text-right shrink-0">
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-base font-black text-[#0F172A]">{lead.score}</span>
                <span className="text-xs text-[#64748B]">/ 100</span>
              </div>
              <span className="text-[10px] font-semibold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 block mt-1">
                High-intent
              </span>
            </div>
          </div>

          {/* Quick Contact Chips */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <a
              href={`mailto:${lead.email}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#0F172A] hover:border-[#1264F5] hover:text-[#1264F5] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="truncate max-w-[180px]">{lead.email}</span>
            </a>
            <a
              href={`tel:${lead.phone}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#0F172A] hover:border-[#1264F5] hover:text-[#1264F5] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#64748B]" />
              <span>{lead.phone}</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 border-b border-[#E2E8F0] bg-white flex items-center gap-4 text-xs font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'overview'
                ? 'border-[#1264F5] text-[#1264F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'activity'
                ? 'border-[#1264F5] text-[#1264F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Activity</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 text-[#64748B]">
              {lead.timeline?.length || 0}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'notes'
                ? 'border-[#1264F5] text-[#1264F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Notes</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 text-[#64748B]">
              {notesList.length}
            </span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-[#0F172A]">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Lead Score Card */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#1264F5] uppercase tracking-wider">
                    Lead Score
                  </span>
                  <div className="text-xl font-black text-[#0F172A] mt-0.5">
                    {lead.score} <span className="text-xs font-normal text-[#64748B]">/ 100</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-0.5">High-intent lead based on ad campaign and form submission.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1264F5] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-3 shadow-xs">
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Contact Information</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Email</span>
                    <span className="font-medium text-[#0F172A] break-all">{lead.email}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Phone</span>
                    <span className="font-medium text-[#0F172A]">{lead.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Location</span>
                    <span className="font-medium text-[#0F172A] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#64748B]" />
                      <span>{lead.location || 'India'}</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Company</span>
                    <span className="font-medium text-[#0F172A]">{lead.company}</span>
                  </div>
                </div>
              </div>

              {/* Lead Source */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-3 shadow-xs">
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider">Lead Source</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Source / Channel</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold mt-1">
                      {lead.source}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-[11px] block">Campaign</span>
                    <span className="font-medium text-[#0F172A] block mt-1">{lead.campaign}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#64748B] text-[11px] block">Ad Creative / Form</span>
                    <span className="font-medium text-[#0F172A] block mt-1 text-[11px] bg-slate-50 p-2 rounded border border-slate-100">
                      {lead.adCreative || 'Summer Offer — Lead Form'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Assignment (Editable Owner Dropdown) */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-3 shadow-xs">
                <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider">Assignment & Next Step</h4>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="owner-select" className="text-[#64748B] text-[11px] block mb-1">
                      Owner (Sales Rep)
                    </label>
                    <div className="relative">
                      <select
                        id="owner-select"
                        value={lead.owner}
                        onChange={(e) => onUpdateOwner(lead.id, e.target.value as LeadOwner)}
                        className="w-full h-9 px-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition"
                      >
                        {ownersList.map((owner) => (
                          <option key={owner} value={owner}>
                            {owner}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#64748B] text-[11px] block mb-1">Next Follow-up</span>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                      <Clock className="w-4 h-4 text-[#64748B]" />
                      <span className="font-medium text-[#0F172A]">{lead.nextFollowUp || 'Tomorrow, 10:00 AM'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider">Activity History</h4>
              <div className="border-l-2 border-slate-200 pl-4 ml-2 space-y-4">
                {lead.timeline?.map((event) => (
                  <div key={event.id} className="relative">
                    <div
                      className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-white ${
                        event.type === 'qualification'
                          ? 'bg-[#16A34A]'
                          : event.type === 'whatsapp'
                          ? 'bg-[#10B981]'
                          : 'bg-[#1264F5]'
                      }`}
                    />
                    <div className="text-[11px] text-[#64748B]">{event.timestamp}</div>
                    <div className="font-semibold text-[#0F172A] mt-0.5">{event.title}</div>
                    <p className="text-xs text-[#64748B] mt-0.5">{event.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <form onSubmit={handleAddNote} className="space-y-2">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add an internal follow-up note..."
                  rows={3}
                  className="w-full p-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1264F5] transition"
                />
                <Button type="submit" size="sm" variant="primary" rightIcon={<Send className="w-3.5 h-3.5" />}>
                  Post Note
                </Button>
              </form>

              <div className="space-y-2.5 pt-2">
                {notesList.length === 0 ? (
                  <p className="text-xs text-[#64748B] text-center py-6">No notes added yet.</p>
                ) : (
                  notesList.map((n) => (
                    <div key={n.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-[#0F172A]">{n.author}</span>
                        <span className="text-[#64748B]">{n.timestamp}</span>
                      </div>
                      <p className="text-xs text-[#0F172A] leading-relaxed">{n.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Footer (Sticky at bottom, visually dominant Qualify Lead button) */}
        <div className="p-4 border-t border-[#E2E8F0] bg-white flex flex-col gap-2 shrink-0">
          {/* Primary Action Button */}
          <Button
            variant="primary"
            size="md"
            className="w-full text-xs font-bold py-2.5 shadow-sm"
            onClick={() => onQualify(lead)}
            leftIcon={<Sparkles className="w-4 h-4" />}
          >
            Qualify Lead
          </Button>

          {/* Secondary Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
              onClick={() => onMarkFollowUp(lead.id)}
              leftIcon={<Clock className="w-3.5 h-3.5 text-[#64748B]" />}
            >
              Mark as Follow-up
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => onDisqualify(lead.id)}
            >
              Disqualify
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
