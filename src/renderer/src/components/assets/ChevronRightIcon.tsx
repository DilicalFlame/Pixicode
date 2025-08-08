import React from 'react';

interface ChevronRightIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  width = 20,
  height = 20,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRightIcon;
