
import React from 'react';

interface LogoProps {
  className?: string;
  inverse?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", inverse = false, showText = true }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-4">
        {showText && (
          <div className="flex flex-col">
            <span className={`text-3xl md:text-4xl font-black tracking-[0.2em] leading-none ${inverse ? 'text-black' : 'text-white'}`}>
              SAVVY IT
            </span>
            <span className={`text-xs md:text-sm font-serif italic tracking-widest mt-1 ${inverse ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Technology, made simple.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
