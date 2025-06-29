import "bootstrap/dist/css/bootstrap.min.css"; // ✅ estilos
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
