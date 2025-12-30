## Sprint Slice: Build Nav Component (Bibby Web)

### Goal

Build a **static, presentational** top navigation component that matches the micro-frontend mock.

### Why (Job-to-be-done)

Give users a consistent header that orients them and exposes the primary sections—without implementing navigation logic yet.

---

## Scope (This Slice Only)

### Must-have UI

* **Left:** Bibby logo/wordmark (visual only)
* **Center:** Primary nav items (visual only)

    * Search
    * Library Management
    * Book Cart
    * Booklists
* **Right:** **“Sign In”** action (visual only)

### Must-have Layout/Styling

* Clean, minimal spacing
* Horizontal alignment: logo | links | sign in
* Looks good on typical desktop width (no responsive behavior required)

---

## Acceptance Criteria (Definition of Done)

* A `NavBar` component renders with the 3-section layout (left/center/right)
* Nav items appear as styled text links/buttons (no routing)
* A **“Sign In”** button/link renders on the right
* Component is reusable and easy to drop onto any page
* Styling is simple, unobtrusive, and readable

---

## Implementation Notes

* Keep as a **pure UI component** (no router dependency).
* Keep it easy to extend later (links array constant or props).

---

## Non-goals (for this slice)

* Wire up routes for each nav item
* Add active-state styling
* Add responsive collapse (simple menu)
* Add accessibility pass (semantic nav, aria labels, focus rings)
* Authentication logic (actual sign-in flow)
* Role-based nav items
* Notifications, badges, dropdown profile menus
