import React, { useContext } from 'react';

import styles from './basketStyles.module.css';

import LabelBox from "../LabelBox/LabelBox";
import { useCartValue } from "../../../contexts/cartContext";
import BasketItem from "../BasketItem/BasketItem";
import { RateContext } from "../../RateChanger/RateChangeProvider";

function BasketContainer() {
  const [cartState] = useCartValue();
  const [rateValue] = useContext(RateContext);
  const totalPrice = Number
    .parseFloat(cartState.reduce((accum,current) => accum + current.price * current.quantity * rateValue.rate, 0))
    .toFixed(2);

  const mappedItems = cartState.map(item => 
    <BasketItem
      key={item.id}
      id={item.id}
      productName = {item.name}
      price = {item.price * rateValue.rate}
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
        Общая стоимость: <div>{totalPrice} руб</div>
      </div>
    </div>
  );
}

export default BasketContainer;
