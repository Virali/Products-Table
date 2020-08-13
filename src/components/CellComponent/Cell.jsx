import React, { useContext } from "react";

import { useCartValue } from "../../contexts/cartContext";
import { addItem, removeItem} from "../../actions/actionCreators";
import { RateContext } from "../RateChanger/RateChangeProvider";

import styles from './cellStyles.module.css';

const Cell = (props) => {
  const {
    id,
    productName,
    price,
    quantity: maxQuantity,
    className,
  } = props;

  const [cartState, dispatch] = useCartValue();
  const [rateValue] = useContext(RateContext);
  const inCart = Boolean(cartState.find(item => item.id === id));

  function handleClick() {
    if(inCart) {
      dispatch(removeItem(id));
    }
    else dispatch(addItem({
      id: id,
      name: productName,
      price: price,
      maxQuantity: maxQuantity,
    }));
  };

  return(
    <div 
    className={`${styles.product_box} ${className} ${inCart ? styles.choosed : ''}`}
    onClick={handleClick} 
    >
      <div name='product-name' className={styles.product_name} >
        {productName}({maxQuantity})
      </div>
      <div 
        name='price'
        className={`${styles.product_price} ${rateValue.getHigher ? styles.higher_rate : styles.less_rate}`}
      >
        {(price*rateValue.rate).toFixed(2)}
      </div>
    </div>
  );
}

export default Cell;
