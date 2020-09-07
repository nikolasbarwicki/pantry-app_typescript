/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import ThemeContext from '../context/context';
import styles from './ToggleMode.module.css';

const ToggleMode: React.FC = () => {
  const { dispatch } = useContext(ThemeContext);

  const onChangeHandler = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <div className="wrapper">
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox}
        onChange={onChangeHandler}
      />

      <label htmlFor="checkbox" className={styles.label}>
        <div className={styles.ball} />
      </label>
    </div>
  );
};

export default ToggleMode;
