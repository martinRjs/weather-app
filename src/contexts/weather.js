import React from 'react';
import { useCurrentWeather, useForecast } from '../hooks/weather';

const WeatherContext = React.createContext({});

const WeatherProvider = ({ children }) => {

  const weather = useCurrentWeather();
  
  const forecast = useForecast();

  return (
    <WeatherContext.Provider className="Provider" value={{
      weather,
      forecast
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

const WeatherConsumer = WeatherContext.Consumer;

export { WeatherConsumer, WeatherProvider };