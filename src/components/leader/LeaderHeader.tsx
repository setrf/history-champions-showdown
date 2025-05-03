
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
  // Updated to use Wikimedia images based on leader's name
  const getWikimediaImage = (leaderName: string) => {
    // Convert leader name to a format suitable for Wikimedia Commons
    const formattedName = leaderName.toLowerCase().replace(/ /g, '_');
    
    // Map of leader names to specific Wikimedia Commons URLs
    const imageMapping: Record<string, string> = {
      'alexander the great': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexander_the_Great_mosaic.jpg/800px-Alexander_the_Great_mosaic.jpg',
      'cleopatra vii': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/800px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg',
      'julius caesar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gaius_Julius_Caesar_%28100-44_BC%29.jpg/800px-Gaius_Julius_Caesar_%28100-44_BC%29.jpg',
      'genghis khan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/800px-YuanEmperorAlbumGenghisPortrait.jpg',
      'queen elizabeth i': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/800px-Darnley_stage_3.jpg',
      'napoleon bonaparte': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg',
      'catherine the great': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg/800px-Catherine_II_by_J.B.Lampi_%281780s%2C_Kunsthistorisches_Museum%29.jpg',
      'abraham lincoln': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/800px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
      'empress wu zetian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/A_Tang_Dynasty_Empress_Wu_Zetian.jpg/800px-A_Tang_Dynasty_Empress_Wu_Zetian.jpg',
      'mahatma gandhi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/800px-Mahatma-Gandhi%2C_studio%2C_1931.jpg',
      'charlemagne': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Charlemagne_denier_Mayence_812_814.jpg/800px-Charlemagne_denier_Mayence_812_814.jpg',
      'queen victoria': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Queen_Victoria_by_Bassano.jpg/800px-Queen_Victoria_by_Bassano.jpg',
      'saladin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Saladin2.jpg/800px-Saladin2.jpg',
      'tokugawa ieyasu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tokugawa_Ieyasu2.JPG/800px-Tokugawa_Ieyasu2.JPG',
      'mansa musa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Mansa_Musa.jpg/800px-Mansa_Musa.jpg',
      'winston churchill': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg',
      'empress theodora': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Meister_von_San_Vitale_in_Ravenna_003.jpg/800px-Meister_von_San_Vitale_in_Ravenna_003.jpg',
      'ashoka the great': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Emperor_Ashoka_Iron_Pillar_Old_Delhi_India_1997.jpg/787px-Emperor_Ashoka_Iron_Pillar_Old_Delhi_India_1997.jpg',
      'simon bolivar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sim%C3%B3n_Bol%C3%ADvar_by_Arturo_Michelena.jpg/800px-Sim%C3%B3n_Bol%C3%ADvar_by_Arturo_Michelena.jpg',
      'maria theresa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Maria_Theresia_portraitt.jpg/800px-Maria_Theresia_portraitt.jpg',
      'lorenzo de medici': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Giorgio_Vasari_-_Lorenzo_de%27_Medici_-_Google_Art_Project.jpg/800px-Giorgio_Vasari_-_Lorenzo_de%27_Medici_-_Google_Art_Project.jpg',
      'frederick the great': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Friedrich_der_Grosse_1763.jpg/800px-Friedrich_der_Grosse_1763.jpg'
    };
    
    // Return the specific image or a fallback based on era
    return imageMapping[formattedName.toLowerCase()] || getEraDefaultImage(leader.era);
  };
  
  // Fallback images by era if specific leader image isn't found
  const getEraDefaultImage = (era: string) => {
    switch (era.toLowerCase()) {
      case 'ancient':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Acropolis_of_Athens_01361.jpg/800px-Acropolis_of_Athens_01361.jpg';
      case 'medieval':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bodiam-castle-10My863.jpg/800px-Bodiam-castle-10My863.jpg';
      case 'renaissance':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Le_Studiolo_du_Duc_Federico_da_Montefeltro.jpg/800px-Le_Studiolo_du_Duc_Federico_da_Montefeltro.jpg';
      case 'enlightenment':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Château_de_Versailles%2C_salon_de_Diane.jpg/800px-Château_de_Versailles%2C_salon_de_Diane.jpg';
      case 'modern':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg/800px-Lower_Manhattan_from_Staten_Island_Ferry_Corrected_Jan_2006.jpg';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Trajan%27s_Market.jpg/800px-Trajan%27s_Market.jpg';
    }
  };
  
  // Get era-specific overlay color with more modern gradients
  const getEraOverlay = () => {
    switch (leader.era.toLowerCase()) {
      case 'ancient':
        return 'bg-gradient-to-t from-amber-900/80 via-amber-800/50 to-transparent';
      case 'medieval':
        return 'bg-gradient-to-t from-slate-900/80 via-slate-800/50 to-transparent';
      case 'renaissance':
        return 'bg-gradient-to-t from-red-900/80 via-red-800/50 to-transparent';
      case 'enlightenment':
        return 'bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-transparent';
      case 'modern':
        return 'bg-gradient-to-t from-teal-900/80 via-teal-800/50 to-transparent';
      default:
        return 'bg-gradient-to-t from-gray-900/80 via-gray-800/50 to-transparent';
    }
  };

  React.useEffect(() => {
    // Call the load complete callback on mount
    onLoadComplete();
  }, [onLoadComplete]);

  return (
    <div className="relative h-52 overflow-hidden rounded-t-lg transition-colors duration-500">
      {isRevealed ? (
        <>
          {/* Wikimedia image as background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${getWikimediaImage(leader.name)})` }}
          />
          
          {/* Overlay for better text readability */}
          <div className={`absolute inset-0 ${getEraOverlay()}`}></div>
          
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <h3 className="text-2xl font-bold font-roboto tracking-tight">{leader.name}</h3>
            <div className="flex items-center mt-1 text-white/90">
              <History className="w-4 h-4 mr-1" />
              <span className="text-sm">{leader.era} • {leader.country}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="rounded-full w-16 h-16 bg-black/20 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white/60 text-2xl font-roboto">?</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderHeader;
