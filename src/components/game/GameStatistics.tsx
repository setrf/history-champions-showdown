
import React from 'react';
import { Trophy, Award, BarChart3, ChartPieIcon, Star, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface GameStatisticsProps {
  roundNumber: number;
  playerScore: number;
}

const GameStatistics: React.FC<GameStatisticsProps> = ({
  roundNumber,
  playerScore,
}) => {
  // Calculate game stats
  const totalRounds = roundNumber - 1;
  const winRatio = playerScore > 0 ? Math.round((playerScore / totalRounds) * 100) : 0;
  
  // Mock data about most successful stat category
  const statCategories = [
    { name: 'Military', wins: 2 },
    { name: 'Diplomacy', wins: 3 },
    { name: 'Culture', wins: 1 },
    { name: 'Economy', wins: 1 },
    { name: 'Science', wins: 1 }
  ];
  
  // Find most successful category
  const topCategory = [...statCategories].sort((a, b) => b.wins - a.wins)[0];
  
  // Calculate achievement progress (example)
  const achievementProgress = Math.min(100, Math.round((playerScore / 10) * 100));

  return (
    <div className="mt-8 space-y-8 animate-scale-in">
      <h3 className="text-xl font-medium font-cinzel mb-4 flex items-center">
        <Target className="h-5 w-5 mr-2 text-primary" />
        Game Statistics
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="overflow-hidden border-0 shadow-md glass-morphism">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Total Rounds</h4>
                <p className="text-2xl font-bold font-mono">{totalRounds}</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md glass-morphism">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Win Ratio</h4>
                <p className="text-2xl font-bold font-mono">{winRatio}%</p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md glass-morphism">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10 border-2 border-primary/10">
                <AvatarImage src="/leaders/placeholder.jpg" alt="Player" />
                <AvatarFallback className="bg-primary/10">P</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">Top Strategy</p>
                <h4 className="font-medium flex items-center">
                  <Star className="h-3 w-3 text-amber-500 mr-1" />
                  {topCategory.name} Mastery
                </h4>
                <p className="text-xs text-muted-foreground">{topCategory.wins} wins</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-0 shadow-md glass-morphism">
          <CardContent className="pt-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-sm flex items-center">
                  <Zap className="h-3 w-3 text-amber-500 mr-1" />
                  Achievement Progress
                </h4>
                <span className="text-sm text-muted-foreground font-mono">{achievementProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-primary h-2.5 rounded-full" 
                  style={{ width: `${achievementProgress}%` }}
                ></div>
              </div>
              <div className="flex items-center mt-2">
                <Award className="w-4 h-4 text-amber-500 mr-1" />
                <span className="text-xs text-muted-foreground">
                  {achievementProgress < 100 ? 
                    `${10 - playerScore} more wins for next achievement` : 
                    'Achievement unlocked!'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameStatistics;
