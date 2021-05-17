import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import { FormParamsMatrix } from './components/FormParamsMatrix/FormParamsMatrix'
import reportWebVitals from "./reportWebVitals";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <FormParamsMatrix />
  </Provider>
);

ReactDOM.hydrate(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
