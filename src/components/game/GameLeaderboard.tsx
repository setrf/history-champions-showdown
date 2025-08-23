import React from "react";

interface PlayerScore {
  name: string;
  score: number;
  winRate: number;
}

interface GameLeaderboardProps {
  currentPlayerScore: number;
  roundsPlayed: number;
}

const GameLeaderboard: React.FC<GameLeaderboardProps> = ({
  currentPlayerScore,
  roundsPlayed,
}) => {
  const leaderboardData: PlayerScore[] = [
    { name: "Historical Champion", score: 152, winRate: 76 },
    { name: "Strategy Master", score: 143, winRate: 71 },
    { name: "You", score: currentPlayerScore, winRate: roundsPlayed > 0 ? Math.round((currentPlayerScore / roundsPlayed) * 100) : 0 },
    { name: "History Buff", score: 118, winRate: 59 },
    { name: "Novice Player", score: 92, winRate: 46 },
  ];

  const sorted = [...leaderboardData].sort((a, b) => b.score - a.score);
  const playerRank = sorted.findIndex(p => p.name === "You") + 1;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4">Leaderboard</h3>
      <table className="w-full border border-border text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-2">#</th>
            <th className="text-left p-2">Player</th>
            <th className="text-right p-2">Score</th>
            <th className="text-right p-2">Win %</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((player, index) => (
            <tr key={player.name} className={player.name === "You" ? "bg-muted" : ""}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{player.name}</td>
              <td className="p-2 text-right">{player.score}</td>
              <td className="p-2 text-right">{player.winRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm">Your rank: {playerRank}</p>
    </div>
  );
};

export default GameLeaderboard;
