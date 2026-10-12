# Nezar Dev — Portfolio

Personal portfolio of **Nezar EL AYACHI**, a web & mobile developer.
A single-page, bilingual (English / French) resume-style site featuring experience,
education, skills, languages and projects.

**Live:** https://nezarea.github.io/My-Portfolio/

## Features

- Bilingual **EN / FR** with instant language switching (saved in `localStorage`)
- **Light / dark** theme toggle (no flash on load)
- Resume sections: About, Experience, Education, Skills, Languages, Projects, Contact
- Animated skill bars, scroll-spy navigation and a scroll progress bar
- Print / "Save as PDF" resume stylesheet
- SEO ready: Open Graph, Twitter card and JSON-LD `Person` schema
- Contact form via [Formspree](https://formspree.io/)

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla)
- [Tailwind CSS](https://tailwindcss.com/) v3 (built locally, no CDN)
- [AOS](https://michalsnik.github.io/aos/) scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js) typewriter effect
- [Vanta.js](https://www.vantajs.com/) + three.js animated hero background
- [Font Awesome](https://fontawesome.com/) icons, Inter font

## Project Structure

```
My-Portfolio/
├── index.html              # The site (single page, all sections)
├── assets/                 # Images, CV (Cv.pdf), logos and APK demos
├── code/
│   ├── input.css           # Tailwind entry (@tailwind directives)
│   ├── output.css          # Compiled Tailwind (generated, committed)
│   ├── styles.css          # Custom styles, theming, timeline, print styles
│   └── script.js           # Translations (EN/FR) + site interactions
├── tailwind.config.js
├── package.json
└── LICENSE
```

## Getting Started

No build step is required to view the site — `index.html` uses the committed
`code/output.css`. Just open `index.html` in a browser.

To work on the Tailwind styles:

```bash
npm install

# Rebuild the stylesheet after editing index.html or code/script.js
npx tailwindcss -i code/input.css -o code/output.css --minify
```

`tailwind.config.js` scans `index.html` and `code/**/*.js`, so remember to rebuild
after adding new utility classes.

## Customization

- **Translations / text** — edit the `translations` object in `code/script.js`
  (keys are shared with the `data-i18n` attributes in `index.html`).
- **Skills, projects, experience, education** — edit `index.html`; translate the
  text under the matching `data-i18n` keys in `code/script.js`.
- **CV** — replace `assets/Cv.pdf`.
- **Photo / logo** — replace `assets/me.png` and `assets/logo site.svg`.

## Deployment

Hosted with **GitHub Pages** from the `main` branch (root). Push to `main` and the
site updates automatically at https://nezarea.github.io/My-Portfolio/.

## License

Proprietary — **All Rights Reserved**. Personal data and content may not be copied,
scraped or reused. See [LICENSE](./LICENSE).

## Contact

- Email: nezarelayachi@gmail.com
- GitHub: [@NezarEa](https://github.com/NezarEa)
- LinkedIn: [Nezar EL AYACHI](https://www.linkedin.com/in/nezar-el-ayachi-68b0192a2/)
