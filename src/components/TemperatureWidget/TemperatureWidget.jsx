import React from 'react';
import Widget from '../Widget/Widget';
import { useWeatherContext } from '../../contexts/useWeather';

const TemperatureWidget = () => {
  const {
    data: { weather },
  } = useWeatherContext();

  return (
    <Widget>
      <p className={'title'}>Temperature (en °C)</p>
      {weather ? (
        <>
          <p>{`${weather.main.temp}°C`}</p>
          <p>{`Min: ${weather.main.temp_min}°C`}</p>
          <p>{`Max: ${weather.main.temp_max}°C`}</p>
        </>
      ) : null}
    </Widget>
  );
};

export default TemperatureWidget;
