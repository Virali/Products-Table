import React from "react";
import CellContainer from "../CellContainerComponent/CellContainer";

import styles from "./categoryContainer.module.css";

const CategoryContainer = (props) => {
  const {
    categories
  } = props;

  const mappedCategories = categories.map((category,index) => 
    <CellContainer
      key={index} 
      groupName={category.categoryName}
      items={category.items}
    /> 
  )

  return(
    <div className={styles.container}>
      {mappedCategories}
    </div>
  );
}

export default CategoryContainer;
