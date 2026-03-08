import React from 'react';
import { Navigate } from 'react-router-dom';

export const PortfolioPage: React.FC = () => {
  // legacy route, redirect to Web.dev
  return <Navigate to="/web" replace />;
};
