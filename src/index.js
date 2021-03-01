import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

//================== redux setup
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddelware from "redux-thunk";
import { createLogger } from "redux-logger";
//=================== import Reducers
import {
	searchInputReducer,
	requsetBoxSizeReducer,
	requsetSigninReducer,
	registerReducer,
} from "./reducers";
// ================== apply redux
const logger = createLogger();
const rootReducer = combineReducers({
	searchInputReducer,
	requsetBoxSizeReducer,
	requsetSigninReducer,
	registerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddelware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
