import React from "react";

const Input = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="search-box__input"
      placeholder="Поиск по названию картины"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Input;
