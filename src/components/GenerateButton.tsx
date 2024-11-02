import React from 'react';
import { Wand2 } from 'lucide-react';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative w-full max-w-md mx-auto h-14 rounded-xl font-semibold
        transition-all duration-300 disabled:cursor-not-allowed
        ${
          disabled
            ? 'bg-gray-100 text-gray-400'
            : 'bg-[var(--primary-green)] text-white hover:bg-[var(--accent-green)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-green)]/20'
        }
      `}
    >
      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center space-x-2">
        <Wand2 className={`h-5 w-5 ${disabled ? '' : 'group-hover:animate-pulse'}`} />
        <span>Generate Design</span>
      </div>
    </button>
  );
};