import React, { useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { ResetImg, SearchImg } from '../../img/icons';
import styles from './Search.module.scss';

export const Search = () => {
  const { search, setSearch } = React.useContext(AppContext);
  const inputRef = useRef(null);

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
