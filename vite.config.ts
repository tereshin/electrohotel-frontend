import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import http from "http";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();
const BASE_DOMAIN = process.env.VITE_BASE_DOMAIN;

// Define types for route objects
interface RouteObject {
  path?: string;
  children?: RouteObject[];
  [key: string]: any;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  const envFile = mode === "production" ? ".env.production" : ".env";
  dotenv.config({ path: envFile });

  // Create a plugin to generate sitemap.xml and robots.txt
  const generateSeoFilesPlugin = {
    name: "generate-seo-files",
    closeBundle: () => {
      const CURRENT_DATE = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      
      try {
        // Generate sitemap.xml
        const sitemapTemplate = fs.readFileSync(path.resolve(__dirname, "./public/sitemap.xml"), "utf8");
        const updatedSitemap = sitemapTemplate
          .replace(/https:\/\/electrohotel\.ru/g, `https://${BASE_DOMAIN}`)
          .replace(/lastmod>\d{4}-\d{2}-\d{2}</g, `lastmod>${CURRENT_DATE}<`);
        
        fs.writeFileSync(path.resolve(__dirname, "./dist/sitemap.xml"), updatedSitemap);
        console.log(`✅ Generated sitemap.xml with domain: ${BASE_DOMAIN}`);
        
        // Generate robots.txt
        const robotsTemplate = fs.readFileSync(path.resolve(__dirname, "./public/robots.txt"), "utf8");
        const updatedRobots = robotsTemplate.replace(
          /Sitemap: https:\/\/.*\/sitemap.xml/g, 
          `Sitemap: https://${BASE_DOMAIN}/sitemap.xml`
        );
        
        fs.writeFileSync(path.resolve(__dirname, "./dist/robots.txt"), updatedRobots);
        console.log(`✅ Generated robots.txt with domain: ${BASE_DOMAIN}`);
        
        console.log("✅ SEO files generation complete!");
      } catch (error) {
        console.error("❌ Error generating SEO files:", error);
      }
    }
  };

  // Plugin to pre-render all pages
  const preRenderPagesPlugin = {
    name: "pre-render-pages",
    closeBundle: async () => {
      console.log("🔄 Starting pre-rendering of all pages...");
      
      try {
        // Get all routes to pre-render
        const routePaths: string[] = [
          "/services/eco-park",
          "/services",
          "/services/parking",
          "/services/cafeteria",
          "/services/laundry",
          "/",
          "/services/private-terrace",
          "/services/room-service",
          "/services/check-in",
          "/services/migration",
          "/contacts",
          "/about",
          "/promotions",
          "/faq",
          "/privacy",
          "/prices",
          "/prices/comfort",
          "/prices/comfort-plus",
          "/prices/delux",
          "/prices/delux-split",
          "/prices/odnomestnyi-komfort",
          "/prices/dvuhkomnatnyi-luks",
          "/prices/comfort-plus-s-terrasoi",
          "/prices/comfort-plus-s-terrasoi-na-2-cheloveka",
          "/pismo",
          "/terms",
          "/rooms",
          "/events"
        ];
        
        console.log(`Found ${routePaths.length} routes to pre-render`);

        // Use a simple static file server (not Vite) to avoid injecting @vite/client
        // and other dev scripts that break Mango integration
        const distPath = path.join(__dirname, "dist");
        const server = http.createServer((req, res) => {
          const urlPath = (req.url?.split("?")[0] || "/").replace(/^\//, "") || "index.html";
          const filePath = path.join(
            distPath,
            urlPath === "index.html" || !urlPath ? "index.html" : path.extname(urlPath) ? urlPath : path.join(urlPath, "index.html")
          );
          fs.readFile(filePath, (err, data) => {
            if (err) {
              // SPA fallback: serve index.html for client routes
              fs.readFile(path.join(distPath, "index.html"), (fallbackErr, fallbackData) => {
                if (fallbackErr) {
                  res.writeHead(404);
                  res.end("Not found");
                  return;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(fallbackData);
              });
              return;
            }
            const ext = path.extname(filePath);
            const contentTypes: Record<string, string> = {
              ".html": "text/html",
              ".js": "application/javascript",
              ".css": "text/css",
              ".json": "application/json",
              ".ico": "image/x-icon",
              ".png": "image/png",
              ".jpg": "image/jpeg",
              ".svg": "image/svg+xml",
              ".webp": "image/webp",
            };
            res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
            res.end(data);
          });
        });
        await new Promise<void>((resolve) => server.listen(3333, "127.0.0.1", resolve));
        console.log("Started static server for pre-rendering (port 3333)");
        
        // Launch Puppeteer to visit each page
        const puppeteer = await import('puppeteer');
        const browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Pre-render each route
        for (const route of routePaths) {
          try {
            const url = `http://localhost:3333${route}`;
            console.log(`Pre-rendering ${url}...`);
            
            // Navigate to page and wait until network is idle
            await page.goto(url, { waitUntil: 'networkidle2'});
            
            // Get the fully rendered HTML and remove dynamically inserted script duplicates
            // (Mango init uses insertBefore, so mango.js ends up in head; we keep only the original in body)
            let html = await page.content();
            html = html
              .replace(/\s*<script[^>]*mango-office\.ru\/widgets\/mango\.js[^>]*>\s*<\/script>/gi, "")
              .replace(/\s*<script[^>]*mc\.yandex\.ru\/metrika\/tag\.js[^>]*>\s*<\/script>/gi, "");

            // Determine the output path
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const outputPath = path.join(__dirname, "dist", routePath);
            
            // Create directory if it doesn't exist
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            
            // Write the rendered HTML to file
            fs.writeFileSync(outputPath, html);
            console.log(`✅ Pre-rendered ${route} -> ${outputPath}`);
          } catch (error) {
            console.error(`❌ Error pre-rendering ${route}:`, error);
          }
        }
        
        // Close browser and server
        await browser.close();
        await new Promise<void>((resolve) => server.close(() => resolve()));
        
        console.log("✅ All pages pre-rendered successfully!");
      } catch (error) {
        console.error("❌ Error pre-rendering pages:", error);
        console.error(error);
      }
    }
  };

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      generateSeoFilesPlugin,
      preRenderPagesPlugin
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
