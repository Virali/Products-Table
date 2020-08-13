import React, { useReducer } from 'react';

export const StateProvider = ({contextObject, reducer, initialState, children}) => (
  <contextObject.Provider value={useReducer(reducer, initialState)}>
    {children}
  </contextObject.Provider>
);
