import React, { useState } from 'react';
import { AppContext } from './AppContext';

export const ContextCombiner = props => {
  const [pizzas, setPizzas] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider value={{ pizzas, setPizzas, search, setSearch }}>
      {props.children}
    </AppContext.Provider>
  );
};
