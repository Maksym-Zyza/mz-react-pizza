import React from 'react';
import './App.css';
import './scss/app.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';

const App = () => {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="piza1" prise="15" />
              <PizzaBlock title="piza2" prise="20" />
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
