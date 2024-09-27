import React, { useContext } from "react";
import { StudentsContext } from "./StudentsContext";

const FavoriteStudents = () => {

  const { favorites, removeFromFavorites } = useContext(StudentsContext);

  return (

    <div>
      <h1>Favorite Cricketer's</h1>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((student) => (
            <li key={student}>
              <span>{student}</span>
              <button onClick={() => removeFromFavorites(student)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="no-favorites">No favorite Players added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteStudents;
