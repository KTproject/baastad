# The Båstad Edit — Static Website

A standalone, Vercel-ready static editorial website for **The Båstad Edit**.

## Included files

- `index.html` — full one-page structure and content
- `styles.css` — editorial Scandinavian visual system and responsive layout
- `script.js` — frontend-only request form handling with TODO notes for backend integration

## Run locally

Open `index.html` directly in your browser, or run any simple static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy on Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Framework preset: **Other** (or no framework).
4. Build command: _none_.
5. Output directory: project root (`.`).
6. Deploy.

Because this is static HTML/CSS/JS, no build step is required.

## Form behavior (current)

The request form is currently frontend-only:

- validates required fields in browser
- shows polished success/error feedback
- logs submitted payload to browser console

## Next step (recommended)

Add a Vercel serverless endpoint (e.g. `api/request.js`) to:

1. send submission details by email to `thomassen.kristine@gmail.com`
2. save each submission to Google Sheets

Important: keep credentials in Vercel environment variables and never in client-side JavaScript.
