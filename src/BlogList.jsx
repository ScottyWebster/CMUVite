// src/BlogList.jsx
import React from "react";
import "./BlogList.css";

const posts = [
  {
    id: 1,
    title: "How to Learn React",
    summary: "A guide to help beginners get started with React.js.",
    date: "2024-11-12",
  },
  {
    id: 2,
    title: "JavaScript Tips & Tricks",
    summary: "Lesser-known JavaScript features that make your life easier.",
    date: "2025-01-05",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    summary: "What’s next in the world of web technologies and trends.",
    date: "2025-02-20",
  },
];

export default function BlogList() {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h2>{post.title}</h2>
          <p className="summary">{post.summary}</p>
          <p className="date">{new Date(post.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
