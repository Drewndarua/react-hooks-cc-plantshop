import React from "react";

function NewPlantForm() {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
      <div className="plant-list">
        {filterdPlants.map ((plant) => ( 
        <PlantCard 
          key={plant.id}
          plant={plant}
          markAsSoldOut={markAsSoldOut}
        />
        ))}
      </div>
    </div>
  );
}

export default NewPlantForm;
