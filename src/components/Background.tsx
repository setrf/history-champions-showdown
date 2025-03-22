
import React, { useEffect, useState } from 'react';
import { Scroll, MapPin } from 'lucide-react';

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

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background with era-specific pattern */}
      <div 
        className={`absolute inset-0 ${getBackgroundPattern()} opacity-[0.15] dark:opacity-[0.07]`}
      />
      
      {/* Parallax map elements */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: animate ? `translateY(${scrollPosition * 0.1}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Decorative map pins */}
        {Array.from({ length: 5 }).map((_, i) => (
          <MapPin 
            key={i}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.5 + 0.2,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Decorative scrolls */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: animate ? `translateY(${scrollPosition * -0.05}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <Scroll 
            key={i}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 40 + 25}px`,
              height: `${Math.random() * 40 + 25}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.4 + 0.2,
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 dark:to-background/90" />
    </div>
  );
};

export default Background;
