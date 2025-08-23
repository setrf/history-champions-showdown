import React, { useState, useEffect } from 'react';
import { Leader } from '../data/leaders';
import { GameState, initializeGame, playRound, getComputerMove } from '@/utils/gameLogic';
import { leaders } from '@/data/leaders';

import GameStatus from './game/GameStatus';
import GameMessage from './game/GameMessage';
import GameCards from './game/GameCards';
import GameControls from './game/GameControls';

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(initializeGame(leaders));
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [showingRoundResult, setShowingRoundResult] = useState(false);

  const startNewGame = () => {
    setGameState(initializeGame(leaders));
    setShowingRoundResult(false);
    setIsComputerThinking(false);
  };

  useEffect(() => {
    if (
      !gameState.isPlayerTurn &&
      !gameState.gameOver &&
      gameState.computerCard &&
      !showingRoundResult
    ) {
      setIsComputerThinking(true);
      const timer = setTimeout(() => {
        const move = getComputerMove(gameState.computerCard as Leader, 'normal');
        setGameState(current => playRound(current, move));
        setIsComputerThinking(false);
        setShowingRoundResult(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState.isPlayerTurn, gameState.gameOver, gameState.computerCard, showingRoundResult]);

  useEffect(() => {
    if (showingRoundResult && !gameState.gameOver) {
      const timer = setTimeout(() => setShowingRoundResult(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showingRoundResult, gameState.gameOver]);

  const handleSelectStat = (stat: keyof Leader['stats']) => {
    if (gameState.isPlayerTurn && !showingRoundResult) {
      setGameState(current => playRound(current, stat));
      setShowingRoundResult(true);
    }
  };

  const handleRestart = () => startNewGame();

  return (
    <div className="game-container py-8">
      <GameStatus
        roundNumber={gameState.roundNumber}
        playerScore={gameState.playerScore}
        computerScore={gameState.computerScore}
        playerDeckLength={gameState.playerDeck.length}
      />
      <GameMessage
        gameOver={gameState.gameOver}
        gameState={gameState}
        isComputerThinking={isComputerThinking}
        showingRoundResult={showingRoundResult}
        message={gameState.message}
        isPlayerTurn={gameState.isPlayerTurn}
      />
      <GameCards
        playerCard={gameState.playerCard}
        computerCard={gameState.computerCard}
        isPlayerTurn={gameState.isPlayerTurn}
        showingRoundResult={showingRoundResult}
        handleSelectStat={handleSelectStat}
        selectedStat={gameState.selectedStat}
      />
      <GameControls onRestart={handleRestart} />
    </div>
  );
}

