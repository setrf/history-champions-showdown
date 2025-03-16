
import React, { useState, useEffect } from 'react';
import { Leader } from '../data/leaders';
import LeaderCard from './LeaderCard';
import { Button } from '@/components/ui/button';
import { 
  GameState, 
  initializeGame, 
  playRound, 
  getComputerMove,
  getGameResult
} from '@/utils/gameLogic';
import { leaders } from '@/data/leaders';
import { Coins, Flag, RefreshCw, Trophy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(initializeGame(leaders));
  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const [showingRoundResult, setShowingRoundResult] = useState(false);
  const { toast } = useToast();

  // Handle computer's turn
  useEffect(() => {
    if (!gameState.isPlayerTurn && !gameState.gameOver && gameState.computerCard && !showingRoundResult) {
      setIsComputerThinking(true);
      
      // Simulate computer thinking
      const timer = setTimeout(() => {
        const computerMove = getComputerMove(gameState.computerCard as Leader);
        setGameState(currentState => playRound(currentState, computerMove));
        setIsComputerThinking(false);
        setShowingRoundResult(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [gameState.isPlayerTurn, gameState.gameOver, gameState.computerCard, showingRoundResult]);

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
    setGameState(initializeGame(leaders));
    setShowingRoundResult(false);
    setIsComputerThinking(false);
  };

  return (
    <div className="game-container py-8">
      {/* Game status and score */}
      <div className="flex justify-between items-center mb-8 animate-slide-up">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Flag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Round</h3>
            <p className="text-2xl font-bold">{gameState.roundNumber}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Your Score</p>
            <div className="flex items-center justify-center mt-1">
              <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-xl font-bold">{gameState.playerScore}</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Computer</p>
            <div className="flex items-center justify-center mt-1">
              <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-xl font-bold">{gameState.computerScore}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
            <Coins className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="font-medium">Cards Left</h3>
            <p className="text-2xl font-bold">{gameState.playerDeck.length}</p>
          </div>
        </div>
      </div>
      
      {/* Game instructions */}
      <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
        {gameState.gameOver ? (
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="font-medium">{getGameResult(gameState)}</span>
          </div>
        ) : (
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="font-medium">
              {isComputerThinking 
                ? "Computer is thinking..." 
                : showingRoundResult 
                  ? gameState.message 
                  : gameState.isPlayerTurn 
                    ? "Your turn: Select a stat to compare" 
                    : "Computer's turn"}
            </span>
          </div>
        )}
      </div>
      
      {/* Cards container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        {/* Player card */}
        <div className="w-full max-w-xs">
          <p className="text-center font-medium mb-3 animate-slide-up">Your Card</p>
          {gameState.playerCard && (
            <LeaderCard 
              leader={gameState.playerCard} 
              isSelectable={gameState.isPlayerTurn && !showingRoundResult}
              onSelectStat={handleSelectStat}
              selectedStat={showingRoundResult ? gameState.selectedStat : null}
              isWinner={showingRoundResult && gameState.roundWinner === 'player'}
              isPlayerCard={true}
            />
          )}
        </div>
        
        {/* VS indicator */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center animate-pulse animate-scale-in" style={{ animationDelay: '300ms' }}>
            <span className="text-xl font-bold">VS</span>
          </div>
        </div>
        
        {/* Computer card */}
        <div className="w-full max-w-xs">
          <p className="text-center font-medium mb-3 animate-slide-up" style={{ animationDelay: '200ms' }}>Computer's Card</p>
          {gameState.computerCard && (
            <LeaderCard 
              leader={gameState.computerCard} 
              isRevealed={showingRoundResult}
              selectedStat={showingRoundResult ? gameState.selectedStat : null}
              isWinner={showingRoundResult && gameState.roundWinner === 'computer'}
            />
          )}
        </div>
      </div>
      
      {/* Game controls */}
      <div className="flex justify-center mt-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <Button 
          onClick={handleRestart}
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Restart Game
        </Button>
      </div>
    </div>
  );
}
