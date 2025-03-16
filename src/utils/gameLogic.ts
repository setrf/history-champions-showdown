
import { Leader } from "../data/leaders";

export type GameState = {
  playerDeck: Leader[];
  computerDeck: Leader[];
  playerCard: Leader | null;
  computerCard: Leader | null;
  selectedStat: keyof Leader['stats'] | null;
  roundWinner: 'player' | 'computer' | 'tie' | null;
  gameOver: boolean;
  playerScore: number;
  computerScore: number;
  roundNumber: number;
  isPlayerTurn: boolean;
  message: string;
};

export function initializeGame(leaders: Leader[]): GameState {
  // Create a copy and shuffle the leaders array
  const shuffledLeaders = [...leaders].sort(() => Math.random() - 0.5);
  
  // Split the deck between player and computer
  const halfDeckSize = Math.ceil(shuffledLeaders.length / 2);
  const playerDeck = shuffledLeaders.slice(0, halfDeckSize);
  const computerDeck = shuffledLeaders.slice(halfDeckSize);
  
  // Start with the top card for each player
  const playerCard = playerDeck.shift() || null;
  const computerCard = computerDeck.shift() || null;
  
  return {
    playerDeck,
    computerDeck,
    playerCard,
    computerCard,
    selectedStat: null,
    roundWinner: null,
    gameOver: false,
    playerScore: 0,
    computerScore: 0,
    roundNumber: 1,
    isPlayerTurn: Math.random() > 0.5, // Randomly decide who goes first
    message: "Select a stat to play!",
  };
}

export function playRound(
  state: GameState,
  selectedStat: keyof Leader['stats']
): GameState {
  if (!state.playerCard || !state.computerCard || state.gameOver) {
    return state;
  }
  
  // Compare stats
  const playerValue = state.playerCard.stats[selectedStat];
  const computerValue = state.computerCard.stats[selectedStat];
  
  let roundWinner: 'player' | 'computer' | 'tie';
  let message = "";
  
  if (playerValue > computerValue) {
    roundWinner = 'player';
    message = `You win this round! Your ${selectedStat} value (${playerValue}) beats ${state.computerCard.name}'s value (${computerValue}).`;
  } else if (computerValue > playerValue) {
    roundWinner = 'computer';
    message = `Computer wins this round! Their ${selectedStat} value (${computerValue}) beats your value (${playerValue}).`;
  } else {
    roundWinner = 'tie';
    message = `It's a tie! Both have ${selectedStat} value of ${playerValue}.`;
  }
  
  // Update score
  const playerScore = roundWinner === 'player' ? state.playerScore + 1 : state.playerScore;
  const computerScore = roundWinner === 'computer' ? state.computerScore + 1 : state.computerScore;
  
  // Draw next cards
  const playerCard = state.playerDeck.shift() || null;
  const computerCard = state.computerDeck.shift() || null;
  
  // Check if game is over
  const gameOver = state.playerDeck.length === 0 || state.computerDeck.length === 0;
  
  // In this implementation, the winner of the round gets the next turn
  // For ties, we keep the same turn
  const isPlayerTurn = roundWinner === 'player' || (roundWinner === 'tie' && state.isPlayerTurn);
  
  return {
    ...state,
    playerCard,
    computerCard,
    selectedStat,
    roundWinner,
    gameOver,
    playerScore,
    computerScore,
    roundNumber: state.roundNumber + 1,
    isPlayerTurn,
    message,
  };
}

export function getComputerMove(
  card: Leader, 
  difficulty: string = 'normal'
): keyof Leader['stats'] {
  const stats = Object.entries(card.stats) as [keyof Leader['stats'], number][];
  
  if (difficulty === 'easy') {
    // In easy mode, randomly pick from the top 3 stats
    stats.sort((a, b) => b[1] - a[1]);
    const topThreeStats = stats.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * topThreeStats.length);
    return topThreeStats[randomIndex][0];
  } 
  else if (difficulty === 'hard') {
    // In hard mode, always pick the highest stat
    stats.sort((a, b) => b[1] - a[1]);
    return stats[0][0];
  } 
  else {
    // Normal mode - mix of strategy
    // 70% chance to pick from top 2 stats, 30% chance to pick randomly
    const randomChoice = Math.random();
    
    stats.sort((a, b) => b[1] - a[1]);
    
    if (randomChoice < 0.7) {
      // Pick from top 2 stats
      const topTwoStats = stats.slice(0, 2);
      const randomIndex = Math.floor(Math.random() * topTwoStats.length);
      return topTwoStats[randomIndex][0];
    } else {
      // Pick randomly
      const randomIndex = Math.floor(Math.random() * stats.length);
      return stats[randomIndex][0];
    }
  }
}

export function formatStatName(stat: string): string {
  return stat.charAt(0).toUpperCase() + stat.slice(1);
}

export function getGameResult(state: GameState): string {
  if (!state.gameOver) return "";
  
  if (state.playerScore > state.computerScore) {
    return "You win the game!";
  } else if (state.computerScore > state.playerScore) {
    return "Computer wins the game!";
  } else {
    return "The game ends in a tie!";
  }
}
