
import React from 'react';
import { Button } from '@/components/ui/button';

interface GameControlsProps {
  onRestart: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onRestart }) => {
  return (
    <div className="flex justify-center mt-8">
      <Button onClick={onRestart} variant="outline" size="lg">
        Restart Game
      </Button>
    </div>
  );
};

export default GameControls;
