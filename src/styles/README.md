# Purpose

The **`styles/`** folder contains **global styles** that apply across the entire application.  
Since this project uses **Tailwind CSS**, most styling will be handled through utility classes inside components.  

---

# File Organization

- `globals.css` is the primary file in this folder.  
  - It includes Tailwind’s `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;`.  
  - It may also contain global resets, CSS variables, and project-wide overrides.  

- Additional files may exist if there’s a strong need for reusable styles that cannot be expressed with Tailwind classes.  
  - Example: `themes.css` for light/dark mode color tokens.  
  - Example: `print.css` for print-only overrides.  

---

# Guidelines

- Prefer **Tailwind utility classes** inside components.  
- Use this folder only for:  
  - Global resets and overrides.  
  - Theme variables (colors, spacing, etc.) if not handled by Tailwind config.  
  - Rare CSS rules that cannot be expressed through utilities.  

---

# What Belongs Here?

✅ Examples:  
- `globals.css` with Tailwind imports.  
- Custom scrollbar styles.  
- Global typography resets.  
- CSS variables for themes.  

❌ Does NOT belong here:  
- Component-specific styles (should be styled via Tailwind in the component itself).  
- Feature-specific style hacks (should live closer to the feature or be refactored into utilities/components).  
