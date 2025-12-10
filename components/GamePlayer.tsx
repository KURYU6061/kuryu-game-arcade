import React, { useEffect, useState } from 'react';
import { Game } from '../types';
import { X, ExternalLink, RefreshCw, Smartphone } from 'lucide-react';

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black animate-in fade-in duration-300">
      {/* Top Bar / Control Panel */}
      <div className="h-14 bg-arcade-dark border-b border-slate-700 flex items-center justify-between px-4 sm:px-8 shadow-lg z-10">
        <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${game.color} animate-pulse`}></div>
            <h2 className="text-white font-tech font-bold text-lg tracking-wider hidden sm:block">
              PLAYING: <span className="text-arcade-accent">{game.title.toUpperCase()}</span>
            </h2>
            <h2 className="text-white font-tech font-bold text-lg tracking-wider sm:hidden">
              {game.title}
            </h2>
        </div>

        <div className="flex items-center gap-3">
          {/* External Link Fallback */}
          <a 
            href={game.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 hidden sm:flex items-center gap-2 text-xs uppercase font-bold"
            title="Open in actual new tab"
          >
            <ExternalLink size={18} />
            <span className="hidden md:inline">Open Tab</span>
          </a>

          <div className="h-6 w-px bg-slate-700 mx-1"></div>

          {/* Close Button - The requested feature */}
          <button 
            onClick={onClose}
            className="group flex items-center gap-2 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white px-4 py-1.5 rounded-full border border-red-600/50 transition-all duration-300"
          >
            <X size={18} />
            <span className="font-bold text-sm tracking-wide">CLOSE GAME</span>
          </button>
        </div>
      </div>

      {/* Game Container */}
      <div className="flex-grow relative bg-neutral-900 w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
            <div className="w-12 h-12 border-4 border-arcade-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="font-tech text-xl animate-pulse">LOADING CARTRIDGE...</p>
          </div>
        )}
        
        <iframe 
          src={game.url} 
          className="w-full h-full border-none"
          title={game.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Mobile overlay hint (optional, disappears after a few seconds if implemented logic) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-slate-300 pointer-events-none md:hidden flex items-center gap-2">
            <Smartphone size={14} />
            <span>Best played in landscape</span>
        </div>
      </div>
    </div>
  );
};