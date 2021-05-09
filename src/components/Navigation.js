import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/documentary">Documentary</Link>
      <Link to="/fantasy">Fantasy</Link>
      <Link to="/horror">Horror</Link>
      <Link to="/romance">Romance</Link>
    </div>
  );
}

export default Navigation;
