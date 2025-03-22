
import React, { useState } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import Background from '@/components/Background';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { HelpCircle, Scroll } from 'lucide-react';

const Index = () => {
  const [currentEra, setCurrentEra] = useState<string>("all");
  
  // This will be passed down to GameBoard and used to update the background
  const handleEraChange = (era: string) => {
    setCurrentEra(era);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative">
      <Background era={currentEra} />
      
      <div className="container mx-auto px-4 py-8 relative">
        <Header />
        <main>
          <div className="flex justify-end mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-full">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Game Rules</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-morphism border-0 shadow-xl">
                <DialogHeader>
                  <DialogTitle className="font-cinzel text-xl">How to Play</DialogTitle>
                  <DialogDescription>
                    Historical Leaders Card Game
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 my-4">
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h3 className="font-medium font-cinzel flex items-center">
                      <Scroll className="h-4 w-4 mr-2 text-primary" />
                      Game Objective
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Win more rounds than your opponent by selecting attributes where your historical leader has higher stats.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium font-cinzel flex items-center">
                      <Scroll className="h-4 w-4 mr-2 text-primary" />
                      Game Flow
                    </h3>
                    <ol className="text-sm text-muted-foreground list-decimal ml-4 space-y-1 mt-1">
                      <li>Each player gets a deck of leader cards</li>
                      <li>On your turn, select one of the five attributes to compare (military, diplomacy, culture, economy, science)</li>
                      <li>The leader with the higher value in that attribute wins the round</li>
                      <li>The winner of the round goes first in the next round</li>
                      <li>Play continues until all cards have been played</li>
                    </ol>
                  </div>
                  
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h3 className="font-medium font-cinzel flex items-center">
                      <Scroll className="h-4 w-4 mr-2 text-primary" />
                      Game Settings
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      You can filter leaders by historical era and set the difficulty level in the Settings tab.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="rounded-full px-6">Got it</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <GameBoard onEraChange={handleEraChange} />
        </main>
        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Historical Leaders Card Game</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
