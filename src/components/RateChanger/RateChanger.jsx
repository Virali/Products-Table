import React, { useContext, useState } from 'react'

import styles from "./RateChanger.module.css";

import { RateContext } from "./RateChangeProvider";

export default function RateChanger() {
  const [rate, setRate] = useContext(RateContext);
  const [state, setState] = useState(20);

  function handleChange(e) {
    const value = Number(e.target.value);

    if(value > 80) {
      setState(80);
      return;
    };
    if(value < 20) {
      setState(20);
      return;
    };
    setState(value);
  };

  return (
    <div className={styles.container}>
      <input 
        placeholder={20}
        type="number"
        className={styles.rate_input}
        value={state}
        onChange={handleChange}
      />
      <button 
        className={styles.button}
        onClick={() => setRate(prevRate => ({
          ...prevRate, 
          getHigher: state >= rate.rate,
          rate: state,
        }))}
      >Change Rate</button>
    </div>
  )
}
