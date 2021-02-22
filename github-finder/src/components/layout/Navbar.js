import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h4>
        <i className={icon}>{title}</i>
      </h4>
      <div>
        <span style={{ position: "relative", marginRight: "5px" }}>
          <Link to="/" style={{ color: "#123456" }}>
            Home
          </Link>
        </span>
        <span style={{ position: "relative", marginRight: "5px" }}>
          <Link to="/about" style={{ color: "#123456" }}>
            About
          </Link>
        </span>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
