import React, { useState } from 'react';

const RateContext = React.createContext([{}, () => {}]);

const RateProvider = (props) => {
  const [rate, setRate] = useState({rate:20, getHigher: false});
  return (
    <RateContext.Provider value={[rate, setRate]}>
      {props.children}
    </RateContext.Provider>
  );
}

export { RateContext, RateProvider };