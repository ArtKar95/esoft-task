import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ isAuthenticated }) => {
  return (
    <div className={classes.header}>
      <NavLink to="/" exact activeClassName={classes.activeLink}>
        Home
      </NavLink>

      {!isAuthenticated && (
        <NavLink to="/login" exact activeClassName={classes.activeLink}>
          Login
        </NavLink>
      )}

      <NavLink to="/news" exact activeClassName={classes.activeLink}>
        News
      </NavLink>
      <NavLink to="/profile" exact activeClassName={classes.activeLink}>
        Profile
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Header);
