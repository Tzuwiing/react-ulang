import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Project from "./projek/projek.jsx";
import Navbar from "./projek/projek.jsx";
import App from "./projek/projek.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
