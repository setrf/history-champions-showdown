
import React from 'react';
import LeaderCard from '../LeaderCard';
import { Leader } from '@/data/leaders';

interface GameCardsProps {
  playerCard: Leader | null;
  computerCard: Leader | null;
  isPlayerTurn: boolean;
  showingRoundResult: boolean;
  handleSelectStat: (stat: keyof Leader['stats']) => void;
  selectedStat: keyof Leader['stats'] | null;
  roundWinner: 'player' | 'computer' | 'tie' | null;
}

const GameCards: React.FC<GameCardsProps> = ({
  playerCard,
  computerCard,
  isPlayerTurn,
  showingRoundResult,
  handleSelectStat,
  selectedStat,
  roundWinner,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
      {/* Player card */}
      <div className="w-full max-w-xs">
        <p className="text-center font-medium mb-3 animate-slide-up">Your Card</p>
        {playerCard && (
          <LeaderCard 
            leader={playerCard} 
            isSelectable={isPlayerTurn && !showingRoundResult}
            onSelectStat={handleSelectStat}
            selectedStat={showingRoundResult ? selectedStat : null}
            isWinner={showingRoundResult && roundWinner === 'player'}
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
        {computerCard && (
          <LeaderCard 
            leader={computerCard} 
            isRevealed={showingRoundResult}
            selectedStat={showingRoundResult ? selectedStat : null}
            isWinner={showingRoundResult && roundWinner === 'computer'}
          />
        )}
      </div>
    </div>
  );
};

export default GameCards;
