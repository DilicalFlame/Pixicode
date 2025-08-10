import React, { useState, useEffect } from 'react';
import PixicodeIcon from '../assets/PixicodeIcon';

const AboutPixicode: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="about-section">
      <div
        className={`about-header ${animate ? 'about-animate' : 'about-pre-animate'}`}
      >
        <div className="about-logo">
          <div className="about-logo-container">
            <PixicodeIcon />
          </div>
        </div>
        <div className="about-info">
          <h2 className="about-title">Pixicode</h2>
          <p className="about-version">Version 1.0.0</p>
        </div>
      </div>

      <div
        className={`about-description ${animate ? 'about-animate-delayed' : 'about-pre-animate'}`}
      >
        <p className="about-text">
          Pixicode is a powerful application for organizing and editing your
          frontend work with Pixies. Create, manage, and organize your pixies
          with ease.
        </p>
        <div className="about-footer">
          <span>© 2025 Pixicode</span>
          <span>Made with ❤️</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPixicode;
