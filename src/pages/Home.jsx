import React, { useState, useEffect } from 'react';
// import { ApsContext } from '../context/AppContext';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { sortNames } from '../StaticData';
import { categories } from '../StaticData';

export const Home = () => {
  // const { pizzas, setPizzas } = useContext(ApsContext);
  const [pizzas, setPizzas] = useState([]);
  const [category, setCategory] = React.useState('All');
  const [sort, setSort] = useState(sortNames[0]);
  const [order, setOrder] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  console.log(category);

  useEffect(() => {
    let sortValue = '';
    const orderValue = order ? 'desc' : 'asc';
    switch (sort) {
      case 'Popularity':
        sortValue = '?sortBy=rating&order=' + orderValue;
        break;
      case 'Price':
        sortValue = '?sortBy=price&order=' + orderValue;
        break;
      case 'Alphabet':
        sortValue = '?sortBy=name&order=' + orderValue;
        break;
    }

    const searchValue =
      category !== 'All' ? `&category=${categories.indexOf(category)}` : '';

    fetch(
      `https://62f897b43eab3503d1d855b0.mockapi.io/api/items${sortValue}${searchValue}`,
    )
      .then(response => response.json())
      .then(result => setPizzas(result))
      .then(error => console.log(error))
      .finally(() => setIsLoader(false));

    window.scrollTo(0, 0);
  }, [sort, order, category]);

  return (
    <>
      <div className="content__top">
        <Categories category={category} setCategory={setCategory} />
        <Sort sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
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
