import React from "react";
import { Leader } from "@/data/leaders";
import { cn } from "@/lib/utils";
import { formatStatName } from "@/utils/gameLogic";

interface LeaderStatsProps {
  leader: Leader;
  isSelectable?: boolean;
  selectedStat?: keyof Leader["stats"] | null;
  onSelectStat?: (stat: keyof Leader["stats"]) => void;
}

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
            <span className="text-sm font-medium">
              {formatStatName(stat)}
            </span>
            <span className="text-sm font-medium">{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderStats;
