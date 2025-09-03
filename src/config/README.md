# ⚙️ App Configuration

This folder contains all **runtime configuration** for the application.  
Each file defines and exports **validated, ready-to-use settings** that can be safely imported anywhere in the codebase.  

Think of `config/` as the **“source of truth” for environment and setup values** — nothing here should contain business logic.

---

## 📂 Structure

- **env/**  
  Validation and normalization of environment variables.  
  Example: `env.ts` exporting `env.APP_URL`, `env.API_BASE_URL`, etc.

- **logs/**  
  Configuration for logging behavior (e.g. formatting, levels, transports).

- **services/** *(optional, project-specific)*  
  Setup for external providers (e.g. error tracking, feature flags, A/B testing).  

- **index.ts** *(optional)*  
  Central entry point for re-exporting configs.

---

## 🔑 Guidelines

- **No business logic here.**  
  For example, do not define `login()` or API calls — those belong in `lib/`.

- **Always validate inputs.**  
  Never export raw `process.env` values. Use schemas (e.g. Zod) to validate types, required fields, and defaults.  

- **Export only final values.**  
  Modules should provide **ready-to-use settings**, not helpers.  

---

## ✨ Purpose

- Centralized and explicit configuration.  
- Strong typing + runtime validation → fewer environment errors.  
- Clear separation between **configuration (here)** and **logic (in `lib/`)**.  
