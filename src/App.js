import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import CustomRoute from "./Components/CustomRoute";
import { connect } from "react-redux";
import Loader from "./Components/Loader/Loader";

function App(props) {
  useEffect(() => {
    const { successMessage, error } = props;
    if (successMessage) {
      toast.success(successMessage);
    }
    if (error) {
      toast.error(error);
    }
  });

  return (
    <div className="app">
      <Header />

      <div className="appContainer">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <CustomRoute path="/login" exact component={Login} />
          <CustomRoute
            type="private"
            path="/profile"
            exact
            component={Profile}
          />
        </Switch>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {props.loading && <Loader />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    successMessage: state.successMessage,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(App);
