import React from 'react';

import './App.css';

import CategoryContainer from './components/CategoryContainerComponent/CategoryContainer.jsx';
import BasketButton from "./components/CartComponents/BasketButton/BusketButton";
import {CartStateProvider} from "./CartContext";
import Modal from "./components/Modal/Modal";
import BasketContainer from "./components/CartComponents/BasketContainer/BasketContainer";

import categorisedGoods from './data/modifyData';

function App() {
  console.log(categorisedGoods);
  const initialState = [];

  const reducer = (state, action) => {
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

  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <CartStateProvider initialState={initialState} reducer={reducer} >
      <div className="App">
        <BasketButton onClick={() => setModalOpen(true)}/>
        <CategoryContainer categories = {categorisedGoods} />
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} >
          <BasketContainer />
        </Modal>
      </div>
    </CartStateProvider>
  );
}

export default App;
