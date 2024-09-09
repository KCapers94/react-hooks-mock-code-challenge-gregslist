import React from "react";
import Search from "./Search";

function Header({setSearchedItems,searchItems,filteredListings,submittedSearch, setSubmittedSearched}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search  setSearchedItems={setSearchedItems} searchItems={searchItems} filteredListings={filteredListings}  submittedSearch={submittedSearch} setSubmittedSearched={setSubmittedSearched} />
    </header>
  );
}

export default Header;
