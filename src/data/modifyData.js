import { v4 as uuidv4 } from 'uuid';

import data from './data.json';
import names from './names.json';

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

// func that gets all needed information and with names from names.json and returns array with only needed properties
const goods = data.Value.Goods.map(element => {
  return {
    categoryName: names[element.G].G,
    itemID: uuidv4(),
    itemName: names[element.G].B[element.T].N,
    itemQuantity: element.P,
    itemPrice: element.C,
  };
})


// reduce help us to make categories by group name like this [{groupName: 'name', items: {}},]
const categorisedGoods = goods.reduce((acc, item) => {
  const {
    categoryName,
    ...product
  } = item;

  acc.forEach(category => {
    if(category.categoryName === categoryName) {
      category.items.push(product);
    } 
  });

  return acc;
}, // create default array of object with unique category names
  goods.map(item => 
    item.categoryName  
  )
  .filter(onlyUnique)
  .map(categoryName => {
    return {
      categoryName,
      items: [],
    };
  })
);

export default categorisedGoods;
