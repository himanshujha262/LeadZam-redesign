import React from 'react';

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 6 }) => {
  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden divide-y divide-[#E2E8F0]/70">
      <div className="h-11 bg-slate-50/80 px-4 flex items-center gap-4">
        <div className="w-5 h-5 bg-slate-200 rounded animate-pulse"></div>
        <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
        <div className="w-28 h-4 bg-slate-200 rounded animate-pulse hidden md:block"></div>
        <div className="w-20 h-4 bg-slate-200 rounded animate-pulse hidden lg:block"></div>
        <div className="w-24 h-4 bg-slate-200 rounded animate-pulse hidden sm:block"></div>
        <div className="w-16 h-4 bg-slate-200 rounded animate-pulse ml-auto"></div>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 animate-pulse"></div>
            <div className="space-y-1.5 flex-1 max-w-[200px]">
              <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-3 bg-slate-100 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
          <div className="w-28 space-y-1 hidden md:block">
            <div className="h-3.5 bg-slate-200 rounded w-20 animate-pulse"></div>
            <div className="h-3 bg-slate-100 rounded w-24 animate-pulse"></div>
          </div>
          <div className="w-24 hidden lg:block">
            <div className="h-6 bg-slate-200 rounded-full w-20 animate-pulse"></div>
          </div>
          <div className="w-28 hidden sm:block">
            <div className="h-3.5 bg-slate-200 rounded w-20 animate-pulse"></div>
          </div>
          <div className="w-20 hidden xl:block">
            <div className="h-3.5 bg-slate-200 rounded w-16 animate-pulse"></div>
          </div>
          <div className="w-16 flex justify-end">
            <div className="h-8 bg-slate-200 rounded-lg w-14 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="h-5 bg-slate-200 rounded w-36 animate-pulse"></div>
            <div className="h-5 bg-slate-200 rounded-full w-16 animate-pulse"></div>
          </div>
          <div className="h-3.5 bg-slate-100 rounded w-48 animate-pulse"></div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <div className="h-3 bg-slate-100 rounded w-24 animate-pulse"></div>
            <div className="h-3 bg-slate-100 rounded w-24 animate-pulse"></div>
          </div>
          <div className="h-9 bg-slate-200 rounded-lg w-full animate-pulse pt-1"></div>
        </div>
      ))}
    </div>
  );
};

