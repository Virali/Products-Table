import React from 'react';

import styles from "./QuantityInputStyles.module.css";

import { useCartValue } from "../../../contexts/cartContext";
import { setQuantity } from "../../../actions/actionCreators";

export default function QuantityInput(props) {
  const {
    id
  } = props;

  const [cartState, dispatch] = useCartValue();
  const item = cartState.find(elem => elem.id === id);
  const maxQuantity = item.maxQuantity;

  function handleChange(e) {
    let value = Number(e.target.value);
    
    (value >= maxQuantity)
      ? dispatch(setQuantity(id, maxQuantity))
      : dispatch(setQuantity(id, value));
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
        <input type="number" min={1} value={item.quantity} onChange={handleChange} /> шт
        <WarningBanner value={item.quantity} maxQuantity={maxQuantity} />
    </div>
  );
}
