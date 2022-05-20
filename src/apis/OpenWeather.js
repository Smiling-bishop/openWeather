const API_KEY = '&appid=ca1aaf090c2e74895d3e6576810ef138';
const ENDPOINT =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&';

const OpenWeatherService = {
  GET: (lat, lon, init) =>
    fetch(`${ENDPOINT}lat=${lat}&lon=${lon}&${API_KEY}`, init),
  ICON: (code) => `http://openweathermap.org/img/wn/${code}@2x.png`,
};

export default OpenWeatherService;
