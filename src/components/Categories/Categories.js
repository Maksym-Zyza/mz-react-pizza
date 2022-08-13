import React from 'react';
import { categories } from '../../StaticData';

export const Categories = () => {
  const [active, setActive] = React.useState('');

  return (
    <div className="categories">
      <ul>
        {categories.map(el => (
          <li
            key={el}
            onClick={e => setActive(e.target.innerText)}
            className={active === el ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
