import React, { createContext, useState } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {

  const [students] = useState([
    "Virat Kohli",
    "AB de villiers",
    "Rohit Sharma",
    "Glenn Maxwell",
    "MS Dhoni",
    "Suresh Raina",
    "Risabh Pant",
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <StudentsContext.Provider
      value={{ students, favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </StudentsContext.Provider>
  );
};
