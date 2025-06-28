
import React, { useEffect, useState } from 'react';
import { Scroll, MapPin, Landmark, Zap, Diamond, BarChart3 } from 'lucide-react';

interface BackgroundProps {
  era?: string;
  animate?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ 
  era = "all", 
  animate = true 
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position for parallax effect
  useEffect(() => {
    if (!animate) return;
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  // Determine background pattern based on era
  const getBackgroundPattern = () => {
    switch(era) {
      case "ancient":
        return "bg-ancient-pattern";
      case "medieval":
        return "bg-medieval-pattern";
      case "renaissance":
        return "bg-renaissance-pattern";
      case "enlightenment":
        return "bg-enlightenment-pattern";
      case "modern":
        return "bg-modern-pattern";
      default:
        return "bg-default-pattern";
    }
  };

  // Get era-specific accent color
  const getEraAccentColor = () => {
    switch(era) {
      case "ancient":
        return "from-era-ancient/30 to-era-ancient/5";
      case "medieval":
        return "from-era-medieval/30 to-era-medieval/5";
      case "renaissance":
        return "from-era-renaissance/30 to-era-renaissance/5";
      case "enlightenment":
        return "from-era-enlightenment/30 to-era-enlightenment/5";
      case "modern":
        return "from-era-modern/30 to-era-modern/5";
      default:
        return "from-indigo-500/20 to-indigo-500/5";
    }
  };

  return (
    <div className="fixed inset-0 -z-10">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-200/60 to-purple-500/40 dark:from-gray-900 dark:to-gray-950`}
      />
      <div className={`absolute inset-0 ${getBackgroundPattern()} opacity-10`} />
    </div>
  );
};

export default Background;
