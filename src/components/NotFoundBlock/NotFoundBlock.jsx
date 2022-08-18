import React from 'react';
import style from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={style.main}>
      <span>😕</span>
      <br />
      <h1>Nothing not found</h1>
      <p>Unfortunately, this page is not available in our online store</p>
    </div>
  );
};
