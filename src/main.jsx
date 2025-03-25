import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StatusProvider } from "./components/StatusProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StatusProvider>
        <App />
      </StatusProvider>
    </BrowserRouter>
  </StrictMode>
);
