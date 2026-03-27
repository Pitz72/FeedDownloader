import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper per Material Symbols Outlined.
 * API compatibile con lucide-react: size (px), className, filled, style.
 */
export const Icon: React.FC<IconProps> = ({ name, size = 24, filled = false, className = '', style }) => (
  <span
    className={`material-symbols-outlined${filled ? ' filled' : ''}${className ? ' ' + className : ''}`}
    style={{ fontSize: size, ...style }}
    aria-hidden="true"
  >
    {name}
  </span>
);
