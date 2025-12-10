import React, { useState } from 'react';
import { Game } from './types';
import { GAMES } from './constants';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';
import { Gamepad2, Github, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden selection:bg-arcade-primary selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,18,0)_2px,transparent_2px)] bg-[size:40px_40px] [background-position:-1px_-1px] border-slate-800/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-arcade-primary to-blue-600 rounded-lg shadow-lg shadow-purple-500/20">
                <Gamepad2 size={32} className="text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-arcade text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                KURYU ARCADE
              </h1>
            </div>
            <p className="text-slate-400 font-tech text-lg max-w-md">
              A collection of web experiments and indie games. Select a cartridge to start playing.
            </p>
          </div>

          <div className="flex gap-4">
             <a 
              href="https://github.com/kuryu6061" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-arcade-primary/50 hover:bg-slate-800 transition-all flex items-center gap-2 group"
            >
              <Github size={20} className="text-slate-400 group-hover:text-white transition-colors" />
              <span className="font-tech font-semibold text-slate-300 group-hover:text-white">GitHub Profile</span>
            </a>
          </div>
        </header>

        {/* Game Grid */}
        <main className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {GAMES.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onPlay={setActiveGame} 
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-mono gap-4">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span>SYSTEM READY... v1.0.0</span>
          </div>
          <p>© {new Date().getFullYear()} Kuryu Games. All rights reserved.</p>
        </footer>
      </div>

      {/* The "New Window" Simulation */}
      {activeGame && (
        <GamePlayer 
          game={activeGame} 
          onClose={() => setActiveGame(null)} 
        />
      )}
    </div>
  );
};

export default App;