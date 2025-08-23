import React from "react";
import { Leader } from "@/data/leaders";
import { History } from "lucide-react";

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
          <div className="flex items-center text-sm text-muted-foreground">
            <History className="w-4 h-4 mr-1" />
            <span>
              {leader.era} • {leader.country}
            </span>
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
