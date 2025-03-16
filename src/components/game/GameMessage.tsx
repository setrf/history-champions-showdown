
import React from 'react';
import { getGameResult } from '@/utils/gameLogic';
import { GameState } from '@/utils/gameLogic';

interface GameMessageProps {
  gameOver: boolean;
  gameState: GameState;
  isComputerThinking: boolean;
  showingRoundResult: boolean;
  message: string;
  isPlayerTurn: boolean;
}

const GameMessage: React.FC<GameMessageProps> = ({
  gameOver,
  gameState,
  isComputerThinking,
  showingRoundResult,
  message,
  isPlayerTurn,
}) => {
  return (
    <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
      {gameOver ? (
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <span className="font-medium">{getGameResult(gameState)}</span>
        </div>
      ) : (
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <span className="font-medium">
            {isComputerThinking 
              ? "Computer is thinking..." 
              : showingRoundResult 
                ? message 
                : isPlayerTurn 
                  ? "Your turn: Select a stat to compare" 
                  : "Computer's turn"}
          </span>
        </div>
      )}
    </div>
  );
};

export default GameMessage;
