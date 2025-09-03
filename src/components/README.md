### 🧩 `components/` - Reusable UI Components

This folder contains **non-feature-specific** components that can be reused across the entire application. It is organized into multiple categories for clarity:

- **`ui/`** – Base UI building blocks following Atomic Design principles.  
  - Examples: `Button`, `Input`, `Card`, `Modal`, `Table`, `Toast`.

- **`layouts/`** – Common, reusable layouts (not tied to Next.js `app/` routing).  
  - Use this for repeated structural patterns such as CRUD-style layouts, dashboard shells, or split-pane layouts.  
  - Example: A standardized `CrudLayout` that can be reused for `users`, `clients`, `products`.

- **`icons/`** – Centralized icon management.  
  - All icons (custom or from libraries) are imported and re-exported here.  
  - This provides a **single source of truth** and prevents tight coupling to a specific icon library.  
  - Example:  
    ```ts
    export { UserIcon } from '@heroicons/react/24/outline'
    export { CustomLogoIcon } from './custom-logo-icon'
    ```

- **`illustrations/`** – Decorative assets and illustrations used throughout the app.  
  - Example: `NotFoundIllustration`, `EmptyStateIllustration`.  
  - Keep them **purely visual** (no logic, no text).

- **`status/`** – Status-based components that combine illustrations, text, and actions.  
  - These represent higher-level UI states like empty search results, error boundaries, or 404 pages.  
  - Example:  
    - `NotFoundStatus` → includes illustration, message, and a “Go Home” button  
    - `EmptySearchStatus` → includes illustration and “No results found” text  

---

**Guidelines**:  
- Use `ui/` for atomic, composable pieces.  
- Use `layouts/`, `status/`, `icons/`, and `illustrations/` for **higher-level reusable patterns**.  
- Never put **feature-specific** components here; those belong inside their respective `features/` module.  
