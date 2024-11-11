import React, { useState, useEffect }from "react";
import Header from "Header";
import PlantPage from "PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
 
  useEffect(() => {
    fetch('https://localhost:3001/plants')
    .then((response) => response.json())
    .then((data) => setPlants())
    .catch((error) => console.error('Error fetching plants', error));
  }, []);

  const addPlant = (name) => {
    const newPlant = { 
      id: plants.length + 1,
      name,
      isSoldOut: false, 
    };

    fetch('https://localhost:3001/plants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant),
    })
    .then((reponse) => reponse.json())
    .then((savedPlant) => {
      setPlants([...plants, savedPlant]);
    });
  };

  const markAsSoldOut = (id) => {
    const plantToUpdate = plants.find((plant) => plant.id === id);

    fetch(`https://localhost:3001/plants/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({isSoldOut: true}),
    })
    .then((repsone) => repsone.json())
    .then((updatePlant) => {
      setPlants(plants.map((plant) => 
        plant.id === id ? updatedPlant : plant 
      ));
    });
  };

  const filterPlants = plants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

     return <Header />
      return <PlantPage />
  
}

export default App;
