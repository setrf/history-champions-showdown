
import React from 'react';
import { getGameResult } from '@/utils/gameLogic';
import { GameState } from '@/utils/gameLogic';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

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
        <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-primary text-white rounded-full shadow-md">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="font-medium">{getGameResult(gameState)}</span>
        </div>
      ) : (
        <div className={`inline-flex items-center px-4 py-2 ${
          isComputerThinking 
            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300" 
            : showingRoundResult 
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
              : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
        } rounded-full`}>
          {isComputerThinking ? (
            <Clock className="h-4 w-4 mr-2 animate-spin" />
          ) : showingRoundResult ? (
            <CheckCircle className="h-4 w-4 mr-2" />
          ) : (
            <AlertCircle className="h-4 w-4 mr-2" />
          )}
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
