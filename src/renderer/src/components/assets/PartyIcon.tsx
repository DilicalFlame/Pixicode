import React from 'react';

interface PartyIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

const PartyIcon: React.FC<PartyIconProps> = ({
  width = 44,
  height = 44,
  className = '',
  fill = '#E6E6E6',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 36H16V32H12V28H8V24H4V32H8V36H12V40H20V36ZM20 36H28V32H36V28H28V24H24V20H20V16H16V8H12V16H8V24H12V28H16V32H20V36ZM0 44H12V40H8V36H4V32H0V44ZM0 8H4V4H0V8ZM40 40H44V36H40V40ZM8 4H20V0H8V4ZM28 20H32V16H28V20ZM20 12H24V4H20V12ZM40 32H44V24H40V32ZM36 24H40V20H36V24ZM32 16H44V12H32V16ZM28 8H32V0H28V8ZM40 8H44V4H40V8Z"
        fill={fill}
      />
    </svg>
  );
};

export default PartyIcon;
