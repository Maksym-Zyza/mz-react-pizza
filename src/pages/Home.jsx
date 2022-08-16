import React, { useState, useEffect } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    fetch('https://62f897b43eab3503d1d855b0.mockapi.io/api/items')
      .then(response => response.json())
      .then(result => setPizzas(result))
      .then(error => console.log(error))
      .finally(() => setIsLoader(false));

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoader
          ? [...new Array(8)].map((_, ind) => <Skeleton key={ind} />)
          : pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};
