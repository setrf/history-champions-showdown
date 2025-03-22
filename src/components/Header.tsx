
import React from 'react';
import { Crown, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full mb-4 shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold font-cinzel tracking-tight animate-slide-up flex items-center justify-center">
            Historical Leaders
            <span className="ml-2">
              <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            </span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            Compare the greatest leaders throughout history in this strategic card game
          </p>
        </div>
      </div>
    </header>
  );
}
