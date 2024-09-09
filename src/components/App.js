import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchItems,setSearchedItems] = useState("")
  const [submittedSearch, setSubmittedSearched] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListings(data))
  },[])

  function handleDelete(listing) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method:"DELETE",
    })
    .then((r) => r.json())
    .then(() => handleDeleteClick(listing))
  }

  function handleDeleteClick(deleteditem){
    const updatedListings = listings.filter((item) => item.id !== deleteditem.id)
    setListings(updatedListings)
  }

  const filteredListings = listings.filter((item) => {
      if( submittedSearch === ""){
        return item
      }
        return item.description.toUpperCase().includes(submittedSearch.toUpperCase())})
  

  return (
    <div className="app">
      <Header setSearchedItems={setSearchedItems} searchItems={searchItems} filteredListings={filteredListings} submittedSearch={submittedSearch} setSubmittedSearched={setSubmittedSearched}/>
      <ListingsContainer listings={listings} onDeleteClick={handleDelete} filteredListings={filteredListings}   />
    </div>
  );
}

export default App;
