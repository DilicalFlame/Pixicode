import React from 'react';

interface LinkIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({
  width = 36,
  height = 36,
  className = '',
  fill = '#E6E6E6',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 16V0H20V4H28V8H24V12H20V16H16V20H12V24H16V20H20V16H24V12H28V8H32V16H36ZM16 4H0V36H32V20H28V32H4V8H16V4Z"
        fill={fill}
      />
    </svg>
  );
};

export default LinkIcon;
