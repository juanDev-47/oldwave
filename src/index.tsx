import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.tsx";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import reportWebVitals from "./reportWebVitals";
// @ts-ignore
import { oldwaveTheme } from "./themes/oldwaveTheme.tsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={oldwaveTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
