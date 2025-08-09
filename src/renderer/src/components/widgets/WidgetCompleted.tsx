import React from 'react';
import PartyIcon from '../assets/PartyIcon';

const WidgetCompleted: React.FC = () => {
  return (
    <div className="widget completed-widget">
      <div className="action-button">
        <PartyIcon />
        <span className="action-text">Completed: 29</span>
      </div>
    </div>
  );
};

export default WidgetCompleted;
