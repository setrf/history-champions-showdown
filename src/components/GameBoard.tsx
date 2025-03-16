
import React, { useState, useEffect } from 'react';
import { Leader } from '../data/leaders';
import { 
  GameState, 
  initializeGame, 
  playRound, 
  getComputerMove
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

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(initializeGame(leaders));
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [showingRoundResult, setShowingRoundResult] = useState(false);
  const [selectedEra, setSelectedEra] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("normal");
  const { toast } = useToast();

  // Get unique eras from leaders data
  const eras = ["all", ...Array.from(new Set(leaders.map(leader => leader.era)))];

  // Start a new game with filtered leaders based on era
  const startNewGame = () => {
    let filteredLeaders = leaders;
    
    // Filter by era if not "all"
    if (selectedEra !== "all") {
      filteredLeaders = leaders.filter(leader => leader.era === selectedEra);
    }
    
    // Apply difficulty adjustments
    if (difficulty === "easy") {
      // In easy mode, player gets leaders with higher stats
      filteredLeaders = filteredLeaders.map(leader => ({
        ...leader,
        stats: {
          military: Math.min(100, Math.floor(leader.stats.military * 1.1)),
          diplomacy: Math.min(100, Math.floor(leader.stats.diplomacy * 1.1)),
          culture: Math.min(100, Math.floor(leader.stats.culture * 1.1)),
          economy: Math.min(100, Math.floor(leader.stats.economy * 1.1)),
          science: Math.min(100, Math.floor(leader.stats.science * 1.1)),
        }
      }));
    } else if (difficulty === "hard") {
      // In hard mode, computer gets better AI strategy
      // The actual implementation is in the getComputerMove function with difficulty param
    }
    
    setGameState(initializeGame(filteredLeaders));
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
      let description = gameState.message;
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

  return (
    <div className="game-container py-8">
      {/* Game settings */}
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '50ms' }}>
        <Tabs defaultValue="play" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="play">Play Game</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
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
              setSelectedEra={setSelectedEra}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              onRestart={handleRestart}
              eras={eras}
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
        <GameStatistics 
          roundNumber={gameState.roundNumber}
          playerScore={gameState.playerScore}
        />
      )}
    </div>
  );
}
