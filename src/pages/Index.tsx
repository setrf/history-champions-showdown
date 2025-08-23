
import React from 'react';
import Header from '@/components/Header';
import GameBoard from '@/components/GameBoard';
import Background from '@/components/Background';

const Index = () => (
  <div className="min-h-screen relative">
    <Background />
    <Header />
    <main className="container mx-auto px-4 py-6">
      <GameBoard />
    </main>
    <footer className="py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Historical Leaders Game</p>
    </footer>
  </div>
);

export default Index;
