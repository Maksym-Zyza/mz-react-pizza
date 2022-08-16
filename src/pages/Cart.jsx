import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem/CartItem';
import { BackImg, CartImg, ClearImg } from '../img/icons';

export const Cart = () => {
  const [items, setItems] = useState([]);

  const onClickClear = () => {
    console.log('onClickClear');
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartImg />
            Cart
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <ClearImg />
            <span>Clear cart</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item, i) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              All pizzas: <b>{'[totalCount]'} pcs.</b>
            </span>
            <span>
              Order amount: <b>{'[totalPrice]'} $</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <BackImg />
              <span>Return back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
