import React from "react";
import { getGameResult, GameState } from "@/utils/gameLogic";

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
        <div className="inline-block px-4 py-2 border border-border">
          <span className="text-sm font-medium">{getGameResult(gameState)}</span>
        </div>
      ) : (
        <div className="inline-block px-4 py-2 border border-border">
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
