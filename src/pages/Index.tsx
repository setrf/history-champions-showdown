
import React from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main>
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
