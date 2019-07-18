import React from 'react';
import { WeatherConsumer } from '../contexts/weather';

const Header = () => (
  <WeatherConsumer>
    {({ weather }) => (
      <div className="app-header">
        <div>
          <p>{weather.main && weather.main.temp.toFixed()}&deg;</p>
          <p className="text-small">Monday, July 15, 2019</p>
        </div>
        <div>
          <p>{weather.name}</p>
          <p className="text-small">{weather.sys && weather.sys.country}</p>
        </div>
      </div>
    )}
  </WeatherConsumer>
);

export default Header;