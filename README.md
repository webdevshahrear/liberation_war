# Liberation War Archive (1971) — মুক্তিযুদ্ধ আর্কাইভ

A digital historical archive website dedicated to preserving, cataloging, and presenting the history, official documents, oral testimonies, and rare historical photographs of the **1971 Bangladesh Liberation War**.

Built with a clean, lightweight **HTML5 and CSS3-First Architecture** with minimal, essential Vanilla JavaScript.

---

## 🏛️ Project Highlights

- **HTML5 & CSS3 First**: All historical content (10 documents, 6 oral history entries, 12 photographs) is embedded directly into semantic HTML markup. No heavy JSON data files or client-side rendering loops.
- **Native HTML5 Media Controls**: Audio testimonies use native `<audio controls>` requiring **0 lines of JavaScript**.
- **Native HTML Expandable Details**: Transcripts and full text use standard `<details><summary>` tags for native accordion behavior without external scripts.
- **Native Form Validation**: Forms utilize HTML5 `required`, `type="email"`, and file attribute checks with minimal script feedback.
- **Minimal JavaScript (~100 lines total)**: All interactivity is consolidated into a single lightweight [assets/js/main.js](file:///d:/Web%20development/liberation%20war/assets/js/main.js).
- **Responsive Layout**: Pure CSS Grid and Flexbox with dedicated mobile and tablet media queries.

---

## 🎨 Design Direction

- **Primary**: Deep Forest Green (`#12372A`)
- **Secondary**: Dark Charcoal (`#17211D`)
- **Accent**: Heritage Red (`#C62828`)
- **Archival Brass / Gold**: (`#B89758`)
- **Background**: Warm Off-white (`#F8F7F2`)
- **Typography**:
  - Headings: `Playfair Display` (Google Fonts)
  - Body: `Inter` (Google Fonts)
  - Bengali: `Noto Sans Bengali` (Google Fonts)

---

## 📁 File Structure

```text
liberation-war-archive/
│
├── index.html                   # Homepage (Hero, Highlights, Timeline)
├── documents.html               # Searchable & Filterable Document Catalog
├── interviews.html              # Oral History with Native <audio controls>
├── gallery.html                 # Museum Photo Gallery with Simple Lightbox
├── about.html                   # Mission, 1948–1971 Timeline & Archival Standards
├── contact.html                 # Inquiry Form with HTML5 Validation
├── 404.html                     # Archival 404 Error Page
├── README.md                    # Documentation
│
└── assets/
    ├── css/
    │   ├── style.css            # Design System & Styling
    │   └── responsive.css       # Mobile & Tablet Breakpoints
    │
    ├── js/
    │   └── main.js              # Minimal Global Script (Menu, Filter, Lightbox)
    │
    ├── images/                  # 21 Authentic Historical Photographs & Scans
    └── media/
        └── historical_audio_sample.ogg # Archival Audio Recording
```

---

## 🚀 Running the Website

1. **Python HTTP Server**:
   ```bash
   python -m http.server 8080
   ```
   Open `http://localhost:8080/index.html` in your browser.

2. **Direct Browser Opening**:
   Double click [index.html](file:///d:/Web%20development/liberation%20war/index.html) to view directly in Chrome, Edge, Firefox, or Safari.
