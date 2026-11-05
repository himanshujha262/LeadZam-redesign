import React from 'react';
import { Menu, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  onOpenMobileNav: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-[#E2E8F0] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Mobile hamburger & live sync badge */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-emerald-50 text-[#16A34A] border border-emerald-200/80 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
          <span>Live Sync: Meta & Google Ads</span>
        </div>
      </div>

      {/* Right: Quick sync indicator & profile */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-1.5 text-xs text-[#64748B] bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/70">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Speed-to-lead benchmark: <strong>&lt; 2s</strong></span>
        </div>

        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1264F5] font-bold text-xs flex items-center justify-center">
            {user ? user.name.slice(0, 2).toUpperCase() : 'HK'}
          </div>
          <div className="hidden lg:block text-left text-xs">
            <span className="font-semibold text-[#0F172A] block leading-tight">
              {user ? user.name : 'Himanshu Kumar'}
            </span>
            <span className="text-[11px] text-[#64748B] block leading-tight">
              {user ? user.role : 'Sales Director'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

