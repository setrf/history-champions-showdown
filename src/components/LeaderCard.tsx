import React from "react";
import { Leader } from "../data/leaders";
import LeaderHeader from "./leader/LeaderHeader";
import LeaderStats from "./leader/LeaderStats";
import LeaderFooter from "./leader/LeaderFooter";

interface LeaderCardProps {
  leader: Leader;
  isSelectable?: boolean;
  isRevealed?: boolean;
  selectedStat?: keyof Leader["stats"] | null;
  onSelectStat?: (stat: keyof Leader["stats"]) => void;
}

export default function LeaderCard({
  leader,
  isSelectable = false,
  isRevealed = true,
  selectedStat = null,
  onSelectStat,
}: LeaderCardProps) {
  return (
    <div className="border border-border bg-card text-card-foreground">
      <LeaderHeader leader={leader} isRevealed={isRevealed} />
      <div className="p-4">
        {isRevealed ? (
          <>
            <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
            <LeaderStats
              leader={leader}
              isSelectable={isSelectable}
              selectedStat={selectedStat}
              onSelectStat={onSelectStat}
            />
          </>
        ) : (
          <div className="h-48 flex items-center justify-center">
            <span className="text-2xl">?</span>
          </div>
        )}
      </div>
      <LeaderFooter years={leader.years} />
    </div>
  );
}
