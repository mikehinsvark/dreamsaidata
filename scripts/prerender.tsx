import { renderToString } from "react-dom/server";
import Home from "../src/Home";

process.stdout.write(renderToString(<Home />));
