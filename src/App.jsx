// src/App.jsx
import React from "react";
import "./App.css";
import Greeting from "./Greeting.jsx";

const students = ["Scott", "Stefano", "Mei", "Michael", "Martha", "Abigail"];
function App() {
  return (
    <div className="container">
      <h1 className="title">Hello World!</h1>
      {students.map((student) => (
        <Greeting student={student} />
      ))}
    </div>
  );
}

export default App;
