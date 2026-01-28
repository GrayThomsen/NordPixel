import React from 'react';
import { STATUS_MESSAGE } from '@config/site';

export const StatusBanner: React.FC = () => {
  if (!STATUS_MESSAGE.active) {
    return null;
  }

  return (
    <div className={`${STATUS_MESSAGE.bgColor} ${STATUS_MESSAGE.textColor} py-3 px-4 text-center font-body text-sm font-medium animate-fade-in`}>
      {STATUS_MESSAGE.text}
    </div>
  );
};
