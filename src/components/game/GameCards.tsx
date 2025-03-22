
import React from 'react';
import LeaderCard from '../LeaderCard';
import { Leader } from '@/data/leaders';
import { Swords } from 'lucide-react';

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
      <div className={`w-full max-w-xs ${showingRoundResult && roundWinner === 'player' ? 'animate-winner-bounce' : ''}`}>
        <p className="text-center font-medium font-cinzel mb-3 animate-slide-up flex items-center justify-center gap-1">
          <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-1">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </span>
          Your Card
        </p>
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
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center animate-pulse animate-scale-in shadow-lg" style={{ animationDelay: '300ms' }}>
          <Swords className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {/* Computer card */}
      <div className={`w-full max-w-xs ${showingRoundResult && roundWinner === 'computer' ? 'animate-winner-bounce' : ''}`}>
        <p className="text-center font-medium font-cinzel mb-3 animate-slide-up flex items-center justify-center gap-1" style={{ animationDelay: '200ms' }}>
          <span className="inline-flex items-center justify-center p-1 bg-red-100 dark:bg-red-900/30 rounded-full mr-1">
            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </span>
          Computer's Card
        </p>
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
