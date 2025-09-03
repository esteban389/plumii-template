# 🔧 utils/

This folder contains **general-purpose, domain-agnostic utilities**.  
These helpers are **small, composable functions** that can be used anywhere in the app — even outside of it.  
Think of `utils/` as the project’s toolbox.

---

## 📂 Typical Contents

- **object.ts** → Object-related helpers (`isObject`, `hasKey`, `deepClone`).  
- **date.ts** → Date manipulation (`formatDate`, `parseDate`, `isPastDate`).  
- **array.ts** → Array helpers (`unique`, `chunk`, `flatten`).  
- **string.ts** → String helpers (`capitalize`, `slugify`, `getInitialsFromPhrase`).  

---

## File Organization

- Prefer a single file per category (e.g. date.ts, object.ts, array.ts).

- If utilities for a category grow too large, expand into a subfolder prefixed with _:

```vbnet
utils/
├── object.ts
├── _object/
│   └── deep-merge.ts
└── date.ts
```

---


## 🔑 Guidelines

- **Always domain-agnostic.**  
  Utilities should not know anything about business concepts.  
  Example: Instead of `getUserInitials(user)`, create `getInitialsFromPhrase(text)` and let the caller pass `user.name`.

- **Keep them pure.**  
  Most utils should be pure functions with no side effects. If side effects are needed (e.g. browser APIs), consider if it belongs in `lib/` instead.  

- **Categorize by type.**  
  Keep helpers organized (e.g. `date.ts`, `array.ts`) instead of dumping everything into one file.  

- **Reusable beyond this project.**  
  A good heuristic: if you could copy-paste the file into another project and it would still make sense → it belongs in `utils/`.

---

## ✅ Examples

**Correct placement in `utils/`:**
- `string/getInitialsFromPhrase("Hello World")` → Generic and reusable.  
- `date/isWithinRange(date, start, end)` → Works with any date range.  
- `object/hasKey(obj, key)` → Generic object utility.  

**Incorrect (should go elsewhere):**
- `getUserInitials(user)` → Too domain-specific → should use `utils/string.getInitialsFromPhrase()` inside a feature or UI component.  
- `login()` → Infrastructure + business logic → belongs in `lib/auth/`.  
- `isPriceInRange(value)` → Feature-specific → belongs in `/features/prices/`.  
