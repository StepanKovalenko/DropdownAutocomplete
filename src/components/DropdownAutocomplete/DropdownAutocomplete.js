import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './DropdownAutocomplete.scss';

const DropdownAutocomplete = ({ options, getValue }) => {

  const [isDisplayed, setDisplayed] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrapper } = wrapperRef;
    if (wrapper && !wrapper.contains(event.target)) {
      setDisplayed(false);
    }
  };

  const updateValue = value => {
    setSearch(value);
    getValue(value);
    setDisplayed(false);
  };

  return (
    <div ref={wrapperRef} className="dropdown-autocomplete">
      
      <input
        className="input"
        placeholder="Type to search"
        value={search}
        onClick={() => setDisplayed(!isDisplayed)}
        onChange={event => setSearch(event.target.value)}
      />
      
      <span className="clear-btn" onClick={() => updateValue('')}>x</span>

      {isDisplayed && (
        <ul className="options">
          {options
            .filter(({ value }) => value.toString().indexOf(search.toString().toLowerCase()) > -1)
            .map((item, i) => (
              <li
                onClick={() => updateValue(item.value)}
                onKeyDown={(event) => event.keyCode === 13 && updateValue(item.value)}
                className="option"
                key={'dropdown-item-' + i}
                tabIndex="0"
              >
                <span>{item.value}</span>
              </li>
              )
            )
          }
        </ul>
      )}

    </div>
  );
};

DropdownAutocomplete.propTypes = {
  options: PropTypes.array.isRequired,
};

export default DropdownAutocomplete;
