import React from 'react';

interface RestoreIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const RestoreIcon: React.FC<RestoreIconProps> = ({
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
      <rect
        x="2"
        y="4"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 4V2H14V10H12"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export default RestoreIcon;
