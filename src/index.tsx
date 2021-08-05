import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App";
import ErrorHandler from "./ErrorHandler";
import reportWebVitals from "./reportWebVitals";

import translation from "./locales/en.json";

import "./index.css";
import "./variables.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation,
    },
  },
  keySeparator: false,
  debug: process.env.NODE_ENV !== "production",
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onReset={() => window.location.reload()}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
