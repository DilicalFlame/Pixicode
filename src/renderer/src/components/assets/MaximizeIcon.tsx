import React from 'react';

interface MaximizeIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const MaximizeIcon: React.FC<MaximizeIconProps> = ({
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
        x="3"
        y="3"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export default MaximizeIcon;
