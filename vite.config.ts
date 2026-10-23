import { execFileSync } from "node:child_process";
import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

function prerenderLanding(): Plugin {
  return {
    name: "prerender-landing-page",
    transformIndexHtml: {
      order: "pre",
      handler(html, context) {
        if (context.server) return html;
        const markup = execFileSync(process.execPath, ["--import", "tsx", path.resolve("scripts/prerender.tsx")], { encoding: "utf8" });
        if (!markup.includes('class="site-shell"')) throw new Error("Prerendering returned no landing-page markup");
        return html.replace("<!--app-html-->", markup);
      },
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), prerenderLanding()],
  build: { outDir: "docs", emptyOutDir: true },
});
