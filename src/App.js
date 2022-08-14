import React, { useState, useEffect } from 'react';
import './App.css';
import './scss/app.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://62f897b43eab3503d1d855b0.mockapi.io/api/items')
      .then(response => response.json())
      .then(result => setPizzas(result))
      .then(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {pizzas.map(pizza => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
