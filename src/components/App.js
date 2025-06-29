import React, { useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  const handleAddNewToy = (newToy) => {
    setToys([...toys, newToy]);
  };
  const handleDeleteToy = (deletedToy) => {
    const updatedToys = toys.filter((toy) => toy !== deletedToy);
    setToys(updatedToys);
  };
  const handleUpdateToy = (updatedToy) => {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  };
  return (
    <>
      <Header />
      {showForm && <ToyForm onNewToy={handleAddNewToy} />}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        setToys={setToys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
