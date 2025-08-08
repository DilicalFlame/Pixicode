import React from 'react';

interface WandIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

const WandIcon: React.FC<WandIconProps> = ({
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
        d="M4 44H8V40H12V36H16V32H20V28H24V24H28V20H24V16H20V20H16V24H12V28H8V32H4V36H0V40H4V44ZM12 12H20V8H12V12ZM32 32H36V24H32V32ZM24 16H28V12H24V16ZM28 20H32V16H28V20ZM24 8H28V0H24V8ZM36 20H44V16H36V20ZM32 12H36V8H32V12ZM36 8H40V4H36V8Z"
        fill={fill}
      />
    </svg>
  );
};

export default WandIcon;
