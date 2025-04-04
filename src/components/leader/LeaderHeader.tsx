
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
  // Generate a background based on leader's era
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
  
  // Get era-specific pattern
  const getEraPattern = () => {
    switch (leader.era.toLowerCase()) {
      case 'ancient':
        return 'bg-ancient-pattern';
      case 'medieval':
        return 'bg-medieval-pattern';
      case 'renaissance':
        return 'bg-renaissance-pattern';
      case 'enlightenment':
        return 'bg-enlightenment-pattern';
      case 'modern':
        return 'bg-modern-pattern';
      default:
        return 'bg-default-pattern';
    }
  };

  React.useEffect(() => {
    // Call the load complete callback on mount
    onLoadComplete();
  }, [onLoadComplete]);

  return (
    <div className={`relative h-52 overflow-hidden ${getEraBackground()} transition-colors duration-500`}>
      {isRevealed ? (
        <>
          <div className={`absolute inset-0 opacity-20 ${getEraPattern()}`}></div>
          
          {/* Decorative elements based on era */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/80 text-4xl font-spectral">{leader.name.charAt(0)}</span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h3 className="text-2xl font-bold font-spectral">{leader.name}</h3>
            <div className="flex items-center mt-1 text-white/80">
              <History className="w-4 h-4 mr-1" />
              <span className="text-sm">{leader.era} • {leader.country}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-full w-16 h-16 bg-black/20 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white/60 text-2xl font-spectral">?</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderHeader;
