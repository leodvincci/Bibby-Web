Here’s a clean **Bibby brand color system** that matches what you already have: **deep navy authority + cool blue utility + “paper” neutrals** (your UI already leans into soft off-whites and slate text).

## 1) Core palette (brand + neutrals)

### Brand (Primary: “Bibby Navy”)

Use this for nav, primary buttons, key highlights.

| Token       | Hex         | Use                                       |
| ----------- | ----------- | ----------------------------------------- |
| `brand-600` | **#00296B** | primary button / active nav / key accents |
| `brand-700` | #002258     | hover                                     |
| `brand-800` | #001C49     | pressed / dark mode surfaces              |
| `brand-50`  | #EBEEF3     | subtle backgrounds, badges                |

### Accent (Secondary: “Catalog Blue”)

Use sparingly for links, radio selection, subtle highlights (your UI already has this vibe).

| Token        | Hex         | Use                           |
| ------------ | ----------- | ----------------------------- |
| `accent-600` | **#6FA4D1** | links, icons, selected states |
| `accent-700` | #5B86AB     | hover                         |
| `accent-50`  | #F1F6FA     | soft highlight background     |

### Neutrals (“Paper + Ink”)

These control 90% of the interface.

| Token         | Hex         | Use                                            |
| ------------- | ----------- | ---------------------------------------------- |
| `neutral-0`   | #FFFFFF     | cards/surfaces                                 |
| `neutral-50`  | **#FFFAFA** | app background (“paper”)                       |
| `neutral-100` | **#FAF7F7** | subtle section backgrounds                     |
| `neutral-300` | #E6E8EF     | borders, dividers                              |
| `neutral-700` | **#374057** | primary UI text (matches your screenshot tone) |
| `neutral-900` | #0B1220     | headings / max contrast text                   |

### Optional warm accent (“Bookmark Tan”)

Only if you want a tiny bit of warmth (badges, empty states, “Not set”).

- `warm-400`: **#C7A38E**

------

## 2) Semantic tokens (the part that keeps your UI consistent)

These are the roles you actually code against:

```
:root {
  /* Surfaces */
  --bg: #FFFAFA;
  --surface: #FFFFFF;
  --surface-2: #FAF7F7;
  --border: #E6E8EF;

  /* Text */
  --text: #0B1220;
  --text-muted: #374057;
  --text-subtle: #64748B;

  /* Brand */
  --brand: #00296B;
  --brand-hover: #002258;
  --brand-soft: #EBEEF3;

  /* Accent */
  --accent: #6FA4D1;
  --accent-hover: #5B86AB;
  --accent-soft: #F1F6FA;

  /* States */
  --success: #15803D;
  --warning: #B45309;
  --danger:  #B91C1C;

  /* Interaction */
  --link: #00296B;
  --focus-ring: #6FA4D1;
}
```

------

## 3) Component rules of thumb (so the app “reads” as Bibby)

- **Navbar:** `--surface` background, text `--text-muted`, active/CTA in `--brand`.
- **Primary button:** background `--brand`, hover `--brand-hover`, text white.
- **Secondary button:** background `--surface`, border `--border`, text `--brand`.
- **Inputs:** background `--surface`, border `--border`, focus ring `--focus-ring`, selected radio dot `--brand`.
- **Tables:** header text `--text`, row text `--text-muted`, dividers `--border`, hover row `--accent-soft` (very light).

------

## 4) Dark mode (optional, but future-proof)

If you add it later, keep the brand navy and invert the paper:

- `--bg`: `#0B1220`
- `--surface`: `#0F1B33`
- `--border`: `#1F2A44`
- `--text`: `#F8FAFC`
- `--text-muted`: `#C7D2FE`
- `--brand`: `#6FA4D1` (brand flips to the lighter blue for contrast)
- `--focus-ring`: `#6FA4D1`

This keeps the same “identity” without turning into a neon arcade.

------

If you implement **only one discipline**, make it this: **use the semantic tokens everywhere** (not raw hexes). That’s how your UI stays consistent while you iterate fast.