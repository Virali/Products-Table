import React, { useState } from 'react';

import styles from "./QuantityInputStyles.module.css";

export default function QuantityInput(props) {
  const {
    maxQuantity,
  } = props;

  const [quantityInput, setQuantityInput] = useState(1);

  function handleChange(e) {
    let value = Number(e.target.value);
    
    (value >= maxQuantity)
      ? setQuantityInput(maxQuantity)
      : setQuantityInput(value);
  };

  function WarningBanner(props) {
    if(props.value < props.maxQuantity && props.maxQuantity >= 10) {
      return null;
    };

    return(
      <div name='alert' className={styles.alert}>
        Количество ограничено: {props.maxQuantity}
      </div>
    );
  };

  return (
    <div name='item_quantity_input' className={styles.quantity} >
        <input type="number" min={1} value={quantityInput} onChange={handleChange} /> шт
        <WarningBanner value={quantityInput} maxQuantity={maxQuantity} />
    </div>
  );
}
