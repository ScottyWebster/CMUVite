import React from "react";
import "./App.css";
import BlogPostList from "./BlogPostList";
import BlogPostDetail from "./BlogPostDetail";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const samplePosts = [
  {
    id: "1",
    title: "Getting Started with React",
    summary: "Learn the basics of React and build your first application.",
    content: `
      <p>React is a JavaScript library for building user interfaces. It allows you to create reusable components and manage application state effectively.</p>
      <h2>Why React?</h2>
      <ul>
        <li>Component-Based</li>
        <li>Declarative Syntax</li>
        <li>Rich Ecosystem</li>
      </ul>
      <p>To get started, install React using <code>create-react-app</code> or Vite. Visit the <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">official React documentation</a> to learn more.</p>
    `,
    author: "Jane Doe",
    date: "2023-01-01",
    url: "/posts/1",
  },
  {
    id: "2",
    title: "CSS Grid vs. Flexbox",
    summary: "A comparison of two powerful layout systems in CSS.",
    content: `
      <p>Both CSS Grid and Flexbox are layout models in CSS, but they serve different purposes.</p>
      <h2>Flexbox</h2>
      <p>Best for linear, one-dimensional layouts (row or column). It’s great for aligning items inside a container.</p>
      <h2>Grid</h2>
      <p>Ideal for two-dimensional layouts with rows and columns.</p>
      <p>Check out the <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">CSS Tricks Grid Guide</a> for examples.</p>
    `,
    author: "John Smith",
    date: "2023-02-15",
    url: "/posts/2",
  },
  {
    id: "3",
    title: "Accessibility in Web Development",
    summary: "Tips for making your web applications more accessible.",
    content: `
      <p>Accessibility ensures that all users, including those with disabilities, can interact with your site.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Use semantic HTML (like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>)</li>
        <li>Include alt text for images</li>
        <li>Ensure keyboard navigability</li>
        <li>Use sufficient color contrast</li>
      </ul>
      <p>Learn more from the <a href="https://webaim.org/standards/wcag/" target="_blank" rel="noopener noreferrer">WCAG Guidelines</a>.</p>
    `,
    author: "Alex Johnson",
    date: "2023-03-10",
    url: "/posts/3",
  },
];

function PostDetailWrapper() {
  const { id } = useParams();
  const post = samplePosts.find((p) => p.id === id);

  return post ? (
    <BlogPostDetail {...post} />
  ) : (
    <p style={{ padding: "20px", textAlign: "center" }}>Blog post not found.</p>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Blog Posts</h1>
        <Routes>
          <Route path="/" element={<BlogPostList posts={samplePosts} />} />
          <Route path="/posts/:id" element={<PostDetailWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
