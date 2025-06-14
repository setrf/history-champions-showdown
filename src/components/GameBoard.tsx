
import React, { useState, useEffect } from 'react';
import { Leader } from '../data/leaders';
import {
  GameState,
  initializeGame,
  playRound,
  getComputerMove,
  getGameResult,
  buffStats,
} from '@/utils/gameLogic';
import { leaders } from '@/data/leaders';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all the new components
import GameStatus from './game/GameStatus';
import GameSettings from './game/GameSettings';
import GameMessage from './game/GameMessage';
import GameCards from './game/GameCards';
import GameControls from './game/GameControls';
import GameStatistics from './game/GameStatistics';
import GameLeaderboard from './game/GameLeaderboard';

interface GameBoardProps {
  onEraChange?: (era: string) => void;
}

export default function GameBoard({ onEraChange }: GameBoardProps) {
  const [gameState, setGameState] = useState<GameState>(initializeGame(leaders));
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [showingRoundResult, setShowingRoundResult] = useState(false);
  const [selectedEra, setSelectedEra] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("normal");
  const { toast } = useToast();

  // Get unique eras from leaders data
  const eras = ["all", ...Array.from(new Set(leaders.map(leader => leader.era)))];

  // Notify parent component when era changes
  useEffect(() => {
    if (onEraChange) {
      onEraChange(selectedEra);
    }
  }, [selectedEra, onEraChange]);

  // Start a new game with filtered leaders based on era
  const startNewGame = () => {
    let filteredLeaders = leaders;

    // Filter by era if not "all"
    if (selectedEra !== "all") {
      filteredLeaders = leaders.filter(leader => leader.era === selectedEra);
    }

    let newState = initializeGame(filteredLeaders);

    // Apply difficulty adjustments
    if (difficulty === "easy") {
      // In easy mode, only the player's leaders get a small stat boost
      newState = {
        ...newState,
        playerCard: newState.playerCard
          ? { ...newState.playerCard, stats: buffStats(newState.playerCard.stats) }
          : null,
        playerDeck: newState.playerDeck.map(l => ({
          ...l,
          stats: buffStats(l.stats),
        })),
      };
    } else if (difficulty === "hard") {
      // In hard mode, computer gets better AI strategy via getComputerMove
    }

    setGameState(newState);
    setShowingRoundResult(false);
    setIsComputerThinking(false);
  };

  // Handle computer's turn
  useEffect(() => {
    if (!gameState.isPlayerTurn && !gameState.gameOver && gameState.computerCard && !showingRoundResult) {
      setIsComputerThinking(true);
      
      // Simulate computer thinking
      const timer = setTimeout(() => {
        const computerMove = getComputerMove(gameState.computerCard as Leader, difficulty);
        setGameState(currentState => playRound(currentState, computerMove));
        setIsComputerThinking(false);
        setShowingRoundResult(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [gameState.isPlayerTurn, gameState.gameOver, gameState.computerCard, showingRoundResult, difficulty]);

  // Auto-progress to next round after showing result
  useEffect(() => {
    if (showingRoundResult && !gameState.gameOver) {
      const timer = setTimeout(() => {
        setShowingRoundResult(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showingRoundResult, gameState.gameOver]);

  // Show toast for round results
  useEffect(() => {
    if (gameState.roundWinner && showingRoundResult) {
      let title = "";
      const description = gameState.message;
      let variant: "default" | "destructive" = "default";
      
      if (gameState.roundWinner === 'player') {
        title = "You won the round!";
      } else if (gameState.roundWinner === 'computer') {
        title = "Computer won the round";
        variant = "destructive";
      } else {
        title = "It's a tie!";
      }
      
      toast({
        title,
        description,
        variant
      });
    }
  }, [gameState.roundWinner, showingRoundResult, gameState.message, toast]);

  // Show toast for game over
  useEffect(() => {
    if (gameState.gameOver) {
      const result = getGameResult(gameState);
      
      toast({
        title: "Game Over",
        description: result,
        variant: result.includes("You win") ? "default" : "destructive"
      });
    }
  }, [gameState.gameOver, toast]);

  const handleSelectStat = (stat: keyof Leader['stats']) => {
    if (gameState.isPlayerTurn && !showingRoundResult) {
      setGameState(currentState => playRound(currentState, stat));
      setShowingRoundResult(true);
    }
  };

  const handleRestart = () => {
    startNewGame();
  };

  // Handle era selection change
  const handleEraChange = (era: string) => {
    setSelectedEra(era);
  };

  return (
    <div className="game-container py-8">
      {/* Game settings */}
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '50ms' }}>
        <Tabs defaultValue="play" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="play">Play Game</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          <TabsContent value="play">
            {/* Game status and score */}
            <GameStatus 
              roundNumber={gameState.roundNumber}
              playerScore={gameState.playerScore}
              computerScore={gameState.computerScore}
              playerDeckLength={gameState.playerDeck.length}
            />
          </TabsContent>
          <TabsContent value="settings">
            <GameSettings 
              selectedEra={selectedEra}
              setSelectedEra={handleEraChange}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              onRestart={handleRestart}
              eras={eras}
            />
          </TabsContent>
          <TabsContent value="leaderboard">
            <GameLeaderboard 
              currentPlayerScore={gameState.playerScore}
              roundsPlayed={gameState.roundNumber - 1}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Game message */}
      <GameMessage 
        gameOver={gameState.gameOver}
        gameState={gameState}
        isComputerThinking={isComputerThinking}
        showingRoundResult={showingRoundResult}
        message={gameState.message}
        isPlayerTurn={gameState.isPlayerTurn}
      />
      
      {/* Game cards */}
      <GameCards 
        playerCard={gameState.playerCard}
        computerCard={gameState.computerCard}
        isPlayerTurn={gameState.isPlayerTurn}
        showingRoundResult={showingRoundResult}
        handleSelectStat={handleSelectStat}
        selectedStat={gameState.selectedStat}
        roundWinner={gameState.roundWinner}
      />
      
      {/* Game controls */}
      <GameControls onRestart={handleRestart} />
      
      {/* Game statistics */}
      {gameState.gameOver && (
        <div className="space-y-8">
          <GameStatistics 
            roundNumber={gameState.roundNumber}
            playerScore={gameState.playerScore}
          />
          <GameLeaderboard 
            currentPlayerScore={gameState.playerScore}
            roundsPlayed={gameState.roundNumber - 1}
          />
        </div>
      )}
    </div>
  );
}
