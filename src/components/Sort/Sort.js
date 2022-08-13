import React, { useState } from 'react';
import { sortNames } from '../../StaticData';

export const Sort = () => {
  const [selectedSots, setSelectedSots] = useState(sortNames[0]);
  const [isSots, setIsSots] = useState(false);

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <div onClick={() => setIsSots(!isSots)}>
          <b>{isSots ? <span>&#9660;</span> : <span>&#9650;</span>}</b>
          <span>{selectedSots}</span>
        </div>
      </div>

      {isSots && (
        <div className="sort__popup">
          <ul>
            {sortNames.map(el => (
              <li
                key={el}
                onClick={() => {
                  setSelectedSots(el), setIsSots(false);
                }}
                className={selectedSots === el ? 'active' : ''}
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
