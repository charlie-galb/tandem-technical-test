import React from "react";

interface Props {
    setQuery: (text: string) => void;
}

const SearchBar = (props: Props) => {
    const { setQuery } = props
  return (
  <input 
  placeholder='Search by bus number'
  onChange={event => setQuery(event.target.value)}
  data-testid='search-bar-input'
  />
  );
};

export default SearchBar;
