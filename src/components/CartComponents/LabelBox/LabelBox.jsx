import React from "react";

import styles from "./LabelBoxStyles.module.css";

const LabelBox = () => {
  return(
    <div name="labelBox" className={styles.label_box}>
      <div className={styles.name} > Наименование товара и описание</div>
      <div className={styles.quantity} > Количество</div>
      <div className={styles.price} > Цена</div>
    </div>
  );
}

export default LabelBox;
