import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReduser from './authReduser';

const middlewaresArr = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewaresArr.push(logger);
}

const middleWares = applyMiddleware(...middlewaresArr);

const store = createStore(authReduser, middleWares);

export default store;
