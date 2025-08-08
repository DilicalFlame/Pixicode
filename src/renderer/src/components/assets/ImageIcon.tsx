import React from 'react';

interface ImageIconProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  width = 40,
  height = 36,
  className = '',
  fill = '#E6E6E6',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 0H0V36H40V0H4ZM36 4V32H4V4H36ZM24 12H20V16H16V20H12V24H8V28H12V24H16V20H20V16H24V20H28V24H32V20H28V16H24V12ZM12 8H8V12H12V8Z"
        fill={fill}
      />
    </svg>
  );
};

export default ImageIcon;
