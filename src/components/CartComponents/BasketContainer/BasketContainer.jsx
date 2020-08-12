import React from 'react';

import styles from './basketStyles.module.css';

import LabelBox from "../LabelBox/LabelBox";
import { useStateValue } from "../../../CartContext";
import BasketItem from "../BasketItem/BasketItem";

function BasketContainer() {
  const [cartState, dispatch] = useStateValue();

  const mappedItems = cartState.map(item => 
    <BasketItem
      key={item.id}
      productName = {item.name}
      price = {item.price}
      maxQuantity = {item.maxQuantity}
      handleDelete = {() => dispatch({
        type: 'REMOVE',
        id: item.id,
      })}
    />
  );

  return(
    <div className={styles.container}>
      <div name='Table' className={styles.table}>
        <LabelBox />
        {mappedItems}
      </div>
      <div name='Total price' className={styles.total_price}>
        Общая стоимость: <div>{cartState.reduce((accum,current) => accum + current.price, 0)} руб</div>
      </div>
    </div>
  );
}

export default BasketContainer;
