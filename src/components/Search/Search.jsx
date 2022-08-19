import React, { useState, useRef } from 'react';
import { ResetImg, SearchImg } from '../../img/icons';
import styles from './Search.module.scss';

export const Search = ({ search, setSearch }) => {
  const inputRef = useRef(null);
  console.log(search);

  const onClickClear = () => {
    setSearch('');
  };

  return (
    <div className={styles.root}>
      <SearchImg className={styles.icon} />
      <input
        ref={inputRef}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {search && (
        <ResetImg onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  );
};
