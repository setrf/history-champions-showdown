
import React from 'react';

interface GameStatisticsProps {
  roundNumber: number;
  playerScore: number;
}

const GameStatistics: React.FC<GameStatisticsProps> = ({
  roundNumber,
  playerScore,
}) => {
  return (
    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/20 rounded-lg animate-scale-in">
      <h3 className="text-lg font-medium mb-3 text-center">Game Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h4 className="font-medium text-sm text-muted-foreground">Total Rounds</h4>
          <p className="text-2xl font-bold">{roundNumber - 1}</p>
        </div>
        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h4 className="font-medium text-sm text-muted-foreground">Win Ratio</h4>
          <p className="text-2xl font-bold">
            {playerScore > 0 
              ? Math.round((playerScore / (roundNumber - 1)) * 100) 
              : 0}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
