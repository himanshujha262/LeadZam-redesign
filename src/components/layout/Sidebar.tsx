import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLeads } from '../../context/LeadContext';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Users,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile }) => {
  const { leads } = useLeads();
  const { user, logout } = useAuth();

  const activeCount = leads.length;

  const navItems = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      to: '/leads',
      label: 'Leads',
      icon: <Users className="w-4 h-4" />,
      badge: activeCount,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs md:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container:
          - Desktop (>= 768px): 230-240px width, sticky/fixed left
          - Mobile (< 768px): slide-in drawer
      */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-[230px] md:w-[240px] bg-white border-r border-[#E2E8F0] z-50 flex flex-col justify-between shrink-0 transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Brand Header */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-[#E2E8F0]/70">
            <Link to="/leads" className="flex items-center gap-2.5" onClick={onCloseMobile}>
              <img
                src="/assets/images/logo.png"
                alt="LeadZam"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-bold text-lg text-[#0F172A] tracking-tight">LeadZam</span>
              <span className="bg-blue-50 text-[#1264F5] text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-blue-100">
                Beta
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="p-3 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
              Workspace
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1264F5]'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100/80 text-[#1264F5]">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* User Footer Profile */}
        <div className="p-3 border-t border-[#E2E8F0]/70">
          <div className="p-2 rounded-xl hover:bg-slate-50 flex items-center justify-between transition">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1264F5] font-bold text-xs flex items-center justify-center shrink-0">
                {user ? user.name.slice(0, 2).toUpperCase() : 'HK'}
              </div>
              <div className="min-w-0 truncate">
                <div className="text-xs font-bold text-[#0F172A] truncate">
                  {user ? user.name : 'Himanshu Kumar'}
                </div>
                <div className="text-[11px] text-[#64748B] truncate">
                  {user ? user.role : 'Sales Director'}
                </div>
              </div>
            </div>
            <button
              onClick={logout}
              title="Sign Out"
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
