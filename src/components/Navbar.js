import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };

Navbar.defaultProps = {
  title: "TextUtils",
};
