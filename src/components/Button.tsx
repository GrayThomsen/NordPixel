import React from 'react';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
}> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  as = 'button',
  href,
}) => {
  const baseClasses = 'font-body font-medium rounded-lg transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2';

  const variantClasses = {
    primary: 'bg-primary-bright text-primary-dark hover:bg-accent hover:text-white focus-visible:outline-primary-bright',
    secondary: 'bg-primary-dark text-white hover:bg-secondary-muted focus-visible:outline-primary-dark',
    outline: 'border-2 border-primary-bright text-primary-bright hover:bg-primary-bright hover:text-primary-dark focus-visible:outline-primary-bright',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
};
