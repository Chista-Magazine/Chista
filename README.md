# چیستا | Chista Magazine

مجلهٔ اندیشه و جامعه — از پرسش تا شناخت

This is a static Persian RTL website for GitHub Pages, preserving the original editorial aesthetic while using **editable HTML headings** instead of lettering baked into one screenshot.

## Site sections

- **پرسش هفته** (`question.html`): one self-contained editorial question, not a mandatory chain of links.
- **مسیرهای یادگیری** (`paths.html`): the source roadmap's 3 degrees × 4 courses × 4 sessions.
- **کتابخانه** (`library.html`): the original Fanon PDF, Political Foundation Program PDF, and editable Hobbes Pages document.
- **مقاله‌ها و تحلیل‌ها** (`essays.html`): longer, evidence-based original analysis.

The first Fanon learning lesson (`lesson-fanon.html`) retains four layers: آگاهی، دانش، تفکر انتقادی، تحلیل مستقل.

## Editing homepage headings

Open `home-content.js` in GitHub, click **Edit (pencil)**, and change the text in quotation marks, for example:

```js
featuredTitle: "چرا جوامع پس از استعمار به‌سختی توسعه می‌یابند؟",
```

Then commit. The headline updates on the desktop and mobile layouts automatically. No image editing is needed.

## Publishing on your current GitHub Pages repository

Repository: https://github.com/Chista-Magazine/Chista

1. Extract the ZIP on your computer.
2. Open the repository on GitHub, on the `main` branch.
3. **Add file → Upload files**.
4. Drag the **contents** of the extracted folder (including `index.html`, `site.js`, `style.css`, `home-content.js`, `assets/`, and `files/`) to the uploader. Do not upload the ZIP as one file and do not wrap the site in an extra folder.
5. Review the changes and commit to the branch used by GitHub Pages, `main` (or follow repository review requirements if enabled).
6. Wait for the deployment. Open https://chista-magazine.github.io/Chista/ .

To publish future text-only changes, replace just the updated file(s) generated for you. PDFs belong in `files/`; images belong in `assets/`.

## Content provenance

* The three-degree program is adapted/translated from the provided “Political Foundation Program.pdf”; the original PDF is linked on the website.
* The Fanon study guide is a user-provided educational summary based on Christopher J. Lee's article in Oxford Research Encyclopedia of African History, **not** a complete book by Fanon.
* Hobbes material remains in its original Apple Pages format, accompanied by a first-page preview. It may require Apple Pages to read the full document.

The file `assets/chista-original.png` is retained for visual reference; it is no longer used as the live homepage background.
