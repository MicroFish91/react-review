import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Dogs.css";

const Dogs = ({ selectBreed }) => {
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(async () => {
    const dogBreedsJSON = await fetch("https://dog.ceo/api/breeds/list/all");
    const newDogBreeds = await dogBreedsJSON.json();
    setDogBreeds(newDogBreeds.message);
  }, []);

  return (
    <>
      <h1>Dog Breeds</h1>
      <div className="Dogs-list">
        {Object.keys(dogBreeds).map((breedName) => (
          <div key={uuidv4()} onClick={selectBreed} className="Dog">
            {breedName}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dogs;
