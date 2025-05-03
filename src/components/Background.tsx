
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
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${getEraAccentColor()} dark:opacity-30`}
        style={{
          transition: 'background 0.5s ease',
        }}
      />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`shape-${i}`}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              transform: animate ? `translateY(${scrollPosition * (0.05 + Math.random() * 0.1) * (i % 2 ? 1 : -1)}px)` : 'none',
              transition: 'transform 0.1s ease-out',
              backdropFilter: 'blur(80px)',
            }}
          />
        ))}
      </div>
      
      {/* Era-specific pattern */}
      <div 
        className={`absolute inset-0 ${getBackgroundPattern()} opacity-[0.05] dark:opacity-[0.03]`}
      />
      
      {/* Parallax map elements */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: animate ? `translateY(${scrollPosition * 0.1}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Decorative icons */}
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
        
        {/* Additional modern icons */}
        {Array.from({ length: 2 }).map((_, i) => (
          <Diamond
            key={i + 30}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
        
        {Array.from({ length: 2 }).map((_, i) => (
          <BarChart3
            key={i + 40}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 35 + 15}px`,
              height: `${Math.random() * 35 + 15}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 25 - 12}deg)`,
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
        
        {Array.from({ length: 2 }).map((_, i) => (
          <Zap
            key={i + 50}
            className="absolute text-primary/10 dark:text-primary/5" 
            style={{
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Modern radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/90 dark:to-background/95" />
    </div>
  );
};

export default Background;
