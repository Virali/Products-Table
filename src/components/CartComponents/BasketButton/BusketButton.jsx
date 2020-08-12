import React, { useState } from 'react';

import black from "./icons8-shopping-cart-100.png";
import white from "./icons8-shopping-cart-100-white.png";

import styles from "./basketButtonStyles.module.css";

const BasketButton = ({onClick:handleClick}) => {
  const [imageColor, setImageColor] = useState(black);

  return(
    <div 
      className={styles.container}
      onMouseEnter={() => {setImageColor(white)}} 
      onMouseLeave={() => setImageColor(black)}
      onClick={handleClick}
    >
      <img src={imageColor} alt="basket icon" className={styles.basket_image}/>
    </div>
  );
}

export default BasketButton;
