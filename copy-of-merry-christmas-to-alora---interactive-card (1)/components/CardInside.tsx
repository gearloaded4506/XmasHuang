
import React, { useState, useRef } from 'react';

const CardInside: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full bg-[#fdf2e9] p-6 md:p-8 flex flex-col items-center justify-start relative border-[8px] border-[#e9d8c9] shadow-inner overflow-y-auto">
      {/* Background Textures and Festive Elements to fill "empty space" */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 533">
          {/* Scattered Snow dots */}
          {[...Array(40)].map((_, i) => (
            <circle 
              key={`snow-${i}`} 
              cx={Math.random() * 400} 
              cy={Math.random() * 533} 
              r={1 + Math.random() * 1.5} 
              fill="white" 
            />
          ))}
          {/* Hand-drawn tiny stars */}
          {[...Array(15)].map((_, i) => (
            <path 
              key={`star-${i}`}
              d="M0,-2 L0.5,-0.5 L2,0 L0.5,0.5 L0,2 L-0.5,0.5 L-2,0 L-0.5,-0.5 Z"
              fill="#f6ad55"
              transform={`translate(${Math.random() * 400}, ${Math.random() * 533}) rotate(${Math.random() * 360}) scale(${2 + Math.random() * 2})`}
            />
          ))}
          {/* Subtle branch line art in corners */}
          <path d="M0,0 Q20,10 40,0 T80,20" fill="none" stroke="#2f5233" strokeWidth="0.5" transform="translate(20, 20) rotate(15)" opacity="0.4" />
          <path d="M400,533 Q380,510 360,533 T320,513" fill="none" stroke="#2f5233" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*"
      />

      {/* Photo Area (Scrapbook Style) */}
      <div 
        className="relative mb-6 transform rotate-1 hover:rotate-0 transition-transform duration-700 cursor-pointer group z-20"
        onClick={handleImageClick}
      >
        <div className="w-64 md:w-72 bg-white p-3 md:p-4 shadow-2xl rounded-sm flex flex-col border border-gray-100">
          <div className="w-full aspect-[4/5] bg-[#fcf5eb] rounded-sm flex flex-col items-center justify-center border border-[#d4c3b3] overflow-hidden relative">
            {image ? (
              <>
                {/* Blurred background version to ensure "no space" while keeping whole image feel */}
                <img 
                  src={image} 
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-20 scale-110" 
                  alt=""
                />
                {/* Main image: object-cover with top-center focus to prioritize keeping heads in frame while filling the area */}
                <img 
                  src={image} 
                  alt="Personal" 
                  className="relative w-full h-full object-cover animate-fade-in" 
                  style={{ objectPosition: 'center 15%' }}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 opacity-40 group-hover:opacity-80 transition-opacity">
                <svg className="w-10 h-10 text-[#8c735b] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="handwritten text-[#8c735b] text-xl text-center leading-tight">Add a Christmas memory</p>
              </div>
            )}
            
            {/* Subtle surface texture on the photo */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] pointer-events-none"></div>
          </div>
          <div className="h-10 flex items-center justify-center">
            <span className="handwritten text-[1.2rem] text-[#a68a71] opacity-60">Xmas 2025</span>
          </div>
        </div>
        
        {/* Decorative Tape (Tactile feeling) */}
        <div className="absolute -top-3 -left-3 w-20 h-7 bg-[#c53030]/25 border-l border-r border-[#c53030]/10 transform -rotate-15 pointer-events-none backdrop-blur-[1px]"></div>
        <div className="absolute -bottom-2 -right-2 w-16 h-6 bg-[#2f5233]/20 border-l border-r border-[#2f5233]/10 transform rotate-12 pointer-events-none backdrop-blur-[1px]"></div>
      </div>

      {/* Message Area */}
      <div className="w-full flex-1 flex flex-col items-center z-10 px-2 min-h-[180px]">
        <div className="w-full max-w-[340px] relative">
          <textarea
            className="w-full bg-transparent handwritten text-[#2f5233] text-2xl text-center placeholder-[#8c735b]/40 focus:outline-none resize-none overflow-hidden leading-relaxed"
            placeholder="Type a message..."
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            style={{ minHeight: '140px' }}
          />
          
          {/* Subtle Writing Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 flex flex-col pt-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-[2.8rem] border-b border-[#a68a71]/10 w-full"></div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pb-4 w-full text-center">
           <p className="handwritten text-[#c53030] text-[1.4rem] opacity-70 italic">Wishing you joy and warmth,</p>
           <div className="w-16 h-px bg-[#c53030]/30 mx-auto mt-2"></div>
        </div>
      </div>

      {/* Corner Ornament Flourish */}
      <div className="absolute bottom-4 left-4 opacity-15 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2f5233" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M50,10 L50,90 M10,50 L90,50" stroke="#2f5233" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default CardInside;
