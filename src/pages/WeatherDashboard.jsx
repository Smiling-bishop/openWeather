import React, { useRef } from 'react';
import WeatherProvider, { useWeatherContext } from '../contexts/useWeather';
import WeatherHead from '../components/WeatherHead/WeatherHead';
import TemperatureWidget from '../components/TemperatureWidget/TemperatureWidget';
import WindWidget from '../components/WindWidget/WindWidget';
import PreferredDestinationWidget from '../components/PreferredDestinationsWidget/PreferredDestinationWidget';
import HottestColdestHead from '../components/HottestColdestHead/HottestColdestHead';

const WeatherDashboard = () => (
  <WeatherProvider>
    <div id={'wrapper'}>
      <HottestColdestHead />
      <WeatherHead />
      <div className={'grid'}>
        <TemperatureWidget />
        <WindWidget />
        <PreferredDestinationWidget />
      </div>
    </div>
  </WeatherProvider>
);

export default WeatherDashboard;
