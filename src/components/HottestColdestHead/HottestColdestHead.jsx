import React from 'react';
import { useWeatherContext } from '../../contexts/useWeather';

const HottestColdestHead = () => {
  const {
    data: { hottest, coldest },
  } = useWeatherContext();

  if (!hottest || !coldest) return null;

  console.log(hottest, coldest);
  return (
    <div>
      <p>
        {`🏖 Destination la plus chaude : ${hottest.name} (${hottest.main.temp}°C)`}
      </p>
      <p>
        {`⛄ Destination la plus froide  : ${coldest.name} (${coldest.main.temp}°C)`}
      </p>
    </div>
  );
};

HottestColdestHead.propTypes = {};
HottestColdestHead.defaultProps = {};

export default HottestColdestHead;
