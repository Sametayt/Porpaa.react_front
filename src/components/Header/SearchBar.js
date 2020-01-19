import React from 'react';
import { Link } from 'react-router-dom';
import { AsyncSeriesHook } from 'tapable';

const SearchBar = props => {
  return (
    <form className="c-header-search u-large-margin-horizontal u-position-relative">
      <input type="text" className="c-header-search__input" />
      <i className="fa fa-search c-header-search__icon" />
    </form>
  );
};

export default SearchBar;
