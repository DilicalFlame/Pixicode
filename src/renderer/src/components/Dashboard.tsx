import React from 'react';
import SearchIcon from './assets/SearchIcon';
import WidgetTotalPixies from './widgets/WidgetTotalPixies';
import WidgetRecentActivity from './widgets/WidgetRecentActivity';
import WidgetActions from './widgets/WidgetActions';
import WidgetCalendar from './widgets/WidgetCalender';
import WidgetFavorites from './widgets/WidgetFavorites';
import WidgetCompleted from './widgets/WidgetCompleted';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="header-title">
          <h1>Dashboard</h1>
          <div className="header-underline"></div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <SearchIcon />
        </div>
      </div>

      <div className="dashboard-content">
        {/* Top row with widgets */}
        <div className="dashboard-column left-column">
          <WidgetTotalPixies />
        </div>

        <div className="dashboard-column middle-column">
          <WidgetCompleted />
          <WidgetActions />
        </div>

        {/* Right Column */}
        <div className="dashboard-column right-column">
          <WidgetCalendar />
          <WidgetFavorites />
        </div>

        {/* Recent Activity spans two columns starting from left column */}
        <div className="dashboard-column span-two-columns">
          <WidgetRecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
