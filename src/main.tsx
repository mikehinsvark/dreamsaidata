import { createRoot, hydrateRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";

const root = document.getElementById("root")!;
if (root.querySelector(".site-shell")) {
  hydrateRoot(root, <Home />);
} else {
  createRoot(root).render(<Home />);
}
