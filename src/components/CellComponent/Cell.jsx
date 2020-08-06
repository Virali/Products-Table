import React from "react";

import styles from './cellStyles.module.css';

const Cell = (props) => {
  console.log(props);
  const {
    productName,
    price,
    quantity,
  } = props;
  console.log(productName);

  return(
    <div className={styles.product_box} >
      <div name='product-name' className={styles.product_name} >
        {productName}({quantity})
      </div>
      <div name='price' className={styles.product_price} >
        {price}
      </div>
    </div>
  );
}

export default Cell;
