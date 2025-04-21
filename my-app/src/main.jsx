import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Project from "./projek/praktek/path.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Project />
  </StrictMode>
);
