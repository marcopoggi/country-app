import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
//reducers
import { countriesReducer } from "./reducers/countries";

//redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//middlewares
const middlewares = [thunk];
//reducers
const rootReducer = combineReducers({
  countries: countriesReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
