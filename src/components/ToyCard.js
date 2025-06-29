import React from "react";

function ToyCard({ onDeleteToy, onUpdateToy, toy }) {
  const { id, name, image, likes } = toy;
  const toyUrl = "http://localhost:3001/toys/" + id;

  const handleLikesClick = () => {
    fetch(toyUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((response) => response.json())
      .then(onUpdateToy);
  };

  const handleDeleteClick = () => {
    fetch(toyUrl + id, {
      method: "DELETE",
    }).then(() => onDeleteToy(toy));
  };
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleLikesClick} className="like-btn">
        Like {"<3"}
      </button>
      <button onClick={handleDeleteClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
