
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Play } from 'lucide-react';

interface GameControlsProps {
  gameStarted: boolean;
  onStart: () => void;
  onRestart: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameStarted,
  onStart,
  onRestart,
}) => {
  return (
    <div className="flex justify-center mt-8">
      {gameStarted ? (
        <Button
          onClick={onRestart}
          variant="secondary"
          size="lg"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Restart Game
        </Button>
      ) : (
        <Button
          onClick={onStart}
          size="lg"
          className="flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          Start Game
        </Button>
      )}
    </div>
  );
};

export default GameControls;
