export const initialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          ...action.item,
          quantity: 1
        }
      ];
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'SET_QUANTITY': 
      return state.map(item => 
        item.id === action.id
          ? {
            ...item,
            quantity: action.quantity
          }
          : item
      );

    default:
      return state;
  }
};
