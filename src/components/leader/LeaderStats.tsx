
import React from 'react';
import { Leader } from '@/data/leaders';
import { cn } from '@/lib/utils';
import { formatStatName } from '@/utils/gameLogic';
import { 
  Sword, 
  HandshakeIcon, 
  PaletteIcon, 
  TrendingUpIcon, 
  FlaskConicalIcon
} from 'lucide-react';

interface LeaderStatsProps {
  leader: Leader;
  isSelectable?: boolean;
  selectedStat?: keyof Leader['stats'] | null;
  onSelectStat?: (stat: keyof Leader['stats']) => void;
}

export const getStatIcon = (stat: string) => {
  switch(stat) {
    case 'military': return <Sword className="w-4 h-4 text-leadership-military" />;
    case 'diplomacy': return <HandshakeIcon className="w-4 h-4 text-leadership-diplomatic" />;
    case 'culture': return <PaletteIcon className="w-4 h-4 text-leadership-cultural" />;
    case 'economy': return <TrendingUpIcon className="w-4 h-4 text-leadership-economic" />;
    case 'science': return <FlaskConicalIcon className="w-4 h-4 text-leadership-scientific" />;
    default: return null;
  }
};

const LeaderStats: React.FC<LeaderStatsProps> = ({
  leader,
  isSelectable = false,
  selectedStat = null,
  onSelectStat
}) => {
  return (
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
  );
};

export default LeaderStats;
