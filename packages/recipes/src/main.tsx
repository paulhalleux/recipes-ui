import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "@recipes/tailwind-config/index.css";
import "@recipes/ui/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
