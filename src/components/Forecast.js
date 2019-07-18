import React from 'react';
import { getDay } from '../utils';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ day, overview }) => (
  <div className="forecast-day">
    <p>{getDay(new Date().getDay() + day)}</p>
    <WeatherIcon icon={overview && overview.weather[overview.weather.length - 1].icon} />
    <p>20&deg; / 29&deg;</p>
  </div >
);

export default Forecast;