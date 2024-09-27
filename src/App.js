import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentsList from './StudentsList';
import FavoriteStudents from "./FavoriteStudents";
import { StudentsProvider } from "./StudentsContext";
import './App.css';

function App() {

  return (
    <StudentsProvider>
      <div className="container">
        <Router>
          <nav>
            <Link to="/">Cricketer's List</Link> |
            <Link to="/favorites"> Favorite Cricketer's</Link>
          </nav>
          <Routes>
            <Route path="/" element={<StudentsList />} />
            <Route path="/favorites" element={<FavoriteStudents />} />
          </Routes>
        </Router>
      </div>
    </StudentsProvider>
  );
}

export default App;
