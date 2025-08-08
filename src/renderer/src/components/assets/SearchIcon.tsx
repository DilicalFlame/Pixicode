import React from 'react';

interface SearchIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  fillOpacity?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  width = 40,
  height = 41,
  className = '',
  fill = '#E6E6E6',
  fillOpacity = 0.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.5H24V4.5H8V0.5ZM4 8.5V4.5H8V8.5H4ZM4 24.5H0V8.5H4V24.5ZM8 28.5H4V24.5H8V28.5ZM24 28.5V32.5H8V28.5H24ZM28 24.5H24V28.5H28V32.5H32V36.5H36V40.5H40V36.5H36V32.5H32V28.5H28V24.5ZM28 8.5H32V24.5H28V8.5ZM28 8.5V4.5H24V8.5H28Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </svg>
  );
};

export default SearchIcon;
