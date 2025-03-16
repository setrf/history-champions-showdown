
import React from 'react';
import { Leader } from '@/data/leaders';
import { cn } from '@/lib/utils';
import { History } from 'lucide-react';

interface LeaderHeaderProps {
  leader: Leader;
  isRevealed: boolean;
  onLoadComplete: () => void;
}

const LeaderHeader: React.FC<LeaderHeaderProps> = ({
  leader,
  isRevealed,
  onLoadComplete
}) => {
  return (
    <div className="relative h-52 overflow-hidden bg-gradient-to-b from-gray-800 to-black">
      {isRevealed ? (
        <>
          <img 
            src={leader.image} 
            alt={leader.name}
            className={cn(
              "w-full h-full object-cover object-center transition-opacity duration-700",
              "opacity-70 scale-105"
            )}
            onLoad={onLoadComplete}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h3 className="text-2xl font-bold">{leader.name}</h3>
            <div className="flex items-center mt-1 text-gray-300">
              <History className="w-4 h-4 mr-1" />
              <span className="text-sm">{leader.era} • {leader.country}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <span className="text-gray-500 text-xl">?</span>
        </div>
      )}
    </div>
  );
};

export default LeaderHeader;
