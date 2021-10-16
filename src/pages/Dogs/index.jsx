import { useState } from "react";
import Breed from "../../components/Breed";
import DogsComponent from "../../components/Dogs";
import CardLayout from "../../Layouts/CardLayout";

const Dogs = () => {
  const [breedChoice, setBreedChoice] = useState("");

  const selectBreed = (e) => {
    setBreedChoice(e.target.innerText);
  };

  return (
    <>
      <CardLayout>
        <DogsComponent selectBreed={selectBreed} />
      </CardLayout>

      {breedChoice && (
        <CardLayout>
          <Breed selectedBreed={breedChoice} />
        </CardLayout>
      )}
    </>
  );
};

export default Dogs;
