
import React, { useEffect, useState } from 'react';
import { Scroll, MapPin, Landmark } from 'lucide-react';

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
        return "from-primary/20 to-primary/5";
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base color gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getEraAccentColor()} dark:opacity-30`}></div>
      
      {/* Era-specific pattern */}
      <div 
        className={`absolute inset-0 ${getBackgroundPattern()} opacity-[0.07] dark:opacity-[0.05]`}
      />
      
      {/* Parallax map elements */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: animate ? `translateY(${scrollPosition * 0.1}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Decorative landmarks */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Landmark 
            key={i}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 50 + 25}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          />
        ))}
        
        {/* Decorative map pins */}
        {Array.from({ length: 4 }).map((_, i) => (
          <MapPin 
            key={i + 10}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Decorative scrolls with parallax effect */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: animate ? `translateY(${scrollPosition * -0.05}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <Scroll 
            key={i + 20}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.4 + 0.1,
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/90 dark:to-background/95" />
    </div>
  );
};

export default Background;
