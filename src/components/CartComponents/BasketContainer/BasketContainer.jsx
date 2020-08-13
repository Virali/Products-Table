import React from 'react';

import styles from './basketStyles.module.css';

import LabelBox from "../LabelBox/LabelBox";
import { useCartValue } from "../../../contexts/cartContext";
import BasketItem from "../BasketItem/BasketItem";

function BasketContainer() {
  const [cartState] = useCartValue();

  const mappedItems = cartState.map(item => 
    <BasketItem
      key={item.id}
      id={item.id}
      productName = {item.name}
      price = {item.price}
      maxQuantity = {item.maxQuantity}
    />
  );

  return(
    <div className={styles.container}>
      <div name='Table' className={styles.table}>
        <LabelBox />
        {mappedItems}
      </div>
      <div name='Total price' className={styles.total_price}>
        Общая стоимость: <div>{cartState.reduce((accum,current) => accum + current.price * current.quantity, 0)} руб</div>
      </div>
    </div>
  );
}

export default BasketContainer;
