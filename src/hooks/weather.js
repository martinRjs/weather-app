import { useState, useEffect } from 'react';
import WeatherAPI from '../services/WeatherAPI';
import { transformForecast } from '../services/ForeCastTransformation';

export const useCurrentWeather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    WeatherAPI.getCurrentWeather().then(data => setWeather(data));
  }, []);

  return weather;
}

export const useForecast = () => {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    WeatherAPI.getForecast().then(data => {
      console.log(transformForecast(data));
      setForecast(transformForecast(data));
    });
  }, []);

  return forecast;
}
