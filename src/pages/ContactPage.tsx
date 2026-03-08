import React from 'react';
import { ContactForm } from '@components/ContactForm';

import { usePageTitle } from '@hooks/usePageTitle';

export const ContactPage: React.FC = () => {
  usePageTitle('Contact');
  return (
    <div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-gradient-darker rounded-lg shadow-lg">
        <h1 className="font-heading text-3xl mb-4">Get in Touch</h1>
        <p className="font-body text-gray-300 mb-6">
          Send me a message and I'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};