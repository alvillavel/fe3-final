import React, { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Cargamos los favoritos desde localStorage
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return state; // Evitarmos duplicados
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Se Sincronizan favoritos con localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

