import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
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
          "/",
          "/services/parking",
          "/services/cafeteria",  
          "/services",
          "/services/eco-park",
          "/services/laundry",
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
        
        // Launch a local server to serve the built files
        const { createServer } = await import('vite');
        const server = await createServer({
          configFile: false,
          root: path.join(__dirname, "dist"),
          server: {
            port: 3333,
            strictPort: true,
          },
        });
        
        await server.listen();
        console.log("Started local server for pre-rendering");
        
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
            
            // Get the fully rendered HTML
            const html = await page.content();
            
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
        await server.close();
        
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
