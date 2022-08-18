import React, { useState } from 'react';
import { sortNames } from '../../StaticData';

export const Sort = ({ sort, setSort, order, setOrder }) => {
  const [isSort, setIsSort] = useState(false);

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <div onClick={() => setIsSort(!isSort)}>
          {isSort ? <span>&#9650;</span> : <span>&#9660;</span>}
          <span>{sort}</span>
        </div>
        <div onClick={() => setOrder(!order)} className="order">
          {order ? <span>&darr;</span> : <span>&uarr;</span>}
        </div>
      </div>

      {isSort && (
        <div className="sort__popup">
          <ul>
            {sortNames.map(el => (
              <li
                key={el}
                onClick={() => {
                  setSort(el), setIsSort(false);
                }}
                className={sort === el ? 'active' : ''}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
