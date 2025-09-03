# Purpose

The **`types/`** folder contains **shared, generic TypeScript type definitions**.  
These are **not feature-specific** and can be safely reused across multiple parts of the application.  

---

# File Organization

- Types are organized by **category or concept**, not by feature.  
  - Example: `api.ts` → reusable API response/HTTP types.  
  - Example: `common.ts` → utility types like `Nullable<T>` or `WithId<T>`.  
  - Example: `env.ts` → types that describe validated environment variables.  

- Each file can hold several related types.  
  - If types grow too large, expand into a `_subfolder/` and keep an entry file.  

---

# Guidelines

- Use this folder only for **reusable, generic, cross-cutting types**.  
- Keep **feature-specific types** inside their respective `features/` module.  
- Keep **lib-specific types** next to the relevant file in `lib/`.  
- Avoid dumping everything into a single `index.d.ts` — prefer clear categories.  

---

# What Belongs Here?

✅ Examples:  
- `Pagination` type for reusable pagination metadata.  
- `ApiResponse<T>` wrapper type.  
- Utility types like `Nullable<T>`, `DeepPartial<T>`.  
- Types for global config values like `Env`.  

❌ Does NOT belong here:  
- `User` type if it’s only used in authentication → (`lib/auth.ts`).  
- `PriceRange` type used only in pricing → (`features/prices/`).  
- Styling-related types (keep them with the component or utility).  
