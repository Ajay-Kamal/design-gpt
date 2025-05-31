import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StatusProvider } from "./components/StatusProvider";
import { ChatProvider } from "./components/Contexts/ChatContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChatProvider>
      <StatusProvider>
        <App />
      </StatusProvider>
      </ChatProvider>
    </BrowserRouter>
  </StrictMode>
);
