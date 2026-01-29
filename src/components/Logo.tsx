import React, { useState } from 'react';
import logoUrl from '../assets/branding/Logo (WhiteOnBlack).svg';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className={`flex items-center ${className}`}>
      {/* Show the branding image when it successfully loads */}
      {imageLoaded && (
        <img
          src={logoUrl}
          alt="NordPixel"
          width={size}
          height={size}
          onError={() => setImageLoaded(false)}
          onLoad={() => setImageLoaded(true)}
          className="inline-block"
          style={{ borderRadius: 0 }}
        />
      )}

      {/* Fallback badge (only visible if image fails) */}
      {!imageLoaded && (
        <div
          className="w-8 h-8 bg-accent-orange flex items-center justify-center"
          style={{ width: size, height: size, borderRadius: 0 }}
        >
          <span className="text-black font-heading font-bold text-sm">NP</span>
        </div>
      )}

      <span className="font-heading text-lg font-bold text-white hidden sm:inline ml-2">NordPixel</span>
    </div>
  );
};