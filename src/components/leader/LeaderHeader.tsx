
import React, { useState } from 'react';
import { Leader } from '@/data/leaders';
import { cn } from '@/lib/utils';
import { History, ImageOff } from 'lucide-react';

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
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.log(`Failed to load image for ${leader.name}`);
    setImageError(true);
  };

  // Generate a placeholder background based on leader's era
  const getEraBackground = () => {
    switch (leader.era.toLowerCase()) {
      case 'ancient':
        return 'bg-gradient-to-br from-amber-700 to-amber-900';
      case 'medieval':
        return 'bg-gradient-to-br from-slate-700 to-slate-900';
      case 'renaissance':
        return 'bg-gradient-to-br from-red-700 to-red-900';
      case 'enlightenment':
        return 'bg-gradient-to-br from-blue-700 to-blue-900';
      case 'modern':
        return 'bg-gradient-to-br from-teal-700 to-teal-900';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-900';
    }
  };

  return (
    <div className={`relative h-52 overflow-hidden ${getEraBackground()} transition-colors duration-500`}>
      {isRevealed ? (
        <>
          {!imageError ? (
            <img 
              src={leader.image} 
              alt={leader.name}
              className={cn(
                "w-full h-full object-cover object-center transition-opacity duration-700",
                "opacity-80 scale-105"
              )}
              onLoad={onLoadComplete}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/70">
              <ImageOff className="w-12 h-12 mb-2" />
              <p className="text-sm">{leader.era} Leader</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h3 className="text-2xl font-bold font-cinzel">{leader.name}</h3>
            <div className="flex items-center mt-1 text-white/80">
              <History className="w-4 h-4 mr-1" />
              <span className="text-sm">{leader.era} • {leader.country}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-full w-16 h-16 bg-black/20 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white/60 text-2xl font-cinzel">?</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderHeader;
