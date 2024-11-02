import React from 'react';
import { Room, Style } from '../types';
import { rooms } from '../data/rooms';
import { styles } from '../data/styles';

interface LoadingOverlayProps {
  selectedRoom: Room;
  selectedStyles: Style[];
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  selectedRoom,
  selectedStyles,
}) => {
  const roomData = rooms.find((r) => r.id === selectedRoom)!;
  const styleData = selectedStyles.map((s) => styles.find((style) => style.id === s)!);

  return (
    <div className="fixed inset-0 bg-[var(--primary-black)]/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-[var(--primary-green)]/30 rounded-full" />
              <div className="absolute inset-0 border-4 border-[var(--primary-green)] border-t-transparent rounded-full animate-spin" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[var(--primary-black)]">
              Creating your dream space
            </h3>
            <p className="mt-2 text-[var(--primary-green)]">
              Combining {styleData.map(s => s.name).join(' + ')} styles
              for your {roomData.name.toLowerCase()}
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-2 bg-[var(--bg-light-yellow)] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] rounded-full w-2/3 animate-progress" />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {styleData.map((style) => (
                <img
                  key={style.id}
                  src={style.image}
                  alt={style.name}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};