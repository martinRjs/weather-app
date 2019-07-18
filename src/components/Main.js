import React from 'react';
import TodaysWeather from './TodaysWeather';
import Forecast from './Forecast';
import { WeatherConsumer } from '../contexts/weather';

const Main = () => (
  <WeatherConsumer>
    {({ weather, forecast }) => (
      <div className="app-info">
        <TodaysWeather {...weather} />
        {console.log({ forecast })}
        {forecast && Object.keys(forecast).map((key, i) => (<Forecast day={i + 1} overview={forecast[key][3]} key={key} />))}
      </div>
    )}
  </WeatherConsumer>
);

export default Main;