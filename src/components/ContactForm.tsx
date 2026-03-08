import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC<{ onSubmit?: () => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate EmailJS later
    console.log({ name, email, message });
    if (onSubmit) onSubmit();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gradient-dark border border-gray-600"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded bg-gradient-dark border border-gray-600"
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 rounded bg-gradient-dark border border-gray-600 h-32"
      />
      <Button type="submit" variant="primary" size="lg">
        Send Message
      </Button>
    </form>
  );
};