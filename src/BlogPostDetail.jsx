import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./BlogPostDetail.module.css";
import DeleteButton from "./DeleteButton";
import ConfirmationDialog from "./ConfirmationDialog";

const BlogPostDetail = ({ title, content, author, date, id, onDelete }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setIsDialogOpen(false);
    navigate("/");
  };

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

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
        }}
      >
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
        <DeleteButton onClick={() => setIsDialogOpen(true)} />
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default BlogPostDetail;
