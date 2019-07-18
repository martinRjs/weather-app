import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSmog, faCloudSun, faCloud, faCloudShowersHeavy, faCloudRain, faPooStorm } from '@fortawesome/free-solid-svg-icons'

const WeatherIcon = ({ icon }) => {
  switch (icon && icon.replace(/[^0-9]/g, '')) {
    case '01':
      return <FontAwesomeIcon icon={faSun} className="sunny" />;
    case '02':
      return <FontAwesomeIcon icon={faCloudSun} className="sunny" />;
    case '03':
      return <FontAwesomeIcon icon={faCloud} className="mist" />;
    case '04':
      return <FontAwesomeIcon icon={faCloudSun} className="mist" />;
    case '09':
      return <FontAwesomeIcon icon={faCloudShowersHeavy} className="mist" />;
    case '10':
      return <FontAwesomeIcon icon={faCloudRain} className="mist" />;
    case '11':
      return <FontAwesomeIcon icon={faPooStorm} className="mist" />;
    case '50':
      return <FontAwesomeIcon icon={faSmog} className="mist" />;
    default:
      return "";
  }
}


export default React.memo(WeatherIcon);