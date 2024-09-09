import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onDeleteClick,filteredListings}) {


  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        
          {filteredListings.map((item) => {
            return <ListingCard key={item.id} item={item} onDeleteClick={onDeleteClick} />})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
