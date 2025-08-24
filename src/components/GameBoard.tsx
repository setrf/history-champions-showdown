import React, { useState, useEffect } from 'react';
import { leaders, Leader } from '@/data/leaders';
import {
  GameState,
  initializeGame,
  playRound,
  getComputerMove,
} from '@/utils/gameLogic';
import GameStatus from './game/GameStatus';
import GameMessage from './game/GameMessage';
import GameCards from './game/GameCards';
import GameControls from './game/GameControls';

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [phase, setPhase] = useState<
    'idle' | 'player-turn' | 'computer-thinking' | 'round-result'
  >('idle');

  useEffect(() => {
    if (
      phase === 'computer-thinking' &&
      gameState &&
      !gameState.gameOver &&
      gameState.computerCard
    ) {
      const timer = setTimeout(() => {
        const move = getComputerMove(gameState.computerCard as Leader);
        setGameState((current) =>
          current ? playRound(current, move) : current
        );
        setPhase('round-result');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase, gameState]);

  useEffect(() => {
    if (phase === 'round-result' && gameState && !gameState.gameOver) {
      const timer = setTimeout(() => {
        setPhase(gameState.isPlayerTurn ? 'player-turn' : 'computer-thinking');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, gameState]);

  const handleSelectStat = (stat: keyof Leader['stats']) => {
    if (phase === 'player-turn' && gameState) {
      setGameState((current) =>
        current ? playRound(current, stat) : current
      );
      setPhase('round-result');
    }
  };

  const startNewGame = () => {
    const newGame = initializeGame(leaders);
    setGameState(newGame);
    setPhase(newGame.isPlayerTurn ? 'player-turn' : 'computer-thinking');
  };

  return (
    <div className="space-y-8">
      {gameState ? (
        <>
          <GameStatus
            roundNumber={gameState.roundNumber}
            playerScore={gameState.playerScore}
            computerScore={gameState.computerScore}
            playerDeckLength={gameState.playerDeck.length}
          />
          <GameMessage
            gameOver={gameState.gameOver}
            gameState={gameState}
            isComputerThinking={phase === 'computer-thinking'}
            showingRoundResult={phase === 'round-result'}
            message={gameState.message}
            isPlayerTurn={phase === 'player-turn'}
          />
          <GameCards
            playerCard={gameState.playerCard}
            computerCard={gameState.computerCard}
            isPlayerTurn={phase === 'player-turn'}
            showingRoundResult={phase === 'round-result'}
            handleSelectStat={handleSelectStat}
            selectedStat={gameState.selectedStat}
          />
          <GameControls
            gameStarted={true}
            onStart={startNewGame}
            onRestart={startNewGame}
          />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <p className="mb-4">Click start to begin the game</p>
          <GameControls
            gameStarted={false}
            onStart={startNewGame}
            onRestart={startNewGame}
          />
        </div>
      )}
    </div>
  );
}
