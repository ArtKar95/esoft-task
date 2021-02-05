import React from "react";
import classes from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { logout } from "../../redux/authAC";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <h1>
        <FontAwesomeIcon icon={faUsers} /> {props.userInfo.name}
      </h1>

      <p>This page was created to provide and modify information about user</p>
      <Button onClick={props.logout} variant="danger" className="my-4 px-5">
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
