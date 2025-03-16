
import React from 'react';
import { Crown } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full pt-8 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
              <Crown className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight animate-slide-up">
            Historical Leaders
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            Compare the greatest leaders throughout history in this strategic card game
          </p>
        </div>
      </div>
    </header>
  );
}
