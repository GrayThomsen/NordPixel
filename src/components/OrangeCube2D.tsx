import './OrangeCube2D.css';

interface OrangeCube2DProps {
  size?: number;
  className?: string;
}

export const OrangeCube2D = ({ 
  size = 150, 
  className = '' 
}: OrangeCube2DProps) => {
  return (
    <div 
      className={`orange-cube-container ${className}`}
      style={{ '--cube-size': `${size}px` } as React.CSSProperties}
    >
      <div className="orange-cube">
        <div className="cube-face front">F</div>
        <div className="cube-face back">B</div>
        <div className="cube-face right">R</div>
        <div className="cube-face left">L</div>
        <div className="cube-face top">T</div>
        <div className="cube-face bottom">Bo</div>
      </div>
    </div>
  );
};
