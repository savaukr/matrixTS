import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'

const preloadedState = ((window as any)).__PRELOADED_STATE__
console.log(preloadedState)
delete ((window as any)).__PRELOADED_STATE__

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const app = (
  <Provider store={store}>
    <App />
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
