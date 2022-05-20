import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import OpenWeatherService from '../apis/OpenWeather';

const initialState = {
  cities: [],
  weather: null,
  coldest: null,
  hottest: null,
};

export const WeatherContext = createContext([]);
export const useWeatherContext = () => useContext(WeatherContext);

const WEATHER_ACTION = {
  ADD_CITY: 'addCity',
  LOAD_WEATHER: 'loadWeather',
};
const reducer = (state, action) => {
  let sunsetDate = null;
  let sunriseDate = null;

  switch (action.type) {
    case WEATHER_ACTION.ADD_CITY:
      const cities = [...state.cities, action.payload];
      let coldest;
      let hottest;
      if (cities.length > 0) {
        const sortCities = cities.sort((a, b) => a.main.temp > b.main.temp);
        coldest = sortCities[0];
        hottest = sortCities[sortCities.length - 1];
      }
      console.log(cities);
      return { ...state, cities, coldest, hottest };
    case WEATHER_ACTION.LOAD_WEATHER:
      sunsetDate = new Date(action.payload.sys.sunset * 1000);
      sunriseDate = new Date(action.payload.sys.sunrise * 1000);
      return {
        ...state,
        weather: {
          ...action.payload,
          sunset: `${sunsetDate?.getHours()}:${sunsetDate?.getMinutes()}`,
          sunrise: `${sunriseDate?.getHours()}:${sunriseDate?.getMinutes()}`,
        },
      };
    default:
      return state;
  }
};

const WeatherProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const addCity = useCallback((coordinates) => {
    let coords = coordinates.split(',').map((c) => parseFloat(c.trim()));
    OpenWeatherService.GET(coords[0], coords[1])
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      })
      .then((payload) => {
        dispatch({ type: WEATHER_ACTION.ADD_CITY, payload });
      });
  }, []);

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
    <WeatherContext.Provider value={{ data, addCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
