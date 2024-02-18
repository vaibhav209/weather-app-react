import React, { useState } from 'react';
import Inputfield from '../Inputfield/Inputfield';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherLoader from '../WeatherLoader/WeatherLoader';
import {getWeather} from '../../service/weather';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState(true);

  const showWeather = () => {
    setIsError(false);
    setWelcomeMsg(false);
    setIsLoading(true);
    setWeather(null);
    
    getWeather(city)
      .then((data) => {
        setWeather(data);
        setIsLoading(false);
        setIsError(false);
        setWelcomeMsg(false);
        setCity('');
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
        setWeather(null);
        setWelcomeMsg(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!city.length) {
        return;
      }
      showWeather();
    }
  };

  const footerStyle = {
    position: 'absolute',
    right: '2%',
    bottom: '2%',
    backgroundColor: '#567979ad',
    letterSpacing: '1px',
    fontFamily: 'fangsong',
    fontWeight: '450px',
    padding: '3px 5px 4px 5px',
    color: 'yellow',
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Inputfield
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={handleKeyPress}
          searchBtn={showWeather}
          disabled={!city.length}
        />

        <WeatherInfo
          weather={weather}
          isError={isError}
          welcomeMsg={welcomeMsg}
        />
        <WeatherLoader isLoading={isLoading} />
        <div style={footerStyle}>
          Coded by{' '}
          <a
            href="https://github.com/vaibhav209"
            target="_blank"
            title="Github profile"
            style={{ color: 'white' }}
          >
            Vaibhav
          </a>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
