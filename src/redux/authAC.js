import * as actionTypes from "./actionTypes";
import { saveUserInfo, removeUserInfo } from "../helpers/auth";
import { request } from "../helpers/request";

export const login = (data) => {
  return async (dispatch) => {
    //!Fetch and axios there․ Async/await for example and redux too, for this project enough local state.
    try {
      dispatch({ type: actionTypes.LOADING });

      await saveUserInfo(data);
      setTimeout(() => {
        //! setTimeout used for loader,as  asynchronous code
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
        });
      }, 1000);
    } catch (err) {
      dispatch({ type: actionTypes.FAILURE, payload: err.message });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    //!Fetch and axios there․ Async/await for example and redux too, for this project enough local state.
    try {
      dispatch({ type: actionTypes.LOADING });

      await removeUserInfo();
      setTimeout(() => {
        //! setTimeout used for loader,as  asynchronous code
        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      }, 1000);
    } catch (err) {
      dispatch({ type: actionTypes.FAILURE, payload: err.message });
    }
  };
};

export const getNews = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.LOADING });

      const response = await request(
        "http://jsonplaceholder.typicode.com/posts?_start=1&_limit=10"
      );

      dispatch({
        type: actionTypes.GET_NEWS_SUCCESS,
        payload: response,
      });
    } catch (err) {
      dispatch({ type: actionTypes.FAILURE, payload: err.message });
    }
  };
};
