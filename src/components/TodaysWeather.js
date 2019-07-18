import React from 'react';
import WeatherIcon from './WeatherIcon';

const TodaysWeather = ({ weather, main }) => (
  <>
    <div className="current-temperature">
      <WeatherIcon icon={weather && weather[weather.length - 1].icon} />
      <p>{weather && weather[weather.length - 1].description}</p>
    </div>
    <div className="temperature">
      <div>
        <span>{main && main.temp_max}&deg;</span><span>max</span>
      </div>
      <div>
        <span>{main && main.temp_min}&deg;</span><span>min</span>
      </div>
    </div>
  </>
);

export default TodaysWeather;
