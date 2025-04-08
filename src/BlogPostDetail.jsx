import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./BlogPostDetail.module.css";

const BlogPostDetail = ({ title, content, author, date }) => {
  const { id } = useParams();

  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.blogPostDetail}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>By {author}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div style={{ marginTop: "30px", textAlign: "right" }}>
        <Link to={`/edit/${id}`}>
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
            Edit Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostDetail;
