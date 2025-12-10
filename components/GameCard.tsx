import React from 'react';
import { Game } from '../types';
import { 
  Gamepad2, 
  MessageSquare, 
  Binary, 
  Crosshair, 
  BoxSelect, 
  Rocket, 
  Star, 
  Bug,
  Play
} from 'lucide-react';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const getIcon = (key: string) => {
  switch (key) {
    case 'word': return <MessageSquare size={48} />;
    case 'number': return <Binary size={48} />;
    case 'target': return <Crosshair size={48} />;
    case 'box': return <BoxSelect size={48} />;
    case 'rocket': return <Rocket size={48} />;
    case 'star': return <Star size={48} />;
    case 'bug': return <Bug size={48} />;
    default: return <Gamepad2 size={48} />;
  }
};

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      className="group relative bg-arcade-card rounded-xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Header / Banner Area */}
      <div className={`h-32 bg-gradient-to-br ${game.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Icon */}
        <div className="text-white drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">
          {getIcon(game.iconKey)}
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer" onClick={() => onPlay(game)}>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform font-tech uppercase tracking-wider">
            <Play size={18} fill="currentColor" /> Play Now
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 font-tech uppercase tracking-wide group-hover:text-arcade-accent transition-colors">
          {game.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-grow font-sans">
          {game.description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-mono">WEB GAME</span>
            <button 
              onClick={() => onPlay(game)}
              className="text-arcade-primary hover:text-white text-sm font-semibold transition-colors flex items-center gap-1"
            >
              LAUNCH <span className="text-lg">›</span>
            </button>
        </div>
      </div>
    </div>
  );
};