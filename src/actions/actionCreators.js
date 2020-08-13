export function addItem(item) {
  return {
    type: 'ADD',
    item: item
  }
};

export function removeItem(id) {
  return {
    type: 'REMOVE',
    id: id
  }
};

export function setQuantity(id, quantity) {
  return {
    type: 'SET_QUANTITY',
    id: id,
    quantity: quantity,
  }
};
