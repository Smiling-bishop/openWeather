import React from 'react';
import WeatherProvider from '../contexts/useWeather';

const WeatherDashboard = () => {
  return (
    <WeatherProvider>
      <div id={'wrapper'} className={''}></div>
    </WeatherProvider>
  );
};

export default WeatherDashboard;
