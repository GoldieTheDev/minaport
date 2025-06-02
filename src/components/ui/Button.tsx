import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  href
}: ButtonProps) => {
  const baseStyles = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={baseStyles} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={baseStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;