import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./index.styles";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { history, store } from "./Stores/Configure";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
