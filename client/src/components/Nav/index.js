import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        BookMe Google
      </a>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">Saved</a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Nav;