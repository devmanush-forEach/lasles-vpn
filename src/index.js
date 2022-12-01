import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux/store/store";

// store.subscribe(() => console.log(store.getState()));

=======

>>>>>>> 86cdc3382d62d5e6c73aeb99c0985c80cf0161b8
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Provider store={store}>
        <App />
      </Provider>
=======
      <App />
>>>>>>> 86cdc3382d62d5e6c73aeb99c0985c80cf0161b8
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
