import React from 'react';
import styles from './DateTime.module.css';


const DateTime = () => {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.toLocaleString('default', { weekday: 'long' });

  const time = currentDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div
      className={styles.dateStyles}
    >
      {day}, {month} {date}, {year}
      <p className={styles.timeStyle}>{time}</p>
    </div>
  );
};

export default DateTime;
