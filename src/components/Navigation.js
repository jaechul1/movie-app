import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div class="navigation">
      <Link to="/">Home</Link>
      <Link to="/documentary">Documentary</Link>
      <Link to="/fantasy">Fantasy</Link>
      <Link to="/horror">Horror</Link>
    </div>
  );
}

export default Navigation;
