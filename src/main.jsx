import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/* 🔔 TOAST CONTAINER */}
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#020617",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      }}
    />
  </StrictMode>
);