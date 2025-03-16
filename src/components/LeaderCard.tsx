
import React, { useState } from 'react';
import { Leader } from '../data/leaders';
import { cn } from '@/lib/utils';
import { formatStatName } from '@/utils/gameLogic';
import { 
  Sword, 
  HandshakeIcon, 
  PaletteIcon, 
  TrendingUpIcon, 
  FlaskConicalIcon,
  Trophy,
  History
} from 'lucide-react';

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

  const getStatIcon = (stat: string) => {
    switch(stat) {
      case 'military': return <Sword className="w-4 h-4 text-leadership-military" />;
      case 'diplomacy': return <HandshakeIcon className="w-4 h-4 text-leadership-diplomatic" />;
      case 'culture': return <PaletteIcon className="w-4 h-4 text-leadership-cultural" />;
      case 'economy': return <TrendingUpIcon className="w-4 h-4 text-leadership-economic" />;
      case 'science': return <FlaskConicalIcon className="w-4 h-4 text-leadership-scientific" />;
      default: return null;
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full max-w-xs rounded-2xl overflow-hidden transition-all duration-500 bg-white dark:bg-gray-900",
        "border shadow-card transform",
        isWinner && "ring-4 ring-yellow-400 shadow-lg shadow-yellow-300/20",
        isPlayerCard ? "animate-slide-up" : "animate-scale-in",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
      style={{animationDelay: isPlayerCard ? '0ms' : '200ms'}}
    >
      {isWinner && (
        <div className="absolute top-3 right-3 z-10">
          <div className="relative p-2 bg-yellow-400 rounded-full animate-ping-slow">
            <Trophy className="w-5 h-5 text-yellow-900" />
          </div>
        </div>
      )}
      
      {/* Card header */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-b from-gray-800 to-black">
        {isRevealed ? (
          <>
            <img 
              src={leader.image} 
              alt={leader.name}
              className={cn(
                "w-full h-full object-cover object-center transition-opacity duration-700",
                "opacity-70 scale-105"
              )}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white z-10">
              <h3 className="text-2xl font-bold">{leader.name}</h3>
              <div className="flex items-center mt-1 text-gray-300">
                <History className="w-4 h-4 mr-1" />
                <span className="text-sm">{leader.era} • {leader.country}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-gray-500 text-xl">?</span>
          </div>
        )}
      </div>
      
      {/* Card body */}
      <div className="p-4">
        {isRevealed ? (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{leader.bio}</p>
            
            <div className="space-y-3">
              {Object.entries(leader.stats).map(([stat, value], index) => {
                const statKey = stat as keyof Leader['stats'];
                const isSelected = selectedStat === statKey;
                
                return (
                  <div 
                    key={stat}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg transition-all duration-300 cursor-default",
                      isSelectable && "hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer",
                      isSelected && "bg-gray-100 dark:bg-gray-800 ring-2 ring-primary",
                      `animate-fade-in-up animate-delay-${(index + 1) * 100}`
                    )}
                    onClick={() => {
                      if (isSelectable && onSelectStat) {
                        onSelectStat(statKey);
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {getStatIcon(stat)}
                      <span className="ml-2 text-sm font-medium">
                        {formatStatName(stat)}
                      </span>
                    </div>
                    <span className={cn(
                      "font-bold",
                      value > 90 ? "text-green-600 dark:text-green-400" : 
                      value < 40 ? "text-red-600 dark:text-red-400" : 
                      "text-gray-900 dark:text-gray-100"
                    )}>
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="h-48 flex items-center justify-center">
            <span className="text-gray-400">Card hidden</span>
          </div>
        )}
      </div>
      
      {/* Card footer */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400">
        {leader.years}
      </div>
    </div>
  );
}
