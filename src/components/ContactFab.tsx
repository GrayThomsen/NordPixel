import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { Button } from './Button';

export const ContactFab: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* backdrop when open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-accent-orange text-black p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow animate-bounce"
        aria-label="Contact me"
      >
        Contact
      </button>

      {/* slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-gradient-dark text-white transform transition-transform duration-300 shadow-2xl z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-heading text-2xl">Get in Touch</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              ✕
            </button>
          </div>
          <ContactForm onSubmit={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
};