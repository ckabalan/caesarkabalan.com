// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://dev.caesarkabalan.com";
const indexable = process.env.SITE_INDEXABLE === "true";

const sitemapIntegration = sitemap({
  // The historical compatibility routes carry noindex, so advertising them in
  // the sitemap would tell crawlers two contradictory things. Only the real
  // pages belong here.
  filter: (page) => {
    const stubs = [
      "/project/",
      "/publication/",
      "/tags/",
      "/tags/aws-blog-post/",
      "/tags/aws-sample-code/",
      "/tags/open-source/",
      "/categories/",
      "/post/",
      "/event/",
    ];
    const path = new URL(page).pathname;
    return !stubs.includes(path);
  },
});

export default defineConfig({
  // Cloudflare Pages sets SITE_URL per project. The dev URL is a safe local-build
  // default; the production project must set this to https://www.caesarkabalan.com.
  site,
  trailingSlash: "always",
  // Staging builds do not publish a sitemap. Combined with noindex metadata and
  // robots.txt, this keeps the dev site out of search results.
  integrations: indexable ? [sitemapIntegration] : [],
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
