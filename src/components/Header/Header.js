import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/Header.css";
function Header() {
  return (
    <section className="header-container">
      <h1>Shelfie</h1>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/add">
        <button>Add Inventory</button>
      </Link>
    </section>
  );
}
export default Header;
