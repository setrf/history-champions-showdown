import React from "react";

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
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-sm">Round</h3>
        <p className="text-2xl font-bold">{roundNumber}</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <p className="text-sm">Your Score</p>
          <p className="text-xl font-bold">{playerScore}</p>
        </div>
        <div className="text-center">
          <p className="text-sm">Computer</p>
          <p className="text-xl font-bold">{computerScore}</p>
        </div>
      </div>
      <div className="text-right">
        <h3 className="text-sm">Cards Left</h3>
        <p className="text-2xl font-bold">{playerDeckLength}</p>
      </div>
    </div>
  );
};

export default GameStatus;
