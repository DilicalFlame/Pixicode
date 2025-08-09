import React from 'react';
import ChevronLeftIcon from '../assets/ChevronLeftIcon';
import ChevronRightIcon from '../assets/ChevronRightIcon';

const WidgetFavorites: React.FC = () => {
  return (
    <div className="widget favorites-widget">
      <h2 className="widget-title">Favorites</h2>
      <div className="favorites-container">
        <div className="favorites-image">
          <img src="" alt="Favorite pixie" />
        </div>
        <div className="favorites-navigation">
          <button className="nav-button favorites-prev">
            <ChevronLeftIcon />
          </button>
          <button className="nav-button favorites-next">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetFavorites;
