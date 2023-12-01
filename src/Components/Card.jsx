import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = favorites.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      const newFavorites = [...favorites, { id, name, username }];
      localStorage.setItem('favs', JSON.stringify(newFavorites));
      alert('Dentist added to favorites!');
    } else {
      alert('Dentist is already in favorites!');
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt={`Dentist ${name}`} />

      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>

      <Link to={`/dentist/${id}`}>Details</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
