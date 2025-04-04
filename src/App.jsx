import React from "react";
import "./App.css";
import BlogPostList from "./BlogPostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const samplePosts = [
  {
    id: "1",
    title: "Getting Started with React",
    summary: "Learn the basics of React and build your first application.",
    date: "2023-01-01",
    url: "/posts/1",
  },
  {
    id: "2",
    title: "CSS Grid vs. Flexbox",
    summary: "A comparison of two powerful layout systems in CSS.",
    date: "2023-02-15",
    url: "/posts/2",
  },
  {
    id: "3",
    title: "Accessibility in Web Development",
    summary: "Tips for making your web applications more accessible.",
    date: "2023-03-10",
    url: "/posts/3",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Blog Posts</h1>
        <Routes>
          <Route path="/" element={<BlogPostList posts={samplePosts} />} />
          <Route
            path="/posts/:id"
            element={<div>Post Details Coming Soon</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
