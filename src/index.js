import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./routes/AppRouter";
import MyProvider from "./stateManagement/provider";
import AuthProvider from "./stateManagement/authContexts";
import Error from "./Errors/Error";

ReactDOM.render(
  <React.StrictMode>
    <Error>
      <MyProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </MyProvider>
    </Error>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
