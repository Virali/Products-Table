import React, { useState } from "react";

import styles from "./containerStyles.module.css";

import Cell from '../CellComponent/Cell';

const CellContainer = (props) => {
  const {
    groupName,
    items,
  } = props;

  const [showStatus, toggleShow] = useState(false);

  const mappedItems = items.map((item,index) => 
    <Cell
      productName={item.itemName}
      quantity={item.itemQuantity}
      price={item.itemPrice}
      key={index}
    />
  );

  function handleClick() {
    toggleShow(!showStatus);
  }

  return(
    <div>
      <div name="toggler" onClick={handleClick} >
        <i className={`${styles.arrow} ${showStatus ? styles.up : styles.down}`} />
        {groupName}
      </div>
      <div name="item_container">
        {mappedItems}
      </div>
    </div>
  );
}

export default CellContainer;
