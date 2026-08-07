# caesarkabalan.com

Personal CV and portfolio site. Static HTML, built with [Astro](https://astro.build),
served by GitHub Pages.

**You edit content files. A build turns them into HTML.** You never edit HTML by hand,
and you never commit generated output.

---

## The short version

```bash
nvm use                 # switches to the Node version in .nvmrc
npm install             # first time only
npm run dev             # http://localhost:4321, live-reloads as you edit
```

Edit a file in `src/content/` or `src/data/`, watch the browser update, then:

```bash
git add -A && git commit -m "Update experience" && git push
```

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it. Live in about two minutes. There is no manual deploy step.

---

## What to edit, by task

| I want to... | Edit this |
| --- | --- |
| Change my name, job title, location, hero copy, biography, interests, links | `src/data/profile.yaml` |
| Add, edit, or reorder a job | `src/content/experience/*.md` |
| Change the career timeline bar at the top of Experience | `src/data/careerRail.yaml` |
| Add or edit a certification | `src/data/credentials.yaml` |
| Add or edit a published article | `src/content/publications/*.md` |
| Add or edit a project | `src/content/projects/*.md` |
| Replace my photo, logos, or the resume PDF | `public/assets/` |
| Change how something looks | `src/styles/tokens.css`, then `src/styles/base.css` |
| Change page structure | `src/pages/`, `src/components/` |

Every content file has comments explaining its fields. You should not need to read any
code to update the site.

---

## Adding a job

Create a file in `src/content/experience/`. The number prefix is only there to keep
the folder readable; the `order` field is what actually controls render order.

```markdown
---
title: "Staff Architect"
org: "Some Company"

# Roles sharing a `group` render under ONE org header with ONE logo.
# Use a new group value for a different employer, or to represent a
# separate stint at the same employer.
group: "some-company"
groupSpan: "2027 - Present"
logo: "/assets/org-somecompany.svg"
logoAlt: "Some Company"

location: "Columbus, OH · Remote"
period: "Jan 2027 - Present"

# Lower renders first. Renumber freely.
order: 0

accomplishments:
  - label: "Optional group heading"     # use "" for an ungrouped list
    items:
      - >-
        Long text goes here. The `>-` lets you wrap across as many
        lines as you like; it all becomes one paragraph.
      - >-
        A second accomplishment.
---

This body text is the always-visible summary paragraph. Two or three sentences
describing what the role was. Everything in `accomplishments` above is hidden behind
a "View N accomplishments" link, so this paragraph carries the weight.
```

Drop the org logo into `public/assets/` as an SVG.

### The two rules worth knowing

**All accomplishments are hidden; the summary is not.** There is no "top 3" ranking, on
purpose. Either a role's accomplishments are all collapsed or all shown. So put the
important framing in the summary paragraph, and let the accomplishments be a flat list
in whatever order reads best.

**Roles with no accomplishments render no disclosure at all.** Leave `accomplishments`
off entirely and the "View N accomplishments" link simply does not appear. Two of the
early roles do this today.

---

## The career timeline bar

`src/data/careerRail.yaml` draws the horizontal bar at the top of Experience. Segment
widths are proportional to real time, so **the percentages must add up to 100**. The
build fails with a clear message if they do not:

```
src/data/careerRail.yaml percentages total 95, not 100.
```

Keep the labels short. The narrow segments are only about 100 pixels wide, and long
labels wrap into a cramped mess. Full organization names appear right below in the
Experience entries, so the bar does not need them.

---

## Design decisions the build will not stop you breaking

Written down because they were deliberate and are easy to undo by accident.

- **One light theme.** No dark mode, no toggle, no theme script. The portrait has a
  pure black studio background, which measured 1.34:1 against a dark page surface and
  read as a black hole. The rectangular crop on white is the deliberate alternative.
- **Almost no JavaScript.** Scrollspy in the navigation, and that is all. The expand
  and collapse behavior is native `<details>`, the mobile navigation is a scrolling row
  rather than a menu button. Everything except the active-nav highlight works with
  JavaScript disabled.
- **Zero em dashes in prose.** Date ranges use a plain hyphen. The only en dashes on
  the site are inside official AWS certification names, which are proper nouns.
- **Publication images are always on the left**, and each keeps its natural aspect
  ratio so nothing is cropped. If you add one, put its real pixel dimensions in
  `imageWidth` and `imageHeight` or the page will shift as it loads.
- **`--accent-strong` is darker than `--accent`, not brighter.** Emphasis means more
  contrast. An earlier draft had this backwards.

---

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local server at `http://localhost:4321` with live reload |
| `npm run build` | Type-checks content, then builds to `dist/` |
| `npm run preview` | Serves the built `dist/` exactly as it will deploy |
| `npm run check` | Type-check only, no build |

`npm run build` runs `astro check` first. If you misspell a field or omit a required
one, the build fails and names the file and the field. A typo cannot silently ship.

---

## Deploying

Automatic on push to `main`. To watch or re-run it, use the Actions tab in GitHub;
`workflow_dispatch` lets you re-deploy without a commit.

### One-time GitHub setup

1. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Pages → Custom domain:** `caesarkabalan.com`.
3. DNS at your registrar:
   - `A` records for the apex to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` to `ckabalan.github.io`
4. Tick **Enforce HTTPS** once the certificate is issued.

`public/CNAME` already contains the domain, so the setting survives redeploys.

---

## Layout

```
src/
  data/                YAML you will edit most often. Comments explain every field.
    profile.yaml         identity, hero copy, biography, links
    careerRail.yaml      the proportional timeline bar
    credentials.yaml     education and certifications
  content/             One markdown file per item.
    experience/          9 roles
    projects/            1 project
    publications/        3 articles
  content.config.ts    Field schemas. Edit only when adding a NEW field.
  lib/site.ts          Reads the YAML, plus the nav list and site metadata.
  components/          Reusable pieces
  layouts/             Page shells
  pages/               Routes. File path = URL.
  styles/
    tokens.css           colors, spacing, sizing. Start here for visual changes.
    base.css             everything else

public/                Copied to the site root verbatim.
  assets/                images, logos, favicon, resume.pdf
  CNAME, robots.txt, .nojekyll
```

### Routes

`/` plus a detail page per project and publication. Old URLs from the previous Hugo
site (`/tags/`, `/categories/`, `/post/`, `/event/`, and the bare `/project/` and
`/publication/` indexes) render small pages that point at the right section, carrying
`noindex,follow` so nine thin pages do not dilute a five-page site's search presence.
GitHub Pages cannot do server-side redirects, which is why these are real pages.

---

## Other directories

`_raw_content/` is the extracted archive from the previous version of the site, kept
for reference. **It is not the source of truth.** `src/` is.

`mockups/` is the frozen design exploration that produced this layout, and
`tools/migrate_from_mockup.py` is the one-time script that seeded `src/` from it.
Neither is used by the build. Both can be deleted; they are kept only so the design
decisions remain auditable.

`DESIGN-PLAN.md` records the design decisions, the review that produced them, and the
measurements behind the numbers in `tokens.css`.

---

## Known open items

- **The resume PDF predates the May 2024 return to Gore.** `public/assets/resume.pdf`
  needs regenerating; the hero links to it.
- **All three AWS certifications have expired.** They are shown with plain expiry dates
  and no active-validity styling. The Solutions Architect Associate is superseded by
  the Professional and lapsed in 2019, so it may not be worth the row.

---

© 2026 Caesar Kabalan. Content licensed
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0).
