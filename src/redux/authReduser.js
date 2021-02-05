import * as actionTypes from "./actionTypes";
import { getUserInfo } from "../helpers/auth";

const initState = {
  userInfo: getUserInfo(),
  isAuthenticated: !!getUserInfo() ? getUserInfo().isAuth : false,
  loading: false,
  successMessage: null,
  error: null,
  news: [],
};

const authReduser = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
        successMessage: null,
      };
    }

    case actionTypes.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        successMessage: "Welcome🎉🎉🎉",
        userInfo: getUserInfo(),
        isAuthenticated: !!getUserInfo() ? getUserInfo().isAuth : false,
      };
    }

    case actionTypes.LOGOUT_SUCCESS: {
      return {
        ...initState,
        isAuthenticated: false,
        userInfo: null,
      };
    }

    case actionTypes.GET_NEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authReduser;
