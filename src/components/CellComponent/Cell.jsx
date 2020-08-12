import React from "react";

import { useStateValue } from "../../CartContext";

import styles from './cellStyles.module.css';

const Cell = (props) => {
  const {
    id,
    productName,
    price,
    quantity: maxQuantity,
    className,
  } = props;

  const [cartState, dispatch] = useStateValue();
  const inCart = Boolean(cartState.find(item => item.id === id));

  function handleClick() {
    dispatch({
      type: inCart
      ? 'REMOVE'
      : 'ADD',
      item: {
        id: id,
        name: productName,
        price: price,
        maxQuantity: maxQuantity,
      },
    });
  }

  return(
    <div 
    className={`${styles.product_box} ${className} ${inCart ? styles.choosed : ''}`}
    onClick={handleClick} 
    >
      <div name='product-name' className={styles.product_name} >
        {productName}({maxQuantity})
      </div>
      <div name='price' className={styles.product_price} >
        {price}
      </div>
    </div>
  );
}

export default Cell;
