
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface GameSettingsProps {
  selectedEra: string;
  setSelectedEra: (era: string) => void;
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  onRestart: () => void;
  eras: string[];
}

const GameSettings: React.FC<GameSettingsProps> = ({
  selectedEra,
  setSelectedEra,
  difficulty,
  setDifficulty,
  onRestart,
  eras,
}) => {
  return (
    <div className="space-y-4 p-4 max-w-md mx-auto">
      <div>
        <label className="text-sm font-medium mb-2 block">
          Historical Era
        </label>
        <Select
          value={selectedEra}
          onValueChange={setSelectedEra}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Era" />
          </SelectTrigger>
          <SelectContent>
            {eras.map(era => (
              <SelectItem key={era} value={era}>
                {era === "all" ? "All Eras" : era}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">
          Filter leaders by historical era
        </p>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">
          Difficulty Level
        </label>
        <Select
          value={difficulty}
          onValueChange={setDifficulty}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">
          Easy: You get better stats. Hard: Computer makes smarter choices.
        </p>
      </div>
      
      <Button 
        onClick={onRestart}
        className="w-full mt-4"
      >
        Apply Settings & Restart
      </Button>
    </div>
  );
};

export default GameSettings;
