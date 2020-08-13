import React from 'react';

import './App.css';

import { StateProvider } from "./ContextCreator";
import { initialState, cartReducer } from "./reducers/cartReducer";
import { CartContext } from "./contexts/cartContext";
import { RateProvider } from "./components/RateChanger/RateChangeProvider";

import CategoryContainer from './components/CategoryContainerComponent/CategoryContainer.jsx';
import BasketButton from "./components/CartComponents/BasketButton/BusketButton";
import Modal from "./components/Modal/Modal";
import BasketContainer from "./components/CartComponents/BasketContainer/BasketContainer";
import RateChanger from "./components/RateChanger/RateChanger";

import categorisedGoods from './data/modifyData';

function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <RateProvider>
      <StateProvider contextObject={CartContext} initialState={initialState} reducer={cartReducer} >
        <div className="App">
          <BasketButton onClick={() => setModalOpen(true)}/>
          <RateChanger />
          <CategoryContainer categories = {categorisedGoods} />
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} >
            <BasketContainer />
          </Modal>
        </div>
      </StateProvider>
    </RateProvider>
  );
}

export default App;
