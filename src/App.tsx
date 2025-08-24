import React from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';

const App = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-xl text-center mb-6 font-bold">Historical Leaders Card Game</h2>
      <GameBoard />
    </main>
  </div>
);

export default App;

