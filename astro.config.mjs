// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Custom domain served by GitHub Pages. If you ever move to
  // ckabalan.github.io/caesarkabalan.com instead, add `base: "/caesarkabalan.com"`.
  site: "https://caesarkabalan.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
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
    }),
  ],
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
