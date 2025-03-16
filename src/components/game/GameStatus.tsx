
import React from 'react';
import { Flag, Coins, Trophy } from 'lucide-react';

interface GameStatusProps {
  roundNumber: number;
  playerScore: number;
  computerScore: number;
  playerDeckLength: number;
}

const GameStatus: React.FC<GameStatusProps> = ({
  roundNumber,
  playerScore,
  computerScore,
  playerDeckLength,
}) => {
  return (
    <div className="flex justify-between items-center mb-8 animate-slide-up">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <Flag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-medium">Round</h3>
          <p className="text-2xl font-bold">{roundNumber}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Your Score</p>
          <div className="flex items-center justify-center mt-1">
            <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-xl font-bold">{playerScore}</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Computer</p>
          <div className="flex items-center justify-center mt-1">
            <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-xl font-bold">{computerScore}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
          <Coins className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h3 className="font-medium">Cards Left</h3>
          <p className="text-2xl font-bold">{playerDeckLength}</p>
        </div>
      </div>
    </div>
  );
};

export default GameStatus;
