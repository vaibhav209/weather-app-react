import React from 'react';
import styles from './WeatherLoader.module.css';

const WeatherLoader = ({isLoading})=>{
  return (
    <div>
      {isLoading && (<span className={styles.loader}></span>)}
    </div>
  )
};

export default WeatherLoader;