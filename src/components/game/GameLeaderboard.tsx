
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

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
    <div className="mt-8 p-6 glass-morphism rounded-xl animate-scale-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium font-cinzel flex items-center">
          <Crown className="h-5 w-5 text-amber-500 mr-2" />
          Global Leaderboard
        </h3>
        <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
          <Trophy className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium">Your Rank: {playerRank}</span>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Win %</TableHead>
              <TableHead className="text-right">Favorite</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedLeaderboard.map((player, index) => (
              <TableRow key={player.name} className={player.name === "You" ? "bg-blue-50/50 dark:bg-blue-900/10" : ""}>
                <TableCell className="font-medium text-center">
                  {index === 0 ? (
                    <Trophy className="h-4 w-4 text-amber-500 mx-auto" />
                  ) : index === 1 ? (
                    <Medal className="h-4 w-4 text-gray-400 mx-auto" />
                  ) : index === 2 ? (
                    <Award className="h-4 w-4 text-amber-700 mx-auto" />
                  ) : (
                    index + 1
                  )}
                </TableCell>
                <TableCell className="font-medium">
                  {player.name === "You" ? (
                    <span className="font-semibold text-primary">{player.name}</span>
                  ) : (
                    player.name
                  )}
                </TableCell>
                <TableCell className="text-right font-mono">{player.score}</TableCell>
                <TableCell className="text-right font-mono">{player.winRate}%</TableCell>
                <TableCell className="text-right capitalize">
                  <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    player.favoriteStat === 'military' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                    player.favoriteStat === 'diplomacy' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                    player.favoriteStat === 'culture' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                    player.favoriteStat === 'economy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                  }`}>
                    {player.favoriteStat}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
        <p className="flex items-center">
          <Award className="h-4 w-4 text-amber-500 mr-2" />
          Keep playing to improve your rank and unlock achievements!
        </p>
      </div>
    </div>
  );
};

export default GameLeaderboard;
