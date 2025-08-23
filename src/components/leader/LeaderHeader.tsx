import React from "react";
import { Leader } from "@/data/leaders";

interface LeaderHeaderProps {
  leader: Leader;
  isRevealed: boolean;
}

const LeaderHeader: React.FC<LeaderHeaderProps> = ({ leader, isRevealed }) => {
  return (
    <div className="border-b border-border p-4">
      {isRevealed ? (
        <>
          <h3 className="text-lg font-bold">{leader.name}</h3>
          <div className="text-sm text-muted-foreground">
            {leader.era} • {leader.country}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-20">
          <span className="text-2xl">?</span>
        </div>
      )}
    </div>
  );
};

export default LeaderHeader;
