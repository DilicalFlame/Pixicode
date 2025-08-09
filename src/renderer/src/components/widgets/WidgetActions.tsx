import React from 'react';
import WandIcon from '../assets/WandIcon';
import ImageIcon from '../assets/ImageIcon';
import LinkIcon from '../assets/LinkIcon';

const WidgetActions: React.FC = () => {
  return (
    <div className="widget actions-widget">
      <button className="action-button">
        <WandIcon />
        <span>Create Pixie</span>
      </button>
      <button className="action-button">
        <ImageIcon />
        <span>My Pixies</span>
      </button>
      <button className="action-button">
        <LinkIcon />
        <span>Launch Pixiweb</span>
      </button>
    </div>
  );
};

export default WidgetActions;
