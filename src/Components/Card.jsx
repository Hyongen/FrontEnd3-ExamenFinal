import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {newData} = useContext(ContextGlobal);

  const addFav = (id)=>{
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
        return;
      }
    }

    const exists = favArray.some((item) => item.id === newData.data[id - 1].id);
    if (exists) {
      return;
    }
    favArray.push(newData.data[id - 1]);
    console.log(favArray)

    localStorage.setItem("dentistasFav", JSON.stringify(favArray));
  }

  return (
    <div className="card">
        <p>{id}</p>
        <p>{username}</p>
        {/* <img src="/images/doctor.jpg" alt="doctor placeholder" /> */}
        
        <Link to={`/detail/${id}`}>
        {name}
        </Link>

        <button onClick={() => addFav(id)} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
