# EarlyLayers

Independent research desk — Asian onchain capital markets. earlylayers.xyz

Astro static site. No database, no CMS, no build service to maintain.

## Run locally

    npm install
    npm run dev        # http://localhost:4321

## Publish a daily note

Create `src/content/notes/YYYY-MM-DD.md`:

    ---
    date: 2026-07-29
    title: "Short handle for the note"
    ---

    One observation. Two or three sentences.

Commit and push. Live in ~40 seconds.

## Publish a research record

Create `src/content/research/00N-slug.md`:

    ---
    record: 5
    title: "The record title"
    subject: "Entity or theme under examination"
    date: 2026-10-02
    status: research        # research → drafting → published
    sources: 14             # count of primary sources read
    summary: "One paragraph. Shows on the index."
    position: |             # omit entirely until you're ready to take a view
      Your thesis, first person.

      Blank line separates paragraphs.
    ---

    Findings body in markdown. Desk voice ("we"). Every claim traceable.

**The `status` field controls everything.** `research` and `drafting` records
appear on the index with their status shown and the Position block marked
pending — they get no individual page. Set `status: published` and add a
`position:` and the record goes live with its own URL.

That's deliberate: you can't accidentally publish a record without a position,
and you can't publish a position before the findings exist.

## Deploy

Pushed to GitHub → Vercel auto-deploys on every commit to main.
