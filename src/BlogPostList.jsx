import React from "react";
import styles from "./BlogPostList.module.css";
import BlogPostItem from "./BlogPostItem";

export default function BlogPostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className={styles.emptyMessage}>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
}
