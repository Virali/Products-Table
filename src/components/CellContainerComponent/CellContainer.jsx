import React, { useState } from "react";

import styles from "./containerStyles.module.css";

import Cell from '../CellComponent/Cell';

const CellContainer = (props) => {
  const {
    groupName,
    items,
  } = props;

  const [showStatus, toggleShow] = useState(true);

  let oddEvenStyle = (items.length % 2) ? styles.flex_basis_odd : styles.flex_basis_even;

  const mappedItems = items.map(item => 
    <Cell
      id={item.itemID}
      productName={item.itemName}
      quantity={item.itemQuantity}
      price={item.itemPrice}
      key={item.itemID}
      className={oddEvenStyle}
    />
  );

  function handleClick() {
    toggleShow(!showStatus);
  }

  return(
    <div className={styles.main_container}>
      <div className={styles.toggler} onClick={handleClick} >
        <i className={`${styles.arrow} ${showStatus ? styles.up : styles.down}`} />
        {"  "}{groupName}
      </div>
      {showStatus && 
        <div className={styles.flex_container} name="item_container">
        {mappedItems}
        </div>
      }
    </div>
  );
}

export default CellContainer;
