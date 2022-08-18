import React, { useState } from 'react';
import { AppContext } from './AppContext';

export const AppContextWrapper = props => {
  const [pizzas, setPizzas] = useState([]);

  return (
    <AppContext.Provider values={{ pizzas, setPizzas }}>
      {props.children}
    </AppContext.Provider>
  );
};
