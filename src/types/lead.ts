export type LeadStatus = 'New' | 'Qualified' | 'Follow-up' | 'Converted' | 'Disqualified';

export type LeadSource = 'Meta Ads' | 'Google Ads' | 'Organic';

export type LeadOwner = 'Amit Verma' | 'Neha Singh' | 'Rahul Mehta' | 'Unassigned';

export type CompanySize = '1–10' | '11–50' | '50–200' | '201–500' | '500+';

export type BudgetRange = 'Under ₹50K' | '₹50K – ₹1L' | '₹1L – ₹5L' | '₹5L – ₹10L' | '₹10L+';

export type PurchaseTimeline = 'Immediate' | 'This month' | 'Next quarter' | 'Exploring';

export type InterestLevel = 'High' | 'Medium' | 'Low';

export interface LeadNote {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface LeadTimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  type: 'ad' | 'system' | 'whatsapp' | 'call' | 'qualification' | 'status';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  source: LeadSource;
  campaign: string;
  adCreative?: string;
  status: LeadStatus;
  owner: LeadOwner;
  lastActivity: string;
  nextFollowUp: string;
  score: number;
  intentLevel: InterestLevel;
  location: string;
  companySize?: CompanySize;
  budget?: BudgetRange;
  purchaseTimeline?: PurchaseTimeline;
  notes: LeadNote[];
  timeline: LeadTimelineEvent[];
}

export interface LeadFiltersState {
  search: string;
  status: 'All' | LeadStatus;
  source: 'All' | LeadSource;
  owner: 'All' | LeadOwner;
}

export interface QualificationFormData {
  companySize: CompanySize | '';
  budget: BudgetRange | '';
  purchaseTimeline: PurchaseTimeline | '';
  interestLevel: InterestLevel | '';
}

export interface QualificationValidationErrors {
  companySize?: string;
  budget?: string;
  purchaseTimeline?: string;
  interestLevel?: string;
}

