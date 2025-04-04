
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

// Helper to get color based on stat value
const getStatValueColor = (value: number) => {
  if (value >= 90) return "text-green-600 dark:text-green-500";
  if (value >= 75) return "text-green-500 dark:text-green-400";
  if (value >= 60) return "text-lime-600 dark:text-lime-500";
  if (value >= 50) return "text-yellow-600 dark:text-yellow-500";
  if (value >= 40) return "text-amber-600 dark:text-amber-500";
  if (value >= 30) return "text-orange-600 dark:text-orange-500";
  return "text-red-600 dark:text-red-500";
};

// Helper to get background color based on stat
const getStatBgColor = (stat: string) => {
  switch(stat) {
    case 'military': return "bg-leadership-military/10";
    case 'diplomacy': return "bg-leadership-diplomatic/10";
    case 'culture': return "bg-leadership-cultural/10";
    case 'economy': return "bg-leadership-economic/10";
    case 'science': return "bg-leadership-scientific/10";
    default: return "bg-primary/10";
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
        const valueColor = getStatValueColor(value);
        const bgColor = getStatBgColor(stat);
        
        return (
          <div 
            key={stat}
            className={cn(
              "flex items-center justify-between p-2 rounded-lg transition-all duration-300 cursor-default",
              isSelectable && "hover:bg-accent dark:hover:bg-gray-800/70 cursor-pointer",
              isSelected && `${bgColor} ring-1 ring-primary/30`,
              `animate-fade-in-up animate-delay-${(index + 1) * 100}`
            )}
            onClick={() => {
              if (isSelectable && onSelectStat) {
                onSelectStat(statKey);
              }
            }}
          >
            <div className="flex items-center">
              <div className="p-1.5 rounded-full bg-card shadow-sm mr-2">
                {getStatIcon(stat)}
              </div>
              <span className="text-sm font-medium">
                {formatStatName(stat)}
              </span>
            </div>
            <span className={cn(
              "font-bold",
              valueColor
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
