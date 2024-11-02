import React from 'react';
import { Home, Bed, ChefHat, Briefcase, Baby } from 'lucide-react';
import { Room } from '../types';
import { rooms } from '../data/rooms';

const icons: Record<Room, React.ElementType> = {
  'living-room': Home,
  'bedroom': Bed,
  'kitchen': ChefHat,
  'home-office': Briefcase,
  'kids-room': Baby,
};

interface RoomSelectorProps {
  selectedRoom: Room | null;
  onSelectRoom: (room: Room) => void;
}

export const RoomSelector: React.FC<RoomSelectorProps> = ({
  selectedRoom,
  onSelectRoom,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {rooms.map(({ id, name, description, preview }) => {
        const Icon = icons[id];
        const isSelected = selectedRoom === id;

        return (
          <button
            key={id}
            onClick={() => onSelectRoom(id)}
            className={`
              relative group rounded-xl overflow-hidden transition-all duration-300
              ${isSelected 
                ? 'ring-4 ring-[var(--primary-orange)] ring-offset-2 bg-[var(--bg-light-yellow)]' 
                : 'hover:ring-2 hover:ring-[var(--accent-green)] hover:ring-offset-2 bg-[var(--bg-light-yellow)]'}
            `}
          >
            <div className="aspect-square">
              <img
                src={preview}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/80 via-[var(--primary-black)]/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center space-x-2 text-white mb-2">
                  <Icon className="h-5 w-5" />
                  <h3 className="font-semibold">{name}</h3>
                </div>
                <p className="text-sm text-white/80 line-clamp-2">{description}</p>
              </div>

              <div className={`
                absolute inset-0 transition-opacity duration-300
                ${isSelected 
                  ? 'bg-[var(--primary-orange)]/20' 
                  : 'bg-[var(--accent-green)]/20 opacity-0 group-hover:opacity-100'}
              `} />
            </div>
          </button>
        );
      })}
    </div>
  );
};