import React from "react";

const Header = () => {
  return (
    <div className="App-header">
      <header className="logo">
        HOLA Movie!! <span className="app-header">APP</span>
      </header>

      <nav className="nav-link">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Browse Movies</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
