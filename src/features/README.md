# Purpose

The **`features/`** folder contains all **domain-specific modules** of the application.  
Each feature is self-contained and groups together everything related to its domain: UI components, data fetching, validation, hooks, etc.  

This structure helps keep the codebase modular, predictable, and easy to scale.

---

# File Organization

- Each feature lives inside its own folder:  
  ```
  features/
    users/
    prices/
    discussions/
  ```

- By default, start with a **single file** (`users.tsx`, `prices.ts`, etc.).  
  - This keeps features small and avoids over-engineering.  
  - If the feature grows, expand into subfolders (`api/`, `schemas/`, `hooks/`, `components/`, etc.).  
  - Do not split preemptively — only when necessary.

- Common optional subfolders/files:  

  - `index.tsx` → main entry point, if the feature exports a root component.  
  - `keys.ts` → React Query keys for this feature.  
  - `api/` → API functions that call backend endpoints and perform data transformations.  
  - `schemas/` → Zod or other validation schemas for responses and inferred types.  
  - `hooks/` → React hooks specific to this feature (React Query wrappers, form hooks, filters, etc.).  
  - `components/` → UI components specific to this feature only.

---

# Guidelines

- **Self-contained**: A feature should hold everything needed for its domain.  
- **Avoid duplication**: If something is generic, move it to `lib/`, `utils/`, `hooks/`, or `types/`.  
- **Single entry, expand when needed**:  
  - Start small with one file.  
  - Expand into subfolders when logic naturally grows.  
- **Independent**: Features should not import directly from each other unless explicitly allowed by architecture rules.  

---

# What Belongs Here?

✅ Examples:  
- `users/` → login form, user card, API calls for users, user-related hooks.  
- `prices/` → price table, price filter hooks, API calls for prices.  
- `discussions/` → comment list, discussion creation schema, discussion hooks.  

❌ Does NOT belong here:  
- Generic UI components (→ `ui/`).  
- Domain-agnostic hooks (→ `hooks/`).  
- Shared utilities like `isObject` or `formatDate` (→ `utils/`).  
- Shared business logic like auth/session handling (→ `lib/`).  
