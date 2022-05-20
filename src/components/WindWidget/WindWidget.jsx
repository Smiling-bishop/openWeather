import React from 'react';
import Widget from '../Widget/Widget';
import { useWeatherContext } from '../../contexts/useWeather';

const WindWidget = () => {
  const {
    data: { weather },
  } = useWeatherContext();

  return (
    <Widget>
      <p className={'title'}>Vent (en °C)</p>
      {weather ? (
        <>
          <p>{`${weather.wind.speed} m/s`}</p>
          <p>{`Min: ${weather.wind.deg}`}</p>
        </>
      ) : null}
    </Widget>
  );
};

export default WindWidget;
