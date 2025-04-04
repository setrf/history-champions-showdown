
import React, { useState } from 'react';
import { Leader } from '../data/leaders';
import { cn } from '@/lib/utils';

// Import our components
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

  // Function to get era-specific border color
  const getEraBorderColor = () => {
    if (!isRevealed) return "border-gray-400/20";
    
    switch(leader.era.toLowerCase()) {
      case "ancient": return "border-era-ancient/60";
      case "medieval": return "border-era-medieval/60";
      case "renaissance": return "border-era-renaissance/60";
      case "enlightenment": return "border-era-enlightenment/60";
      case "modern": return "border-era-modern/60";
      default: return "border-primary/40";
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full max-w-xs overflow-hidden transition-all duration-500",
        isWinner ? "scale-105" : "hover:scale-[1.02]",
        isWinner && "shadow-xl",
        isPlayerCard ? "animate-slide-up" : "animate-scale-in",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
      style={{animationDelay: isPlayerCard ? '0ms' : '200ms'}}
    >
      <div className={cn(
        "rounded-2xl overflow-hidden bg-card dark:bg-gray-900/90",
        "shadow-lg backdrop-blur-sm",
        "border-2",
        getEraBorderColor(),
        isWinner && "ring-2 ring-yellow-500/70 shadow-lg shadow-yellow-500/10"
      )}>
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
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{leader.bio}</p>
              
              <LeaderStats 
                leader={leader} 
                isSelectable={isSelectable} 
                selectedStat={selectedStat}
                onSelectStat={onSelectStat}
              />
            </>
          ) : (
            <div className="h-48 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/5 dark:bg-gray-800/50 flex items-center justify-center">
                <span className="text-gray-400 font-cinzel">?</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Card footer */}
        <LeaderFooter years={leader.years} />
      </div>
    </div>
  );
}
