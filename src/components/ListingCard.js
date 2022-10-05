import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {

  const [favButton, setFavButton] = useState(false)
  // console.log(listing)

    return (
      <li className="card">
        <div className="image">
          <span className="price">$0</span>
          <img src={listing.image} alt={"description"} />
        </div>
        <div className="details">
          {favButton ? (
            <button className="emoji-button favorite active" onClick={() => setFavButton(!favButton)}>★</button>
          ) : (
            <button className="emoji-button favorite" onClick={() => setFavButton(!favButton)}>☆</button>
          )}
          <strong>{listing.description}</strong>
          <span> · {listing.location}</span>
          <button className="emoji-button delete" onClick={() => handleDelete(listing.id)}>🗑</button>
        </div>
      </li>
    );


  // return (
  //   <li className="card">
  //     <div className="image">
  //       <span className="price">$0</span>
  //       <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
  //     </div>
  //     <div className="details">
  //       {true ? (
  //         <button className="emoji-button favorite active">★</button>
  //       ) : (
  //         <button className="emoji-button favorite">☆</button>
  //       )}
  //       <strong>{"description"}</strong>
  //       <span> · {"location"}</span>
  //       <button className="emoji-button delete">🗑</button>
  //     </div>
  //   </li>
  // );
}

export default ListingCard;
