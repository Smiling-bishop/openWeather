import React from 'react';
import { useWeatherContext } from '../../contexts/useWeather';
import OpenWeather from '../../apis/OpenWeather';
import './WeatherHead.css';

const WeatherHead = () => {
  const {
    data: { weather },
  } = useWeatherContext();

  if (!weather)
    return (
      <p>
        {`Merci d'activer la géolocalisation pour profiter pleinement de nos services`}
      </p>
    );
  return (
    <div className={'weather-head'}>
      <h2>{weather.name}</h2>
      <div className={'info'}>
        <div className={'hours'}>
          <p>{`Lever de soleil : ${weather.sunrise}`}</p>
          <p>{`Coucher de soleil : ${weather.sunset}`}</p>
        </div>
        <div className={weather}>
          <img
            alt={weather.weather[0].description}
            src={OpenWeather.ICON(weather.weather[0].icon)}
          />
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherHead;
