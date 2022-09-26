import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1 id="logo">Leica</h1>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a className="order" href="#soon">
              Order
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
