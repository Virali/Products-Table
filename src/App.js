import React from 'react';

import './App.css';

import './components/CellComponent/Cell.jsx';
import CategoryContainer from './components/CategoryContainerComponent/CategoryContainer.jsx';

import categorisedGoods from './data/modifyData';


function App() {
  console.log(categorisedGoods);
  return (
    <div className="App">
      <header className="App-header" >
        <CategoryContainer
          categories = {categorisedGoods}
        />
      </header>
    </div>
  );
}

export default App;
