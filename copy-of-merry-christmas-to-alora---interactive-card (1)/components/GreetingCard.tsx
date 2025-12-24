
import React, { useState } from 'react';
import CardCover from './CardCover';
import CardInside from './CardInside';

const GreetingCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    if (!isOpen) setIsOpen(true);
  };

  const closeCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div 
      className="relative w-full max-w-[500px] aspect-[3/4] group select-none"
      style={{ perspective: '2500px' }}
    >
      {/* 1. STATIC BASE LAYER (The Inside Right Page) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#fdf2e9] rounded-sm shadow-lg overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <CardInside />
        {/* Subtle paper shadow at the hinge */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
        
        {/* Close Button UI when open */}
        {isOpen && (
          <button 
            onClick={closeCard}
            className="absolute top-4 right-4 z-50 p-2 text-[#8c735b] hover:text-[#c53030] transition-colors bg-white/50 backdrop-blur-sm rounded-full border border-[#e9d8c9] shadow-sm"
            aria-label="Close card"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 2. ROTATING LAYER (The Cover + Inside Left Page) */}
      <div 
        className="relative w-full h-full transition-transform duration-1000 cursor-pointer"
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'left center', // Rotate from the hinge
          transform: isOpen ? 'rotateY(-160deg)' : 'rotateY(0deg)',
          zIndex: 10
        }}
        onClick={toggleCard}
      >
        {/* FRONT OF THE COVER */}
        <div 
          className="absolute inset-0 w-full h-full rounded-sm shadow-2xl overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            zIndex: 2 
          }}
        >
          <CardCover />
        </div>

        {/* BACK OF THE COVER (Inside Left Page) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#fcf5eb] rounded-sm overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', // Pre-rotated so it reads correctly when card is open
            zIndex: 1
          }}
          onClick={closeCard}
        >
          <div className="w-full h-full border-[12px] border-[#e9d8c9] opacity-20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
             <span className="text-[#a68a71] text-xs handwritten opacity-60 mb-8">Hand-crafted for Alora</span>
             <p className="handwritten text-[#8c735b] text-2xl opacity-40 italic">Merry Christmas</p>
             <div className="mt-8 opacity-20">
                <svg width="40" height="40" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="40" fill="none" stroke="#8c735b" strokeWidth="2" strokeDasharray="5 5" />
                </svg>
             </div>
             
             {/* Close Hint */}
             <div className="mt-auto pb-4">
                <p className="text-sm handwritten text-[#8c735b] opacity-40">Click here to close</p>
             </div>
          </div>
          {/* Paper shadow on the hinge of the cover */}
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {!isOpen && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-px h-8 bg-[#8c735b] opacity-30"></div>
          <div className="text-[#8c735b] handwritten text-lg animate-pulse tracking-wide">
            Click cover to open
          </div>
        </div>
      )}
    </div>
  );
};

export default GreetingCard;
