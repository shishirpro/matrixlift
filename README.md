# matrixlift

Redesigned website for MATRIX Lift Limited / MATRIX Engineering Services — a vertical transportation company in Bangladesh.

Static site built with HTML, Tailwind CSS v4 and vanilla JavaScript.

## Run

Open `src/index.html` in a browser. No server needed.

## Build CSS

```
npm install
npm run build   # one-off build of src/output.css
npm run dev     # rebuild on every change
```

## Structure

- `src/*.html` — pages (home, about, background, CEO message, management, brands, products, product detail, services, gallery, news, article, contact)
- `src/js/data.js` — all content: products, services, team, contact details, news
- `src/js/render.js` — shared card and section templates
- `src/js/main.js` — header, footer, menu, animations, lightbox, forms
- `src/input.css` — Tailwind source; `src/output.css` is the built file
- `src/img/` — images

The quote and newsletter forms are front-end only and need a backend before launch.
