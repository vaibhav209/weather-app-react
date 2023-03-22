import React from 'react';
import DateTime from '../DateTime/DateTime';
import styles from './WeatherInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faStreetView } from '@fortawesome/free-solid-svg-icons';

const WeatherInfo = ({ weather, isError, welcomeMsg }) => {
  return (
    <>
      <DateTime />
      {isError && <h3>Something went wrong, Please try after sometime !</h3>}

      {welcomeMsg && <h4>Welcome to the Weather App!</h4>}

      <div className={styles.weatherDisplayBox}>
        {weather && weather.name && !isError && !welcomeMsg && (
          <div className={styles.weatherParentStyles}>
            <div className={styles.weatherName}>
              <FontAwesomeIcon
                icon={faStreetView}
                beatFade
                className={styles.cloudIcon}
              />
              <h2>{weather.name}</h2>
            </div>

            <div className={styles.weatherTemp}>
              <FontAwesomeIcon icon={faCloudSun} className={styles.cloudIcon} />
              <h1>{Math.round(weather.main.temp - 275.15)}&deg;C</h1>
            </div>
          </div>
        )}
      </div>

      {weather && weather.main && !isError && !welcomeMsg ? (
        <div className={styles.weatherDisplayBoxTwo}>
          <div className={styles.resultDisplay}>
            <div>
              {Math.round(weather.main.feels_like - 273.15)}&deg;C
              <p>Feels like</p>
            </div>

            <div>
              {Math.round(weather.main.humidity)}%
              <p>Humidity</p>
            </div>

            <div>
              {Math.round(weather.wind.speed)}MPH
              <p>Wind</p>
            </div>
          </div>
        </div>
      ) : (
        weather != null && (
          <p className={styles.notFoundText}>
            No Data Found!
          </p>
        )
      )}
    </>
  );
};

export default WeatherInfo;
