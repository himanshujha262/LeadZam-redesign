import React from 'react';
import { AlertTriangle, RefreshCw, LifeBuoy } from 'lucide-react';
import { Button } from '../ui/Button';

interface ErrorStateProps {
  onRetry: () => void;
  onContactSupport?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  onRetry,
  onContactSupport = () => window.open('mailto:support@leadzam.com', '_blank'),
}) => {
  return (
    <div className="bg-white rounded-xl border border-red-200 p-10 sm:p-14 text-center max-w-lg mx-auto shadow-xs">
      <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-[#0F172A]">We couldn't load your leads</h3>
      <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 max-w-sm mx-auto leading-relaxed">
        Something went wrong while loading your leads. Please try again.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <Button variant="primary" size="sm" onClick={onRetry} leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
          Try Again
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onContactSupport}
          leftIcon={<LifeBuoy className="w-3.5 h-3.5 text-[#64748B]" />}
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
};

