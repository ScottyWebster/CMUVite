import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogPostItem.module.css";

export default function BlogPostItem({ title, summary, date, url }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.titleLink}>
        <h2>{title}</h2>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
}
//this is a test
