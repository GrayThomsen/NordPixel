import React, { useEffect, useRef } from 'react';
import { OrangeCube3D } from './OrangeCube3D';

interface ConstructionPopupProps {
  onDismiss?: () => void;
}

export const ConstructionPopup: React.FC<ConstructionPopupProps> = ({ onDismiss }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Focus the close button for accessibility
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismiss();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem('constructionDismissed', '1');
    } catch (err) {
      // ignore
    }
    onDismiss?.();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="construction-title"
      aria-describedby="construction-desc"
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <div className="relative bg-gradient-dark/95 border border-accent-orange/30 rounded-2xl p-12 max-w-md w-full mx-4 shadow-2xl shadow-accent-orange/20 animate-fade-in">
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={dismiss}
          aria-label="Dismiss construction popup"
          className="absolute right-4 top-4 p-2 text-gray-300 hover:text-accent-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h2 id="construction-title" className="text-4xl font-bold font-heading text-accent-orange mb-2">
            Under Construction
          </h2>
          <p id="construction-desc" className="text-gray-300 mb-8 text-sm">
            Something amazing is coming soon. Stay tuned!
          </p>

          {/* Orange Cube */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48">
              <OrangeCube3D size={200} speed={0.005} />
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                window.history.back();
              }}
              className="px-6 py-3 bg-accent-orange text-black rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
            >
              Go Back
            </button>

            <button
              onClick={dismiss}
              className="px-6 py-3 border border-accent-orange text-accent-orange rounded-lg font-medium hover:bg-accent-orange hover:bg-opacity-10 transition-all duration-300"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
