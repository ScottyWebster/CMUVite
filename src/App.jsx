// src/App.jsx
import React from "react";
import "./App.css";
import BlogList from "./BlogList";

function App() {
  return (
    <div className="container">
      <h1 className="title">Blog Posts</h1>
      <BlogList />
    </div>
  );
}

export default App;
