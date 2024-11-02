import React, { useState } from 'react';
import { Room, Style } from './types';
import { Layout } from './components/Layout';
import { RoomSelector } from './components/RoomSelector';
import { StyleSelector } from './components/StyleSelector';
import { GenerateButton } from './components/GenerateButton';
import { LoadingOverlay } from './components/LoadingOverlay';
import { GenerationResults } from './components/GenerationResults';

function App() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<Style[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleGenerate = () => {
    if (selectedRoom && selectedStyles.length > 0) {
      setIsGenerating(true);
      // Simulate API call with timeout
      setTimeout(() => {
        setIsGenerating(false);
        setShowResults(true);
      }, 3000);
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setSelectedRoom(null);
    setSelectedStyles([]);
  };

  return (
    <Layout>
      <main className="container mx-auto px-4 py-12 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Select a Room</h2>
          <RoomSelector
            selectedRoom={selectedRoom}
            onSelectRoom={setSelectedRoom}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Choose Your Style</h2>
          <StyleSelector
            selectedStyles={selectedStyles}
            onSelectStyles={setSelectedStyles}
          />
        </div>

        <GenerateButton
          onClick={handleGenerate}
          disabled={!selectedRoom || selectedStyles.length === 0}
        />

        {isGenerating && selectedRoom && (
          <LoadingOverlay
            selectedRoom={selectedRoom}
            selectedStyles={selectedStyles}
          />
        )}

        {showResults && selectedRoom && (
          <GenerationResults
            selectedRoom={selectedRoom}
            selectedStyles={selectedStyles}
            onReset={handleReset}
          />
        )}
      </main>
    </Layout>
  );
}

export default App;