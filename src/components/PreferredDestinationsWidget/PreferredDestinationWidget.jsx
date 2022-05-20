import React, { useRef } from 'react';
import { useWeatherContext } from '../../contexts/useWeather';
import Widget from '../Widget/Widget';

const PreferredDestinationWidget = () => {
  const {
    data: { cities },
    addCity,
  } = useWeatherContext();
  const input = useRef();

  return (
    <Widget>
      <p className={'title'}>Mes destinations préférées</p>
      <input
        ref={input}
        placeholder={'ex: 60.1733244, 24.9410248'}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addCity(input.current?.value);
          }
        }}
      />
      {cities.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </Widget>
  );
};

PreferredDestinationWidget.propTypes = {};
PreferredDestinationWidget.defaultProps = {};

export default PreferredDestinationWidget;
