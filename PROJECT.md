# Rainbow Coalition · Akuku-Toru Voter Guide

A mobile-first voter guide website for the **Rainbow Coalition**, a political group in **Akuku-Toru Local Government Area, Rivers State, Nigeria**. A voter opens the site and sees exactly who the coalition is backing on their ballot, from President down to the State House of Assembly. Tapping a candidate opens a personal page with their party, biography, vision, mission and past projects.

This file is the full brief. Give it to your AI coding agent (Claude Opus 4.6 in Antigravity) as the source of truth, together with the images listed in section 9.

---

## 1. Goals

1. Show a voter **who to vote for and under which party**, at every level of their ballot.
2. Let them open each candidate for a **personal page** (bio, vision, mission, past projects).
3. Look bold, modern and energetic, in the style of the coalition's campaign flyer (bright red, yellow, white, heavy Montserrat lettering).
4. Work well on cheap Android phones and slow mobile data. Most visitors will be on phones.

**Out of scope:** local government chairman and councillor races. Those councils are elected separately by the state electoral commission, so they do not appear on this ballot.

## 2. The Akuku-Toru ballot

Five votes, in this order. Each office has its own colour.

| # | Office | Area | Colour variable |
|---|--------|------|-----------------|
| 1 | President (and Vice President on the ticket) | Federal, all Nigeria | `--c1` red |
| 2 | Governor (and Deputy Governor on the ticket) | Rivers State | `--c2` orange |
| 3 | Senator | Rivers West Senatorial District | `--c3` yellow |
| 4 | House of Representatives | Akuku-Toru/Asari-Toru Federal Constituency | `--c4` green |
| 5 | State House of Assembly | **Akuku-Toru I** and **Akuku-Toru II** (voter picks the one for their ward) | `--c5` blue |

> Verify the senatorial district, federal constituency and the two Assembly constituencies against INEC's current records before launch. Do not state an election date unless it is confirmed.

## 3. Tech stack

- **Next.js 14 (App Router), plain JavaScript**, React 18
- **CSS in one global stylesheet** (`app/globals.css`). No Tailwind, no UI library.
- **`next/font/google` → Montserrat** (weights 500, 600, 700, 800, 900), exposed as `--font-mont`
- **No database, no API.** All content lives in `lib/data.js`.
- Deploy on **Vercel** (free tier is enough). Candidate pages are statically generated.

## 4. Project structure

```
app/
  layout.js                 fonts, metadata, viewport, <Effects/>
  page.js                   home page
  candidate/[id]/page.js    candidate profile (static params from data)
  globals.css               the whole design system
components/
  Logo.js                   SVG badge logo (rainbow arcs over river waves)
  Arcs.js                   large rainbow arcs, used in the profile header
  Nav.js                    logo + "Rainbow Coalition / Akuku-Toru voter guide"
  Portrait.js               <img> if photo exists, else a silhouette placeholder
  Effects.js                "use client": scroll reveal + count-up numbers
lib/
  data.js                   ALL content: offices, candidates, steps, marquee text
public/
  hero.jpg                  campaign flyer used as the hero background
  candidates/*.jpg          candidate portraits (4:5)
```

## 5. Data model (`lib/data.js`)

Every candidate is an object. Missing fields fall back to placeholder text.

```js
{
  id: "governor-0",          // generated: `${office.key}-${index}`
  name: "Rep. OK Chinda",
  party: "APC",
  area: "Governor",          // optional group label inside an office
                             //  (e.g. "President", "Vice President",
                             //   "Akuku-Toru I", "Akuku-Toru II")
  photo: "/candidates/chinda.jpg",   // "" shows a silhouette
  bio: "…", vision: "…", mission: "…",
  projects: [{ title: "…", year: "2022", note: "…" }]
}
```

Office object: `{ key, title, sub, color, people: [...] }`.

### Real data taken from the campaign flyer

| Office | Role | Name (as printed) | Party |
|---|---|---|---|
| President | President | Asiwaju Bola Ahmed Tinubu | APC |
| President | Vice President | Kashim Shettima | APC |
| Governor | Governor | Rep. OK Chinda | APC |
| Governor | Deputy Governor | Hon. Major Jack | APC |

The party is shown as APC because the flyer carries the APC logo. **Confirm this with the coalition.** The Senate, Representatives and Assembly candidates on that flyer are for Ogu/Bolo, Okrika and Rivers East, **not** Akuku-Toru. Keep those three offices as `Sample Candidate` placeholders until the real Akuku-Toru names, photos and parties are supplied.

## 6. Pages

### 6.1 Home page (`/`)

Top to bottom:

1. **Hero** (red, full width). See section 8.
2. **Rainbow band** (10px, six colour stripes).
3. **Marquee strip** (yellow, scrolling): "Know your candidates", "Check your ward", "Carry your voter card", "Akuku-Toru decides", each followed by a colour dot. Duplicate the content so the loop is seamless.
4. **Stat tiles** (3 coloured tiles with count-up numbers): `5` votes to cast on election day, `2` State Assembly constituencies in Akuku-Toru, `1` local government: Akuku-Toru. Under them: "Council elections run separately."
5. **Sample-data notice** (only while placeholders exist).
6. **Office panels**, one per office, in ballot order. Each panel has a tinted background of its office colour, a giant watermark number (1 to 5), a coloured vertical bar beside the title, the title, and a one-line subtitle. Inside: a responsive grid of candidate cards. If candidates have an `area`, group the cards under a small bold label per area.
7. **"Voting day, step by step"**: three cards: Get your voter card, Find your polling unit, Mark your ticket.
8. **Footer**: "Confirm your polling unit and voter card with INEC before election day."

**Candidate card:** portrait fills the card (aspect 3:4). The name and a white party chip sit over a dark gradient at the bottom of the portrait. A coloured "Read their plan" bar runs along the bottom edge. The whole card is a link to `/candidate/<id>`.

### 6.2 Candidate page (`/candidate/[id]`)

- **Coloured header** in the candidate's office colour: "Back to my ballot" pill, large rainbow arcs faded in the background, big portrait (4:5, white border, offset shadow), name, party chip, and "Candidate for …".
  - Role text rule: if the candidate has an `area` and the office is not Assembly, show the area ("Vice President"); for Assembly show "State House of Assembly, Akuku-Toru I"; otherwise show the office title.
- **Grid of cards:** About, Vision (dark panel with a big yellow quote mark), Mission, Where to vote.
- **Past projects:** list of cards, each with a year chip, title and note.
- Unknown id → `notFound()`. Generate static params for every candidate. Page title: `Name · Role · Rainbow Coalition`.

## 7. Design system

**Light theme only.** Never switch to dark mode (`color-scheme: light`). The page body must stay light on every phone.

```css
--bg:#faf7f2;  --surface:#ffffff;  --ink:#1d1416;  --muted:#6b5e61;  --line:#e3dfd6;
--c1:#e8090e (red)   --c2:#f77f00 (orange)  --c3:#f7d117 (yellow)
--c4:#2a9d57 (green) --c5:#2872d8 (blue)    --c6:#7b3fe4 (violet)
hero red: #e8090e
```

- **Font:** Montserrat everywhere. Headings 800 to 900, body 500. Slightly tight letter-spacing on big headings (`-0.015em`).
- **Look:** thick `2px` near-black outlines, large rounded corners (20 to 30px), hard **offset shadows** (`6px 6px 0` in the office colour) instead of soft blur, flat saturated colour, a faint dotted texture on the page background.
- **Do not use navy blue** anywhere. Text and outlines are warm near-black (`#1d1416`).
- **Responsive:** mobile first. Breakpoints at 900px (hero layout) and 760px (grids collapse to one column). Respect `env(safe-area-inset-*)`. No horizontal page scroll.

## 8. Hero (important)

The campaign flyer (`public/hero.jpg`, 720×827) is the **background**. It already contains the coalition logos and the candidates' names and positions, so the hero text must not hide it.

- **Desktop (≥ 901px):** the flyer is right-aligned at full height (`background-size: auto 100%`) on a red base. A CSS mask fades its left side into red so the headline sits on clean red. Stage min-height about 740px.
- **Mobile (≤ 900px):** the full flyer shows at the top at its natural aspect ratio (`aspect-ratio: 720/827`, width 100%). The headline block sits below it on red.
- **Text and entrance animation:** content slides in **from alternating sides**, one after another:
  1. "VOTE THE WINNING TEAM!" (yellow, underlined) → from the **left**
  2. "Your Akuku-Toru ballot," (white, heavy) → from the **left**
  3. "ready before you vote." (black on a yellow highlight box) → from the **right**
  4. White text box with a short intro sentence → from the **left**
  5. Yellow "See my ballot" button (scrolls to `#ballot`, gentle pulse) → from the **right**

  Slide distance about 110px, duration 0.9s, ease `cubic-bezier(.2,.8,.2,1)`, staggered 0.2s to 1.25s.

## 9. Assets

| File | Size | Notes |
|---|---|---|
| `public/hero.jpg` | 1440×1654 ideal (portrait, ratio 720:827) | The campaign flyer with phone UI and icons removed. A higher-resolution original looks much sharper. |
| `public/candidates/<name>.jpg` | 800×1000 (4:5) | Head and shoulders, face in the upper half, plain or easily cropped background. Portraits currently provided were cut from the flyer, so they look soft. |

Use plain `<img>` (or `next/image` with explicit sizes). Images load lazily except the hero.

## 10. Animations and effects

All of these are turned off for users with `prefers-reduced-motion: reduce`.

- Hero text slides in from the left and right (section 8).
- Marquee scrolls continuously (about 32s per loop).
- Stat numbers **count up** from 0 when the page loads.
- Office panels: the coloured title bar grows downward when scrolled into view.
- Cards, boxes, step cards, project cards, stat tiles **pop up** (translate + scale + fade) when scrolled into view, with a 0.09s stagger inside a grid. Implement with `IntersectionObserver` in `Effects.js`, re-run on route change.
- Card hover: lifts up-left and the offset shadow grows; the portrait zooms about 2%.
- Profile header: portrait pops in with a slight rotation; name slides up; arcs gently float.
- Add `class="js"` to `<html>` with a tiny inline script so "hidden until revealed" styles only apply when JavaScript runs.

## 11. How to build it in Antigravity with Claude Opus 4.6

1. **Create the project folder** and open it in Antigravity. Put this file in the root as `PROJECT.md`.
2. **Add the images** to `public/hero.jpg` and `public/candidates/` before starting (section 9).
3. **Start the agent** with Claude Opus 4.6 selected. If Antigravity offers a planning mode, use it so the agent writes a plan first and you can approve it.
4. **Paste the prompt below.** Let the agent build in the phases listed.
5. After each phase, ask it to run `npm run dev` and check the page in the browser, on a **phone-sized viewport (390px wide)** as well as desktop.
6. When done, push to GitHub and import the repo on Vercel.

### Prompt to paste

```
Read PROJECT.md in this folder completely and treat it as the specification.
Build the website with Next.js 14 App Router in plain JavaScript, using exactly
the file structure in section 4. Work in these phases and stop to show me the
result after each one:

Phase 1: project setup, app/layout.js (Montserrat via next/font, light theme,
         metadata), app/globals.css with the design tokens from section 7,
         lib/data.js with the data from section 5.
Phase 2: components (Logo, Arcs, Nav, Portrait) and the candidate page
         /candidate/[id] from section 6.2.
Phase 3: the home page from section 6.1, with the hero exactly as in section 8.
Phase 4: all animations from section 10 and components/Effects.js, including
         prefers-reduced-motion support.
Phase 5: responsive polish at 390px, 768px and 1280px widths, accessibility
         (alt text, focus outlines, contrast), then run `npm run build` and fix
         any errors.

Rules: light theme only, no navy blue, no dark mode, no extra libraries,
no invented quotes or facts about real people. Keep placeholder text where I
have not supplied real content. Do not change the data in section 5 except to
add what I give you.
```

## 12. Acceptance checklist

- [ ] Home page loads with the flyer as the hero background on both phone and desktop
- [ ] Hero text slides in from left and right in the order in section 8
- [ ] Body background is light on every device (dark-mode phones included)
- [ ] Five office panels in ballot order, each with its own colour and number
- [ ] President and Governor tickets show two candidates each with portraits
- [ ] Assembly shows both Akuku-Toru I and Akuku-Toru II
- [ ] Every card opens `/candidate/<id>`; unknown ids show a 404
- [ ] No horizontal scrolling at 360px width
- [ ] Reduced-motion users see everything with no animation
- [ ] `npm run build` completes with no errors

## 13. Content and accuracy rules

- Names, offices and parties come only from supplied material. Do not invent biographies, projects or quotes for real people. Leave the placeholder text until the coalition provides real content.
- Do not publish an election date unless it is confirmed.
- The hero flyer mentions "Ogu/Bolo LGA". Replace `public/hero.jpg` with an Akuku-Toru flyer when one exists.
- Add a clear notice on the live site that voters should confirm their polling unit with INEC.

## 14. Ideas for later

- Photos and full bios for every candidate; an Akuku-Toru version of the flyer
- Hausa, Igbo and Nigerian Pidgin language switch
- "Share this candidate" button with a preview image for WhatsApp
- A ward finder that shows whether the voter is in Akuku-Toru I or II
- Simple admin page or a spreadsheet feed so non-developers can update candidates
