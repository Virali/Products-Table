import React from "react";

import styles from "./BasketItemStyles.module.css";

import QuantityInput from "./QuantityInput";

const BasketItem = (props) => {
  const {
    productName,
    price,
    maxQuantity,
    handleDelete,
  } = props;

  return(
    <div name='item_container' className={styles.info_container}>
      <div name='item_name' className={styles.name}>
        {productName}
      </div>
      <QuantityInput maxQuantity={maxQuantity} />
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
