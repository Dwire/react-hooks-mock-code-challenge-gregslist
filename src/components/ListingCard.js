import React, { useState } from "react";

function ListingCard({handleDelete, location, description, goodId, image = "https://via.placeholder.com/300x300"}) {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(liked => !liked)
  }

  const  deleteFetch = () => {
    fetch(`http://localhost:6001/listings/${goodId}`, {
      method: "DELETE"
    })
  }

  const grabIdForDelete = () => {
    handleDelete(goodId)
    deleteFetch()
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={toggleLike} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleLike} >☆</button>
        )}
        <strong>{description}</strong>
        <span>{location}</span>
        <button className="emoji-button delete" onClick={grabIdForDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
