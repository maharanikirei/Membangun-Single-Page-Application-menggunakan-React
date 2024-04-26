import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ logout, name, authedUser }) => {
  return (
    <>
      <h1>
        <Link to="/">Notes App</Link>
      </h1>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/archives">Archive!</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
  authedUser: PropTypes.array,
};

export default Navigation;
