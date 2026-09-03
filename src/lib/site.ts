import fs from "node:fs";
import path from "node:path";
import { load as parseYaml } from "js-yaml";

/**
 * Reads the YAML data files in src/data/ at build time.
 *
 * These are plain YAML rather than content collections so they can carry
 * comments explaining each field. Comments are the whole reason a person can
 * edit this site a year from now without reading any code.
 */

const DATA = path.join(process.cwd(), "src", "data");

function read<T>(file: string): T {
  const raw = fs.readFileSync(path.join(DATA, file), "utf-8");
  const parsed = parseYaml(raw);
  if (parsed === null || parsed === undefined) {
    throw new Error(`src/data/${file} is empty or invalid YAML.`);
  }
  return parsed as T;
}

export type ProofItem = { text: string; url?: string };

export type Profile = {
  name: string;
  kicker: string;
  roleLine: string[];
  positioning: string;
  proof: ProofItem[];
  biography: string[];
  interests: string[];
  education: { degree: string; institution: string; year: string };
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    stackoverflow: string;
    resume: string;
  };
  contactLead: string;
};

export type RailSegment = { label: string; span: string; pct: number };

export type Credential = {
  name: string;
  earned: string;
  status: string;
  about: string;
  verify?: string;
};

export const profile = read<Profile>("profile.yaml");
export const careerRail = read<RailSegment[]>("careerRail.yaml");
export const credentials = read<Credential[]>("credentials.yaml");

/** Guardrail: the rail encodes real duration, so the parts must total 100%. */
const railTotal = careerRail.reduce((sum, s) => sum + s.pct, 0);
if (railTotal !== 100) {
  throw new Error(
    `src/data/careerRail.yaml percentages total ${railTotal}, not 100. ` +
      `The rail is proportional to real time, so the segments must sum to 100.`,
  );
}

export const NAV = [
  { label: "About", slug: "about" },
  { label: "Experience", slug: "experience" },
  { label: "Work", slug: "work" },
  { label: "Credentials", slug: "credentials" },
  { label: "Contact", slug: "contact" },
] as const;

const siteUrl = process.env.SITE_URL ?? "https://dev.caesarkabalan.com";

export const SITE = {
  url: siteUrl,
  // Dev and preview builds stay out of search results. The future production
  // Cloudflare project must opt in with SITE_INDEXABLE=true.
  indexable: process.env.SITE_INDEXABLE === "true",
  title: `${profile.name}, ${profile.roleLine[0]}`,
  description:
    "Caesar Kabalan is the AI & Cloud Architect for Gore Medical, " +
    "leading strategy for AI and large language model integration. Twenty years " +
    "across infrastructure, cloud, and AI.",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0",
} as const;
