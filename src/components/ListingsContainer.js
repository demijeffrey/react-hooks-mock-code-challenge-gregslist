import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  // console.log(listings)

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  function handleDelete(id) {
    const filteredListings = listings.filter(listing => listing.id !== id)
    setListings(filteredListings)
  }

  let listingsToDisplay = listings
    .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    .map(listing => <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete} />)

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
