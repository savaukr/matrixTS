import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
//import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'

import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload'

let  preloadedState
let storeTemp

  preloadedState = ((globalThis as any)).__PRELOADED_STATE__
  console.log(preloadedState)
  delete ((globalThis as any)).__PRELOADED_STATE__

 storeTemp = createStore(
    rootReducer,
    preloadedState,
    compose(
      (globalThis as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (globalThis as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );


export const store =  storeTemp

export const app = (
  <Provider store={store}>
    <Frontload noServerRender={true}>
     <App />
    </Frontload>
  </Provider>
);

// ReactDOM.hydrate(
//   <React.StrictMode>{app}</React.StrictMode>,
//   document.getElementById("root")
// );



    // If it's an SSR, we use hydrate to get fast page loads by just
    // attaching event listeners after the initial render
    globalThis.onload = () => {
      Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(app, document.getElementById('root'));
      });
    }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
