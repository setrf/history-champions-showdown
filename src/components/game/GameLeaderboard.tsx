
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Trophy, Medal, Award } from 'lucide-react';

interface PlayerScore {
  name: string;
  score: number;
  winRate: number;
  favoriteStat: string;
}

interface GameLeaderboardProps {
  currentPlayerScore: number;
  roundsPlayed: number;
}

const GameLeaderboard: React.FC<GameLeaderboardProps> = ({ 
  currentPlayerScore,
  roundsPlayed 
}) => {
  // Mock leaderboard data - in a real app this would come from a database
  const leaderboardData: PlayerScore[] = [
    { name: "Historical Champion", score: 152, winRate: 76, favoriteStat: "military" },
    { name: "Strategy Master", score: 143, winRate: 71, favoriteStat: "diplomacy" },
    { name: "You", score: currentPlayerScore, winRate: roundsPlayed > 0 ? Math.round((currentPlayerScore / roundsPlayed) * 100) : 0, favoriteStat: "culture" },
    { name: "History Buff", score: 118, winRate: 59, favoriteStat: "science" },
    { name: "Novice Player", score: 92, winRate: 46, favoriteStat: "economy" },
  ];

  // Sort the leaderboard data by score (descending)
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.score - a.score);
  
  // Find the player's rank
  const playerRank = sortedLeaderboard.findIndex(player => player.name === "You") + 1;

  return (
    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/20 rounded-lg animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Global Leaderboard</h3>
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium">Your Rank: {playerRank}</span>
        </div>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Win %</TableHead>
            <TableHead className="text-right">Favorite</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedLeaderboard.map((player, index) => (
            <TableRow key={player.name} className={player.name === "You" ? "bg-blue-50 dark:bg-blue-900/20" : ""}>
              <TableCell className="font-medium">
                {index === 0 ? (
                  <Trophy className="h-4 w-4 text-yellow-500" />
                ) : index === 1 ? (
                  <Medal className="h-4 w-4 text-gray-400" />
                ) : index === 2 ? (
                  <Award className="h-4 w-4 text-amber-700" />
                ) : (
                  index + 1
                )}
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="text-right">{player.score}</TableCell>
              <TableCell className="text-right">{player.winRate}%</TableCell>
              <TableCell className="text-right capitalize">{player.favoriteStat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Keep playing to improve your rank and unlock achievements!</p>
      </div>
    </div>
  );
};

export default GameLeaderboard;
