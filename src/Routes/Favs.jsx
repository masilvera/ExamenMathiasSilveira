import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../utils/global.context";

const Favs = () => {
 const { state } = useCharContext();
 const getFavs = () => {const favs = JSON.parse(localStorage.getItem("favs")) || [];
   return favs.map((fav) => ({
     id: fav.id,
     name: fav.name,
   }));
 };

 return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${state.theme}`}>
        {getFavs().map((fav) => (
          <Card key={fav.id} id={fav.id} name={fav.name} />
        ))}
      </div>
    </>
 );
};

export default Favs;