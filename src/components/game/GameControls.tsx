
import React from 'react';
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
        <button
          onClick={onRestart}
          className="flex items-center gap-2 h-12 px-5 rounded-lg border border-border text-foreground/80 hover:text-foreground hover:bg-background/80 active:bg-foreground/5"
        >
          <RefreshCw className="w-4 h-4" />
          Restart Game
        </button>
      ) : (
        <button
          onClick={onStart}
          className="flex items-center gap-2 h-12 px-5 rounded-lg bg-accent text-accent-foreground/80 hover:text-accent-foreground hover:bg-accent/90 active:bg-accent/80"
        >
          <Play className="w-4 h-4" />
          Start Game
        </button>
      )}
    </div>
  );
};

export default GameControls;
