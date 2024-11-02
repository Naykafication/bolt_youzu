import React, { useState } from 'react';
import { GalleryVerticalEnd, Search, BookmarkCheck, User } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-off-white)]">
      <header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-sm border-b border-[var(--primary-green)]/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GalleryVerticalEnd className="h-8 w-8 text-[var(--primary-green)]" />
            <span className="text-xl font-bold text-[var(--primary-black)]">Youzu.ai</span>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className={`flex items-center space-x-2 text-[var(--primary-green)] hover:text-[var(--accent-green)] transition-colors
                ${isSearchExpanded ? 'w-64' : 'w-auto'}`}
            >
              <Search className="h-5 w-5" />
              {isSearchExpanded && (
                <input
                  type="text"
                  placeholder="Search designs..."
                  className="search-input"
                  autoFocus
                />
              )}
            </button>

            <button className="text-[var(--primary-green)] hover:text-[var(--accent-green)] transition-colors">
              <BookmarkCheck className="h-5 w-5" />
            </button>

            <button className="text-[var(--primary-green)] hover:text-[var(--accent-green)] transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">{children}</main>
    </div>
  );
};