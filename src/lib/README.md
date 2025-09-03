# 🛠️ lib/

This folder contains **shared application logic and infrastructure code** that supports multiple features across the app.  
It acts as the bridge between **raw configuration (`config/`)** and **feature-specific logic (`features/`)**.

---

## 📂 Typical Contents

- **api/** → API client setup (fetch/axios wrappers, base query logic).  
- **auth/** → Authentication helpers (login, logout, token handling, session refresh).  
- **errors/** → Global error handling, error classes, reporting.  
- **storage/** → Wrappers around browser storage (localStorage, sessionStorage).  
- **formatters/** → Domain-related formatters (e.g. currency formatter used across features).  

---

## File Organization

- Prefer a single file per topic (e.g. auth.ts, navigation.ts).

- If the code grows too large, expand into a subfolder prefixed with _, keeping the main file as the entry point:

```vbnet
lib/
├── auth.ts
├── _auth/
│   └── server-actions.ts
└── navigation.ts
```

---

## 🔑 Guidelines

- **Depends on `config/` and `utils/`, never on `features/`.**  
  Example: `apiClient.ts` may import `config/env.ts` for the API URL and `utils/object.ts` for serialization.  

- **Shared across the app.**  
  If logic is only used in one feature (e.g. “isPriceInRange”), it belongs in `/features/prices/`, not here.  

- **Can include infrastructure.**  
  HTTP clients, storage adapters, and global error handlers belong here.  

- **Domain-oriented but generic enough.**  
  Logic here should make sense in multiple parts of the app, not just one page/module.

---

## ✅ Examples

**Correct placement in `lib/`:**
- `auth/login.ts` → Uses `config/env.API_URL` and axios wrapper to log a user in.  
- `api/client.ts` → Configured axios instance with interceptors.  
- `errors/AppError.ts` → Custom error class used across features.  

**Incorrect (should go elsewhere):**
- `isPriceInRange(value)` → Only used in the Prices feature → belongs in `/features/prices/`.  
- `getInitialsFromPhrase(text)` → Generic → belongs in `/utils/string.ts`.  
