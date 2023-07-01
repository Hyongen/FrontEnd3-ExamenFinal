import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const showData = () => {
    const existingData = localStorage.getItem("dentistasFav");
    let favArray = [];

    if (existingData) {
      try {
        favArray = JSON.parse(existingData);
        if (!Array.isArray(favArray)) {
          throw new Error("Los datos existentes no son un array válido.");
        }
      } catch (error) {
        console.error("Error al parsear los datos existentes del localStorage:", error);
        return [];
      }
    }

    console.log(favArray);
    return favArray;
    
  };



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        
        {
         showData().map((dentist) => (<Card key={dentist.id} id={dentist.id} name={dentist.name}
          username={dentist.username} />))
        };

      </div>
    </>
  );
};

export default Favs;
