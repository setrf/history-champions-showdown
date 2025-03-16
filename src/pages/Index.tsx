
import React, { useState } from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
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
import { HelpCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main>
          <div className="flex justify-end mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <HelpCircle className="h-4 w-4" />
                  Game Rules
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How to Play</DialogTitle>
                  <DialogDescription>
                    Historical Leaders Card Game
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 my-4">
                  <div>
                    <h3 className="font-medium">Game Objective</h3>
                    <p className="text-sm text-muted-foreground">
                      Win more rounds than your opponent by selecting attributes where your historical leader has higher stats.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Game Flow</h3>
                    <ol className="text-sm text-muted-foreground list-decimal ml-4 space-y-1">
                      <li>Each player gets a deck of leader cards</li>
                      <li>On your turn, select one of the five attributes to compare (military, diplomacy, culture, economy, science)</li>
                      <li>The leader with the higher value in that attribute wins the round</li>
                      <li>The winner of the round goes first in the next round</li>
                      <li>Play continues until all cards have been played</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Game Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      You can filter leaders by historical era and set the difficulty level in the Settings tab.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Got it</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <GameBoard />
        </main>
        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Historical Leaders Card Game</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
