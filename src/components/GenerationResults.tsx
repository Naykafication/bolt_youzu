import React from 'react';
import { Download, Share2, Undo2 } from 'lucide-react';
import { Room, Style } from '../types';
import { rooms } from '../data/rooms';
import { styles } from '../data/styles';

interface GenerationResultsProps {
  selectedRoom: Room;
  selectedStyles: Style[];
  onReset: () => void;
}

export const GenerationResults: React.FC<GenerationResultsProps> = ({
  selectedRoom,
  selectedStyles,
  onReset,
}) => {
  const roomData = rooms.find((r) => r.id === selectedRoom)!;
  const styleData = selectedStyles.map((s) => styles.find((style) => style.id === s)!);

  // For demo purposes, we'll generate a deterministic image URL based on selections
  const generatedImageUrl = `https://images.unsplash.com/photo-${selectedRoom}-${selectedStyles.join('-')}?auto=format&q=80`;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl mx-4 overflow-hidden">
        <div className="relative aspect-video bg-gray-100">
          <img
            src={generatedImageUrl}
            alt="Generated design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-semibold text-white">
              {roomData.name} Design
            </h3>
            <p className="text-white/80 mt-2">
              Inspired by {styleData.map(s => s.name).join(' + ')}
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-900">Design Details</h4>
              <p className="text-sm text-gray-600">
                Generated using AI with your selected styles and preferences
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {styleData.map((style) => (
              <div key={style.id} className="p-4 rounded-lg bg-gray-50">
                <h5 className="font-medium text-gray-900">{style.name}</h5>
                <ul className="mt-2 space-y-1">
                  {style.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={onReset}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Undo2 className="h-4 w-4" />
            <span>Generate Another Design</span>
          </button>
        </div>
      </div>
    </div>
  );
};