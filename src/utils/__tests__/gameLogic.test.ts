import { describe, it, expect } from 'vitest';
import { initializeGame, playRound, getGameResult, GameState } from '../gameLogic';
import { Leader } from '../../data/types/leader';

const leaderA: Leader = {
  id: 1,
  name: 'Leader A',
  era: 'Test',
  country: 'A',
  years: '',
  image: '',
  bio: '',
  stats: { military: 5, diplomacy: 5, culture: 5, economy: 5, science: 5 }
};

const leaderB: Leader = {
  id: 2,
  name: 'Leader B',
  era: 'Test',
  country: 'B',
  years: '',
  image: '',
  bio: '',
  stats: { military: 3, diplomacy: 3, culture: 3, economy: 3, science: 3 }
};

const leaderC: Leader = {
  id: 3,
  name: 'Leader C',
  era: 'Test',
  country: 'C',
  years: '',
  image: '',
  bio: '',
  stats: { military: 2, diplomacy: 2, culture: 2, economy: 2, science: 2 }
};

const leaderD: Leader = {
  id: 4,
  name: 'Leader D',
  era: 'Test',
  country: 'D',
  years: '',
  image: '',
  bio: '',
  stats: { military: 1, diplomacy: 1, culture: 1, economy: 1, science: 1 }
};

describe('initializeGame', () => {
  it('returns initial game state with correct defaults', () => {
    const state = initializeGame([leaderA, leaderB]);
    expect(state.roundNumber).toBe(1);
    expect(state.playerScore).toBe(0);
    expect(state.computerScore).toBe(0);
    expect(state.gameOver).toBe(false);
    expect(state.message).toBe('Select a stat to play!');
    expect(typeof state.isPlayerTurn).toBe('boolean');

    const totalCards =
      state.playerDeck.length +
      state.computerDeck.length +
      (state.playerCard ? 1 : 0) +
      (state.computerCard ? 1 : 0);
    expect(totalCards).toBe(2);
  });
});

describe('playRound', () => {
  it('updates state when player wins the round', () => {
    const baseState: GameState = {
      playerDeck: [leaderC],
      computerDeck: [leaderD],
      playerCard: leaderA,
      computerCard: leaderB,
      selectedStat: null,
      roundWinner: null,
      gameOver: false,
      playerScore: 0,
      computerScore: 0,
      roundNumber: 1,
      isPlayerTurn: true,
      message: ''
    };

    const result = playRound(baseState, 'military');

    expect(result.roundWinner).toBe('player');
    expect(result.playerScore).toBe(1);
    expect(result.computerScore).toBe(0);
    expect(result.playerCard).toEqual(leaderC);
    expect(result.computerCard).toEqual(leaderD);
    expect(result.roundNumber).toBe(2);
    expect(result.isPlayerTurn).toBe(true);
  });
});

describe('getGameResult', () => {
  it('returns empty string if game is not over', () => {
    const state: GameState = {
      playerDeck: [],
      computerDeck: [],
      playerCard: null,
      computerCard: null,
      selectedStat: null,
      roundWinner: null,
      gameOver: false,
      playerScore: 0,
      computerScore: 0,
      roundNumber: 1,
      isPlayerTurn: true,
      message: ''
    };
    expect(getGameResult(state)).toBe('');
  });

  it('returns win message when player score is higher', () => {
    const state: GameState = {
      playerDeck: [],
      computerDeck: [],
      playerCard: null,
      computerCard: null,
      selectedStat: null,
      roundWinner: null,
      gameOver: true,
      playerScore: 2,
      computerScore: 1,
      roundNumber: 1,
      isPlayerTurn: true,
      message: ''
    };
    expect(getGameResult(state)).toBe('You win the game!');
  });

  it('returns tie message when scores are equal', () => {
    const state: GameState = {
      playerDeck: [],
      computerDeck: [],
      playerCard: null,
      computerCard: null,
      selectedStat: null,
      roundWinner: null,
      gameOver: true,
      playerScore: 1,
      computerScore: 1,
      roundNumber: 1,
      isPlayerTurn: true,
      message: ''
    };
    expect(getGameResult(state)).toBe('The game ends in a tie!');
  });
});
