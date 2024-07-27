import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    color: #fff;
    background-color: #323334;
  }

  input  {
    background-color: transparent;
    border:none;
    outline:none; 
    }
`;
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle></GlobalStyle>
        <App />
    </React.StrictMode>
);
