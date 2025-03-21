
import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderWinnerBadge: React.FC = () => {
  return (
    <div className="absolute top-3 right-3 z-10">
      <div className="relative p-2 bg-yellow-400 rounded-full animate-ping-slow">
        <Trophy className="w-5 h-5 text-yellow-900" />
      </div>
      <div className="absolute inset-0 w-full h-full bg-yellow-300/30 rounded-full animate-pulse" />
    </div>
  );
};

export default LeaderWinnerBadge;
