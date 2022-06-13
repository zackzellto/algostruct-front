import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./custom.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const container = ReactDOM.createRoot(rootElement);
container.render(
  <BrowserRouter baseUrl={baseUrl}>
    <App />
  </BrowserRouter>
);
