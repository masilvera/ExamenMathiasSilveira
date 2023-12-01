import React from "react";
import { Link } from "react-router-dom";
import { useCharContext } from "../utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useCharContext();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme === "dark" ? "light" : "dark"}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dentist/1">Dentist</Link>
      <Link to="/favs">Favorites</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;


