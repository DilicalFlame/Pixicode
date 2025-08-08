import React from 'react';

interface SettingsIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({
  width = 20,
  height = 20,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.4221 9.14V6.1H29V4.57H24.4221V1.52H22.8995V9.14H24.4221ZM24.4221 30.48V27.43H29V25.9H24.4221V22.86H22.8995V30.48H24.4221ZM29 15.24H7.63316V12.19H6.11054V10.67H4.57789V12.19H3.05527V15.24H0V16.76H3.05527V19.81H4.57789V21.33H6.11054V19.81H7.63316V16.76H29V15.24ZM21.3668 30.48H22.8995V32H21.3668V30.48ZM21.3668 21.33H22.8995V22.86H21.3668V21.33ZM21.3668 9.14H22.8995V10.67H21.3668V9.14ZM21.3668 0H22.8995V1.52H21.3668V0ZM21.3668 22.86H19.8442V25.9H0V27.43H19.8442V30.48H21.3668V22.86ZM19.8442 4.57H0V6.1H19.8442V9.14H21.3668V1.52H19.8442V4.57Z"
        fill="#E6E6E6"
      />
    </svg>
  );
};

export default SettingsIcon;
