import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const CharContext = createContext();

const initialState = {
  theme: "",
  data: [],
  favorites: JSON.parse(localStorage.getItem('favs')) || [],
};

const CharProvider = ({ children, theme }) => {
  const [state, dispatch] = useReducer(reducer, initialState, theme);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <CharContext.Provider value={{ state, dispatch }}>
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;

export const useCharContext = () => useContext(CharContext);
