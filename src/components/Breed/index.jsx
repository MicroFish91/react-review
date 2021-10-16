import { useEffect, useState } from "react";

const Breed = ({ selectedBreed }) => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(async () => {
    const imageJSON = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    );
    const image = await imageJSON.json();

    setDogImage(image.message);
  }, [selectedBreed]);

  return (
    <div>
      <h1>{selectedBreed}</h1>
      <img src={dogImage} alt="" />
    </div>
  );
};

export default Breed;
