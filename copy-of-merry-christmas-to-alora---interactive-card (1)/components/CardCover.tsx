
import React from 'react';

const CardCover: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fdf2e9] p-6 relative flex flex-col items-center border-[8px] border-[#e9d8c9] shadow-inner overflow-hidden">
      {/* Hand-drawn Frame */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 533">
        <path 
          d="M25,25 C45,22 85,28 125,24 C165,21 205,29 245,25 C285,22 325,27 375,25 
             L372,508 C352,512 312,506 272,510 C232,514 192,505 152,509 C112,513 72,507 25,508 
             Z" 
          fill="none" 
          stroke="#f6ad55" 
          strokeWidth="1.2"
          opacity="0.5"
        />
        {/* Quirky Corner Accents */}
        <circle cx="25" cy="25" r="3" fill="#c53030" opacity="0.6" />
        <circle cx="375" cy="25" r="3" fill="#c53030" opacity="0.6" />
        <circle cx="25" cy="508" r="3" fill="#c53030" opacity="0.6" />
        <circle cx="375" cy="508" r="3" fill="#c53030" opacity="0.6" />
      </svg>

      {/* Hand holding the plate (Naive style) */}
      <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 z-10">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <path 
            d="M70,0 C65,20 62,35 68,55 C70,62 76,68 70,75 C68,80 60,82 55,78 C50,72 55,65 58,60 C52,65 45,72 40,78 C35,88 45,95 50,92 L60,85 C55,92 48,100 45,108 C40,118 50,125 55,122 L75,100 C80,120 100,115 95,95 C92,85 82,85 75,88 C82,82 88,78 85,70 C82,62 75,65 70,72" 
            fill="#2f5233" 
            stroke="#1a2e1d"
            strokeWidth="1.2"
          />
          {/* Red nail polish for that human touch */}
          <circle cx="68" cy="55" r="3" fill="#c53030" />
        </svg>
      </div>

      {/* Plate (Merry Christmas to Alora) */}
      <div className="mt-20 relative z-0">
        <div className="w-60 h-60 rounded-full bg-white border-2 border-[#c53030] shadow-sm flex items-center justify-center p-4 relative overflow-hidden">
          {/* Subtle inner plate texture */}
          <div className="absolute inset-0 bg-[#fdf2e9] opacity-5"></div>
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#e9d8c9" strokeWidth="0.5" />
            {[...Array(36)].map((_, i) => (
              <path 
                key={i}
                d="M50,4 Q51,7 50,10" 
                fill="none" 
                stroke="#2f5233" 
                strokeWidth="1" 
                transform={`rotate(${i * 10} 50 50)`}
                opacity="0.4"
              />
            ))}
          </svg>
          
          <div className="text-center z-10">
            <h1 className="handwritten text-[#c53030] text-[2.1rem] leading-[1.05] -rotate-1">
              <span className="block">Merry</span>
              <span className="block">Christmas</span>
              <span className="block">to</span>
              <span className="block">Alora</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Village Scene (Storybook look) */}
      <div className="mt-auto mb-6 w-full px-8 relative">
        <div className="relative w-full h-32">
          {/* Drifting Snow */}
          <svg className="absolute bottom-0 w-full h-16 overflow-visible" viewBox="0 0 400 60" preserveAspectRatio="none">
            <path 
              d="M-20,40 C50,20 120,50 200,30 C280,10 350,45 420,35 L420,60 L-20,60 Z" 
              fill="white" 
            />
            <path 
              d="M-20,50 C80,35 180,55 280,40 C380,25 420,45 450,40 L450,60 L-20,60 Z" 
              fill="#f7fafc" 
              opacity="0.8"
            />
          </svg>
          
          {/* Cozy House */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scale-110">
            <svg width="80" height="70" viewBox="0 0 80 70">
              <rect x="20" y="30" width="40" height="35" fill="#fcf5eb" stroke="#8c735b" strokeWidth="1.2" />
              <path d="M15,30 L40,5 L65,30 Z" fill="#c53030" stroke="#8c735b" strokeWidth="1.2" />
              <rect x="35" y="48" width="10" height="17" fill="#2f5233" />
              <rect x="26" y="42" width="6" height="6" fill="#fefcbf" stroke="#8c735b" strokeWidth="0.5" />
              <rect x="48" y="42" width="6" height="6" fill="#fefcbf" stroke="#8c735b" strokeWidth="0.5" />
              <path d="M50,15 L50,10 L55,10 L55,15" fill="none" stroke="#8c735b" strokeWidth="1" />
            </svg>
          </div>

          {/* Trees (Asymmetric) */}
          <div className="absolute bottom-8 left-4">
            <svg width="40" height="60" viewBox="0 0 40 60">
              <path d="M20,5 L5,55 L35,55 Z" fill="#2f5233" stroke="#1a2e1d" strokeWidth="1" />
              <circle cx="20" cy="20" r="1.5" fill="#c53030" />
              <circle cx="15" cy="40" r="1.5" fill="#f6ad55" />
              <circle cx="25" cy="45" r="1.5" fill="white" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-16 scale-90 opacity-80">
            <svg width="30" height="40" viewBox="0 0 30 40">
              <path d="M15,0 L2,35 L28,35 Z" fill="#1c3321" stroke="#0a1a0c" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-8 right-8">
            <svg width="45" height="65" viewBox="0 0 45 65">
              <path d="M22,5 L5,60 L40,60 Z" fill="#2f5233" stroke="#1a2e1d" strokeWidth="1" />
              <circle cx="12" cy="40" r="2" fill="#c53030" />
              <circle cx="30" cy="30" r="2" fill="#f6ad55" />
            </svg>
          </div>
          
          {/* Tiny Ornaments in Snow */}
          <div className="absolute bottom-2 left-[40%] w-2 h-2 rounded-full bg-[#c53030]"></div>
          <div className="absolute bottom-4 right-[25%] w-1.5 h-1.5 rounded-full bg-[#f6ad55]"></div>
        </div>
      </div>

      {/* Printed Paper Texture Overlay (Internal to component) */}
      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </div>
  );
};

export default CardCover;
