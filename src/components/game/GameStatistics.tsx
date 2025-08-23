import React from "react";

interface GameStatisticsProps {
  roundNumber: number;
  playerScore: number;
}

const GameStatistics: React.FC<GameStatisticsProps> = ({ roundNumber, playerScore }) => {
  const totalRounds = roundNumber - 1;
  const winRatio = totalRounds > 0 ? Math.round((playerScore / totalRounds) * 100) : 0;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4">Game Statistics</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="border border-border p-4">
          <p className="text-muted-foreground">Total Rounds</p>
          <p className="text-xl font-bold">{totalRounds}</p>
        </div>
        <div className="border border-border p-4">
          <p className="text-muted-foreground">Win Ratio</p>
          <p className="text-xl font-bold">{winRatio}%</p>
        </div>
      </div>
    </div>
  );
};

export default GameStatistics;
