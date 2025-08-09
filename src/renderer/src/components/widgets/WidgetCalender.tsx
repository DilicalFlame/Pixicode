import React from 'react';

const WidgetCalendar: React.FC = () => {
  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // Generate 49 cells for the calendar grid (7×7)
  const generateCalendarCells = () => {
    return Array(49)
      .fill(0)
      .map((_, i) => {
        // Random pattern of active and inactive cells
        const isActive = Math.random() > 0.5;
        return (
          <div
            key={i}
            className={`calendar-cell ${isActive ? 'calendar-cell-active' : 'calendar-cell-inactive'}`}
          ></div>
        );
      });
  };

  return (
    <div className="widget calendar-widget">
      <div className="calendar-header">
        {weekdays.map((day, i) => (
          <div key={i} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">{generateCalendarCells()}</div>
    </div>
  );
};

export default WidgetCalendar;
