import React from 'react';

interface CloseIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
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
        d="M12 4L4 12M4 4L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
