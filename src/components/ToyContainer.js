import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ onDeleteToy, onUpdateToy, toys, setToys }) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onUpdateToy={onUpdateToy}
          onDeleteToy={onDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
