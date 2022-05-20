import React, { createContext, useContext, useEffect, useReducer } from 'react';
import OpenWeatherService from '../apis/OpenWeather';

const initialState = {
  cities: [],
  coldest: null,
  hottest: null,
  targetCity: null,
};

export const WeatherContext = createContext([]);
export const useWeatherContext = () => useContext(WeatherContext);

const WEATHER_ACTION = {
  ADD_CITY: 'addCity',
  REMOVE_CITY: 'removeCity',
  LOAD_WEATHER: 'loadWeather',
};
const reducer = (state, action) => {
  switch (action.type) {
    case WEATHER_ACTION.ADD_CITY:
      return { count: state.count + 1 };
    case WEATHER_ACTION.REMOVE_CITY:
      return { count: state.count + 1 };
    case WEATHER_ACTION.LOAD_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};

const WeatherProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let abortController;
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        abortController = new AbortController();
        OpenWeatherService.GET(latitude, longitude, {
          signal: abortController.signal,
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject();
          })
          .then((payload) => {
            dispatch({ type: WEATHER_ACTION.LOAD_WEATHER, payload });
          });
      }
    );

    return () => {
      abortController?.abort();
    };
  }, []);

  return (
    <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
