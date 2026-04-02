import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css"
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

<Toaster position="top-right" />

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
