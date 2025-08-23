import React from "react";
import { Leader } from "@/data/leaders";
import { cn } from "@/lib/utils";
import { formatStatName } from "@/utils/gameLogic";
import {
  Sword,
  HandshakeIcon,
  PaletteIcon,
  TrendingUpIcon,
  FlaskConicalIcon,
} from "lucide-react";

interface LeaderStatsProps {
  leader: Leader;
  isSelectable?: boolean;
  selectedStat?: keyof Leader["stats"] | null;
  onSelectStat?: (stat: keyof Leader["stats"]) => void;
}

const getStatIcon = (stat: string) => {
  switch (stat) {
    case "military":
      return <Sword className="w-4 h-4" />;
    case "diplomacy":
      return <HandshakeIcon className="w-4 h-4" />;
    case "culture":
      return <PaletteIcon className="w-4 h-4" />;
    case "economy":
      return <TrendingUpIcon className="w-4 h-4" />;
    case "science":
      return <FlaskConicalIcon className="w-4 h-4" />;
    default:
      return null;
  }
};

const LeaderStats: React.FC<LeaderStatsProps> = ({
  leader,
  isSelectable = false,
  selectedStat = null,
  onSelectStat,
}) => {
  return (
    <div className="space-y-2">
      {Object.entries(leader.stats).map(([stat, value]) => {
        const statKey = stat as keyof Leader["stats"];
        const isSelected = selectedStat === statKey;

        return (
          <div
            key={stat}
            className={cn(
              "flex items-center justify-between px-2 py-1 border border-border",
              isSelectable &&
                "cursor-pointer hover:bg-accent hover:text-accent-foreground",
              isSelected && "bg-accent text-accent-foreground"
            )}
            onClick={() => {
              if (isSelectable && onSelectStat) {
                onSelectStat(statKey);
              }
            }}
          >
            <div className="flex items-center gap-2">
              {getStatIcon(stat)}
              <span className="text-sm font-medium">
                {formatStatName(stat)}
              </span>
            </div>
            <span className="text-sm font-medium">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderStats;
