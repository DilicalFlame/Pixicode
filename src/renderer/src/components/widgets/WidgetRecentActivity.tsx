import React from 'react';
import ChevronRightIcon from '../assets/ChevronRightIcon';

const WidgetRecentActivity: React.FC = () => {
  const recentActivities = [
    '37. css art: making a donut with css',
    '38. three.JS: rotating disco light with glo...',
    '36. untitled pixie',
    '01. First Pixie - Hello World',
    '10. how to center a div part 2',
    'View All...',
  ];

  return (
    <div className="widget recent-activity">
      <h2 className="widget-title">Recent Activity</h2>
      <div className="activity-list">
        {recentActivities.map((item, index) => (
          <div key={index} className="activity-item">
            <span className="activity-text">{item}</span>
            <ChevronRightIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetRecentActivity;
