import React from 'react';
import { Link } from 'react-router-dom';
import { PizzaLogo, CartImg } from '../../img/icons';
import { Search } from '../Search/Search';

export const Header = ({ search, setSearch }) => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <PizzaLogo width="38" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>

        <Search search={search} setSearch={setSearch} />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>52 $</span>
            <div className="button__delimiter"></div>
            <CartImg />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
