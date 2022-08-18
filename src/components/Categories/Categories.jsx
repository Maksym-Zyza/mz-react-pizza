import React from 'react';
import { categories } from '../../StaticData';

export const Categories = ({ category, setCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map(el => (
          <li
            key={el}
            onClick={e => setCategory(e.target.innerText)}
            className={category === el ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
