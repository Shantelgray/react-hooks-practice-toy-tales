import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/toys/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((onNewToy) => {
        addNewToy(onNewToy);
        setFormData({
          name: "",
          image: "",
          likes: "",
        });
      });
  };
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3> Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="likes"
          placeholder="Enter the Likes"
          className="input-text"
          value={formData.likes}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
