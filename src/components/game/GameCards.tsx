import React from "react";
import LeaderCard from "../LeaderCard";
import { Leader } from "@/data/leaders";

interface GameCardsProps {
  playerCard: Leader | null;
  computerCard: Leader | null;
  isPlayerTurn: boolean;
  showingRoundResult: boolean;
  handleSelectStat: (stat: keyof Leader["stats"]) => void;
  selectedStat: keyof Leader["stats"] | null;
}

const GameCards: React.FC<GameCardsProps> = ({
  playerCard,
  computerCard,
  isPlayerTurn,
  showingRoundResult,
  handleSelectStat,
  selectedStat,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 mb-8">
      <div className="w-full max-w-xs">
        <p className="text-center text-sm mb-2">Your Leader</p>
        {playerCard && (
          <LeaderCard
            leader={playerCard}
            isSelectable={isPlayerTurn && !showingRoundResult}
            onSelectStat={handleSelectStat}
            selectedStat={showingRoundResult ? selectedStat : null}
          />
        )}
      </div>

      <div className="flex items-center justify-center my-2 md:my-0">
        <span className="px-3 py-1 border border-border text-sm">vs</span>
      </div>

      <div className="w-full max-w-xs">
        <p className="text-center text-sm mb-2">Computer's Leader</p>
        {computerCard && (
          <LeaderCard
            leader={computerCard}
            isRevealed={showingRoundResult}
            selectedStat={showingRoundResult ? selectedStat : null}
          />
        )}
      </div>
    </div>
  );
};

export default GameCards;
