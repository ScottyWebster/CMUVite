import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import "./App.css";
import BlogPostList from "./BlogPostList";
import BlogPostDetail from "./BlogPostDetail";
import BlogPostForm from "./BlogPostForm";

const initialPosts = [
  {
    id: "1",
    title: "Test",
    summary:
      "The fitness grand pacer test is a multistage aerobic capacity test.",
    content: "<p>It's a test</p>",
    author: "Jane Doe",
    date: "2023-01-01",
    url: "/posts/1",
  },
  {
    id: "2",
    title: "Testing",
    summary: "Did you know that this is a test?",
    content: "<p>Hi</p>",
    author: "John Smith",
    date: "2023-02-15",
    url: "/posts/2",
  },
  {
    id: "3",
    title: "Tester",
    summary: "What",
    content: `
      <p>Paragraph</p>
      <h2>Second heading</h2>
      <ul>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </ul>
      <p>Learn more from the <a href="https://webaim.org/standards/wcag/" target="_blank" rel="noopener noreferrer">WCAG Guidelines</a>.</p>
    `,
    author: "Alex Johnson",
    date: "2023-03-10",
    url: "/posts/3",
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    const id = (posts.length + 1).toString();
    const url = `/posts/${id}`;
    setPosts([...posts, { ...newPost, id, url }]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...updatedPost, id, url: `/posts/${id}` } : p
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const PostDetailWrapper = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);
    return post ? (
      <BlogPostDetail {...post} id={id} onDelete={deletePost} />
    ) : (
      <p style={{ padding: "20px", textAlign: "center" }}>
        Blog post not found.
      </p>
    );
  };

  const CreateWrapper = () => {
    const navigate = useNavigate();
    const handleSubmit = (data) => {
      addPost(data);
      navigate("/");
    };
    return <BlogPostForm onSubmit={handleSubmit} />;
  };

  const EditWrapper = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);
    const navigate = useNavigate();

    const handleSubmit = (data) => {
      updatePost(id, data);
      navigate(`/posts/${id}`);
    };

    return post ? (
      <BlogPostForm post={post} onSubmit={handleSubmit} />
    ) : (
      <p style={{ padding: "20px", textAlign: "center" }}>Post not found.</p>
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">Blog Posts</h1>
        <div style={{ marginBottom: "20px", textAlign: "right" }}>
          <Link to="/create">
            <button
              style={{
                padding: "10px 16px",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              + New Post
            </button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<BlogPostList posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetailWrapper />} />
          <Route path="/create" element={<CreateWrapper />} />{" "}
          <Route path="/edit/:id" element={<EditWrapper />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
