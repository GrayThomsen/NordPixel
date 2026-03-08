import React from 'react';
import { Region } from '@/assets/data/teaching';

// Placeholder component for future 3D Denmark map.
// For now renders a simple SVG or image with clickable regions.
// "onSelect" prop allows TeachingPage to update selected region.

interface Props {
  selected: Region;
  onSelect: (region: Region) => void;
}

export const DenmarkMap: React.FC<Props> = ({ selected, onSelect }) => {
  // TODO: replace with Three.js globe/mesh
  const handleClick = (region: Region) => {
    onSelect(region);
  };

  // very rough schematic SVG of Denmark divided into four boxes
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        <rect
          x="0"
          y="0"
          width="100"
          height="60"
          fill={selected === 'nordsjaelland' ? '#ff9800' : '#333'}
          className="cursor-pointer"
          onClick={() => handleClick('nordsjaelland')}
        />
        <text x="10" y="35" fill="#fff" fontSize="12">Nordsjælland</text>

        <rect
          x="100"
          y="0"
          width="100"
          height="60"
          fill={selected === 'rest-sjaelland' ? '#ff9800' : '#333'}
          className="cursor-pointer"
          onClick={() => handleClick('rest-sjaelland')}
        />
        <text x="110" y="35" fill="#fff" fontSize="12">Rest Sjælland</text>

        <rect
          x="0"
          y="60"
          width="100"
          height="60"
          fill={selected === 'fyn' ? '#ff9800' : '#333'}
          className="cursor-pointer"
          onClick={() => handleClick('fyn')}
        />
        <text x="10" y="95" fill="#fff" fontSize="12">Fyn</text>

        <rect
          x="100"
          y="60"
          width="100"
          height="60"
          fill={selected === 'jylland-bornholm' ? '#ff9800' : '#333'}
          className="cursor-pointer"
          onClick={() => handleClick('jylland-bornholm')}
        />
        <text x="110" y="95" fill="#fff" fontSize="12">Jylland/Brh</text>
      </svg>
      <p className="text-gray-400 text-sm mt-2">
        Current region: {selected}
      </p>
    </div>
  );
};
