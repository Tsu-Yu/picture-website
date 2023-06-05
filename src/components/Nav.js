import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>Picture Webside</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
