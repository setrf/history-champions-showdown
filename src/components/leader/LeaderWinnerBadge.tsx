
import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderWinnerBadge: React.FC = () => {
  return (
    <div className="absolute top-3 right-3 z-10">
      <div className="relative p-2 bg-yellow-500 dark:bg-yellow-600 rounded-full shadow-md animate-ping-slow">
        <Trophy className="w-5 h-5 text-yellow-50" />
      </div>
      <div className="absolute inset-0 w-full h-full bg-yellow-400/20 dark:bg-yellow-500/30 rounded-full animate-pulse" />
    </div>
  );
};

export default LeaderWinnerBadge;
