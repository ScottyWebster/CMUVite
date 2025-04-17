// NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        BlogApp
      </Link>

      <div className={styles.links}>
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/blog" onClick={closeMobileMenu}>
          Blog
        </Link>
        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/blog" onClick={closeMobileMenu}>
            Blog
          </Link>
          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
