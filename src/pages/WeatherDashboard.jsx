import React from 'react';
import WeatherProvider from '../contexts/useWeather';
import WeatherHead from '../components/WeatherHead/WeatherHead';
import TemperatureWidget from '../components/TemperatureWidget/TemperatureWidget';
import WindWidget from '../components/WindWidget/WindWidget';

const WeatherDashboard = () => {
  return (
    <WeatherProvider>
      <div id={'wrapper'} className={''}>
        <WeatherHead />
        <div className={'grid'}>
          <TemperatureWidget />
          <WindWidget />
        </div>
      </div>
    </WeatherProvider>
  );
};

export default WeatherDashboard;
