
import React, { useState } from 'react';
import { Leader } from '../data/leaders';
import { cn } from '@/lib/utils';

// Import our new components
import LeaderHeader from './leader/LeaderHeader';
import LeaderStats from './leader/LeaderStats';
import LeaderFooter from './leader/LeaderFooter';
import LeaderWinnerBadge from './leader/LeaderWinnerBadge';

interface LeaderCardProps {
  leader: Leader;
  isSelectable?: boolean;
  isRevealed?: boolean;
  selectedStat?: keyof Leader['stats'] | null;
  onSelectStat?: (stat: keyof Leader['stats']) => void;
  isWinner?: boolean;
  isPlayerCard?: boolean;
}

export default function LeaderCard({
  leader,
  isSelectable = false,
  isRevealed = true,
  selectedStat = null,
  onSelectStat,
  isWinner = false,
  isPlayerCard = false
}: LeaderCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={cn(
        "relative w-full max-w-xs rounded-2xl overflow-hidden transition-all duration-500 bg-white dark:bg-gray-900",
        "border shadow-card transform",
        isWinner && "ring-4 ring-yellow-400 shadow-lg shadow-yellow-300/20 animate-float",
        isPlayerCard ? "animate-slide-up" : "animate-scale-in",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
      style={{animationDelay: isPlayerCard ? '0ms' : '200ms'}}
    >
      {isWinner && <LeaderWinnerBadge />}
      
      {/* Card header */}
      <LeaderHeader 
        leader={leader} 
        isRevealed={isRevealed} 
        onLoadComplete={handleImageLoaded} 
      />
      
      {/* Card body */}
      <div className="p-4">
        {isRevealed ? (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{leader.bio}</p>
            
            <LeaderStats 
              leader={leader} 
              isSelectable={isSelectable} 
              selectedStat={selectedStat}
              onSelectStat={onSelectStat}
            />
          </>
        ) : (
          <div className="h-48 flex items-center justify-center">
            <span className="text-gray-400">Card hidden</span>
          </div>
        )}
      </div>
      
      {/* Card footer */}
      <LeaderFooter years={leader.years} />
    </div>
  );
}
