import React from 'react';

interface MinimizeIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const MinimizeIcon: React.FC<MinimizeIconProps> = ({
  width = 16,
  height = 16,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MinimizeIcon;
