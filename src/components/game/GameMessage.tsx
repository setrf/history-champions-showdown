import React from "react";
import { getGameResult, GameState } from "@/utils/gameLogic";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

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
    <div className="text-center mb-8">
      {gameOver ? (
        <div className="inline-flex items-center px-4 py-2 border border-border">
          <CheckCircle className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{getGameResult(gameState)}</span>
        </div>
      ) : (
        <div className="inline-flex items-center px-4 py-2 border border-border">
          {isComputerThinking ? (
            <Clock className="h-4 w-4 mr-2" />
          ) : showingRoundResult ? (
            <CheckCircle className="h-4 w-4 mr-2" />
          ) : (
            <AlertCircle className="h-4 w-4 mr-2" />
          )}
          <span className="text-sm font-medium">
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
