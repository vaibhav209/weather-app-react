import React from 'react';
import styles from './Inputfield.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Inputfield = ({ value, onChange, onKeyPress, searchBtn, disabled }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.searchInput}>
        <input
          type="text"
          value={value}
          placeholder="Enter a city to check the weather"
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={searchBtn} disabled={disabled}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </button>
      </div>
    </div>
  );
};

export default Inputfield;

