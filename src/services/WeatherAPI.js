import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.url += '&appid=&units=metric'
  return config;
});

class WeatherAPI {
  constructor() {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  makeRequest = ({ url, method = 'GET' }) => {
    return axios({
      url: `${this.baseUrl}/${url}`,
      method
    }).then(data => data.data);
  }

  getForecast = () => {
    return this.makeRequest({
      url: 'forecast?lat=19.395261599999998&lon=-99.1822427'
    }).then(data => data);
  }

  getCurrentWeather = () => {
    return this.makeRequest({
      url: 'weather?lat=19.39&lon=-99.18'
    })
  }
}

export default new WeatherAPI();