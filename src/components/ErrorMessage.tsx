import React from 'react';
import { X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-red-50 text-red-800 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};