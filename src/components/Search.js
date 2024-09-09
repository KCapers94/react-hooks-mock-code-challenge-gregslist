import React from "react";

function Search({setSearchedItems,searchItems, setSubmittedSearched}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearched(searchItems)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItems}
        onChange={(e) => setSearchedItems(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
