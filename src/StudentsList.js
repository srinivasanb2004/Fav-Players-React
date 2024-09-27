import React, { useContext } from "react";
import { StudentsContext } from "./StudentsContext";

const StudentsList = () => {
  const { students, favorites, addToFavorites } = useContext(StudentsContext);

  return (
    <div>
      <h1>Cricketer's List</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>
            {student}
            <button
              onClick={() => addToFavorites(student)}
              disabled={favorites.includes(student)}
            >
              {favorites.includes(student) ? "Added" : "Add to Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
