# Devlog: Search Page UI Overhaul

**Date:** January 2, 2026  
**Sprint:** Frontend Polish  
**Scope:** Search page styling, brand system documentation, Radix UI integration

---

## Summary

Overhauled the Bibby search page from a functional prototype to a polished, production-quality interface. Established a comprehensive brand color system with semantic tokens, replaced basic radio buttons with accessible segmented controls using Radix UI, and refined the visual hierarchy throughout the search experience.

**Files Changed:**
- `Docs/brandColors.md` (new) — Brand color system documentation
- `src/style.css` — Complete search page styling rewrite
- `index.html` — Added animation libraries and Radix dependencies
- `package.json` — Added `@radix-ui/themes` and `@radix-ui/colors`
- `README.md` — Updated hero image

---

## The Problem

The initial search page was functional but looked amateur. Inconsistent colors, no hover/focus states, primitive radio buttons for filter selection, and no documented design system. This undermined the professional impression needed for portfolio demonstrations and job interviews.

**Before state:**
- Raw radio buttons for Title/Author/Publisher/ISBN/Tags filtering
- Hardcoded colors scattered throughout CSS with no consistency
- No focus rings or keyboard navigation feedback
- Generic styling that didn't communicate "library management" identity

---

## Technical Decisions

### 1. Brand Color System Architecture

Created a documented token-based color system before writing any CSS. The system has three layers:

**Primitive tokens** (raw values):
```
brand-600: #00296B (Bibby Navy)
accent-600: #6FA4D1 (Catalog Blue)
neutral-50: #FFFAFA (Paper background)
```

**Semantic tokens** (roles):
```css
--brand: #00296B;      /* Primary actions */
--bg: #FFFAFA;         /* App background */
--border: #E6E8EF;     /* Dividers */
--focus-ring: #6FA4D1; /* Keyboard focus */
```

**Component rules** (usage patterns):
- Primary buttons: `--brand` background, white text
- Inputs: `--surface` background, `--focus-ring` on focus
- Tables: `--text-muted` for body, `--border` for dividers

**Rationale:** This mirrors how design systems work at companies like Stripe or Linear. The documentation serves as a single source of truth that prevents color drift and makes theming (including dark mode) straightforward later.

### 2. Radix UI for Segmented Controls

Replaced native radio buttons with Radix UI's `RadioGroup` primitive styled as segmented controls.

**Why Radix over custom implementation:**
- Handles ARIA attributes automatically (`role="radiogroup"`, `aria-checked`)
- Manages keyboard navigation (arrow keys, focus trapping)
- Provides `data-state="checked"` for styling without manual class toggling
- Battle-tested accessibility that would take days to implement correctly

**Styling approach:**
```css
.seg[data-state="checked"] {
  background: #ffffff;
  border: 1px solid rgba(13, 59, 102, 0.14);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
}
```

This declarative pattern means the component's visual state is always synchronized with its accessibility state.

### 3. Search Input Focus Treatment

Implemented a prominent focus ring using the accent orange (`#EE964B`):

```css
#search-input:focus {
  border: 1px solid #EE964B;
  box-shadow: 0 0 0 4px rgba(238,150,75,0.18);
}
```

**Rationale:** The orange provides high contrast against the navy/blue palette, making it immediately obvious which element has focus. The spread shadow creates a "glow" effect that's visually distinct without being harsh.

### 4. Results Table Styling

Applied subtle differentiation without heavy borders:
- Header row uses `--text-muted` (#305066) for subdued authority
- Body rows use slightly lighter text with ample padding (15px vertical)
- Alternating row backgrounds at 5% opacity—barely visible but aids scanning
- No vertical borders; horizontal rhythm created through padding alone

---

## Implementation Notes

### CSS Organization

Restructured the stylesheet with numbered section comments:

```css
/* =========================================================
   1) Root Variables & Resets
   ========================================================= */

/* =========================================================
   2) Navigation
   ========================================================= */
```

This makes the 300+ line stylesheet navigable and signals intentionality about structure.

### Animation Libraries Added

Added three animation libraries to `index.html`:
- `cssanimation.min.css`
- `cssanimation-utility.min.css`  
- `animate.css`

**Honest assessment:** This was premature. I wanted the option for entrance animations but haven't actually implemented any yet. These add ~100KB of render-blocking CSS. Should remove until actually needed.

### Radix Theming Consideration

Added `@radix-ui/themes` but didn't fully adopt its theming system. Currently using it only for the segmented control primitive while writing custom CSS for everything else.

**Tradeoff:** Radix Themes would give me a complete design system out of the box, but I wanted to understand CSS architecture fundamentals by building it myself. This is a learning investment that might not make sense in a production codebase.

---

## What I Learned

### 1. Documentation Without Implementation Is Theater

I spent significant time creating a beautiful `brandColors.md` with semantic tokens, dark mode considerations, and component rules. Then I wrote CSS with hardcoded hex values everywhere.

The documentation is valuable—it clarified my thinking and will guide future work—but it's currently aspirational rather than operational. **Action item:** Replace all hex values in CSS with `var(--token)` references.

### 2. The Value of Radix's `data-state` Pattern

Before Radix, I would have managed selection state with JavaScript class toggling:

```javascript
// Old approach
button.classList.toggle('selected', isSelected);
```

Radix's `data-state` attribute means the accessibility state and visual state are always synchronized. There's no possible bug where the screen reader says "selected" but the visual styling says otherwise.

### 3. Focus Rings Are Non-Negotiable

Keyboard users need to know where they are. The `:focus-visible` pseudo-class lets you show focus rings only for keyboard navigation (not mouse clicks), which was my main hesitation about prominent focus styling.

```css
.seg:focus-visible {
  outline: 3px solid rgba(244, 211, 94, 0.55);
  outline-offset: 2px;
}
```

### 4. Magic Numbers Create Debt

Several positioning values are brittle pixel offsets:

```css
.book-search-icon { right: 61px; }
.search-bar-divider { right: 85px; }
```

These work at one viewport size with one font. Flexbox or CSS Grid would handle this more robustly. This is technical debt I'm consciously accepting for now.

---

## Known Issues & Debt

| Issue | Severity | Notes |
|-------|----------|-------|
| Hardcoded hex values | High | Need to use CSS variables |
| Unused animation libraries | Medium | Remove or defer loading |
| Orange accent undocumented | Medium | Add to brand palette or remove |
| Magic number positioning | Low | Refactor to flexbox when time permits |
| `tbody:nth-child` selector bug | Low | Should target `tr` not `tbody` |

---

## Screenshots

**Empty state:**  
Search bar with segmented filter controls, "Author" selected, no results displayed.

**With results:**  
Single result showing ISBN, title, author, and location columns. Clean horizontal rhythm without heavy borders.

**Zero results state:**  
"Results (0)" header with empty table area below.

---

## Interview Framing

### 30-Second Version

"I built a search interface for my library management app that needed to feel professional while supporting multiple filter types. I established a semantic color token system for consistency, implemented accessible segmented controls using Radix UI primitives, and focused on keyboard navigation. The main tradeoff was choosing between Radix's full theming system versus custom CSS—I went custom for learning, but documented the architecture so migration would be straightforward."

### 2-Minute Version

"**Problem:** My library app needed a search page that could filter books by title, author, publisher, ISBN, or tags. The initial implementation was functional but looked amateur—inconsistent colors, no hover states, poor accessibility.

**Approach:** I started by documenting a brand color system with semantic tokens—not just 'this blue' but 'this is `--brand` for primary actions, `--accent` for links.' This mirrors how design systems work at companies like Stripe. I chose Radix UI for the segmented filter control because it handles accessibility out of the box—keyboard navigation, ARIA attributes, focus management. Then I styled it to match my brand.

**Tradeoffs:** I could have used Radix Themes' complete system, which would have been faster, but I wanted to learn CSS architecture fundamentals by building it myself. I also added animation libraries prematurely—I got excited about polish before validating I needed them. That's technical debt I need to clean up.

**Result:** The search page now has professional visual feedback—focus rings, selection states, subtle shadows—and passes keyboard navigation testing. More importantly, I have a documented design system that will keep the app consistent as I add more pages.

**What I'd do differently:** Actually implement the CSS variables I documented instead of hardcoding values. Documentation without implementation is just theater. That's my immediate next step."

---

## Next Steps

1. [ ] Replace hardcoded hex values with `var(--token)` references
2. [ ] Remove unused animation libraries from `index.html`
3. [ ] Add "Bookmark Orange" to brand palette documentation
4. [ ] Fix `tbody:nth-child(even)` → `tbody tr:nth-child(even)`
5. [ ] Add loading state for search results
6. [ ] Implement actual search functionality (currently static)

---

## Time Spent

| Activity | Time |
|----------|------|
| Brand system documentation | 1.5 hrs |
| Radix UI research & integration | 1 hr |
| CSS styling & iteration | 2.5 hrs |
| Screenshot review & refinement | 0.5 hrs |
| **Total** | **5.5 hrs** |

---

*This devlog is part of the Bibby project documentation. See also: [Sprint Log](./sprint-log.md), [Architecture Decision Records](./adr/)*
