
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface GameControlsProps {
  onRestart: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onRestart }) => {
  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={onRestart}
        variant="secondary"
        size="lg"
        className="flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Restart Game
      </Button>
    </div>
  );
};

export default GameControls;
