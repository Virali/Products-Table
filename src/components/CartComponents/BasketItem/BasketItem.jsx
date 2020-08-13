import React from "react";

import styles from "./BasketItemStyles.module.css";

import QuantityInput from "./QuantityInput";

import { useCartValue } from "../../../contexts/cartContext";
import { removeItem } from "../../../actions/actionCreators";

const BasketItem = (props) => {
  const {
    id,
    productName,
    price,
  } = props;

  const {1: dispatch} = useCartValue();

  function handleDelete() {
    dispatch(removeItem(id));
  }

  return(
    <div name='item_container' className={styles.info_container}>
      <div name='item_name' className={styles.name}>
        {productName}
      </div>
      <QuantityInput id={id} />
      <div name='item_price' className={styles.price} >
        {price} руб. / шт
      </div>
      <div name='delete' onClick={handleDelete} className={styles.delete_button} >
        Удалить
      </div>
    </div>
  );
}

export default BasketItem;
