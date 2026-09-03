import type { APIRoute } from "astro";
import { SITE } from "../lib/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = SITE.indexable
    ? [
        "User-agent: *",
        "Allow: /",
        `Sitemap: ${new URL("/sitemap-index.xml", SITE.url).href}`,
      ]
    : ["User-agent: *", "Disallow: /"];

  return new Response(`${body.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
