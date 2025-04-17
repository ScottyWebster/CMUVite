import React from "react";
import BlogPostList from "./BlogPostList";

const Blog = ({ posts }) => {
  return (
    <div>
      <h2>All Blog Posts</h2>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default Blog;
