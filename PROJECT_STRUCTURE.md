# Project Structure Overview

This document provides a comprehensive overview of the project's architecture and folder organization within the `src/` directory. This is a Next.js application that follows a well-structured, modular approach to code organization.

## 📁 Root Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/     # Reusable UI components
├── features/       # Domain-specific modules and business logic
├── config/         # Application configuration and environment setup
├── lib/            # Shared application logic and infrastructure
├── hooks/          # Shared React hooks
├── utils/          # General-purpose utility functions
├── styles/         # Global styles and CSS configuration
└── types/          # Shared TypeScript type definitions
```

## 🏗️ Architecture Layers

The project follows a layered architecture pattern with clear separation of concerns:

1. **Configuration Layer** (`config/`) – Environment and setup values  
2. **Infrastructure Layer** (`lib/`, `utils/`, `hooks/`) – Shared logic and utilities  
3. **Domain Layer** (`features/`) – Business logic and domain-specific code  
4. **Presentation Layer** (`components/`, `app/`) – UI components and pages  
5. **Type System** (`types/`) – Cross-cutting type definitions  

---

## 📂 Detailed Folder Breakdown

### 🚀 `app/` – Next.js App Router
- **Purpose**: Contains Next.js App Router pages, layouts, and routing logic.  
- **Contents**:  
  - `layout.tsx` – Root layout with font configuration and metadata  
  - `page.tsx` – Home page component  
  - `favicon.ico` – Application favicon  
- **Key Features**: Uses Geist fonts, Tailwind CSS, and follows Next.js 15+ App Router conventions  

---

### 🧩 `components/` – Reusable UI Components
This folder contains **non-feature-specific UI components** organized into categories:  

- **`ui/`** – Base UI components following Atomic Design principles.  
  - Layout (Box, Flex, Grid, Stack, Container)  
  - Typography (Text, Heading, Label, Caption)  
  - Form (Input, Checkbox, Radio, Select, DatePicker)  
  - Feedback (Alert, Toast, Spinner, Progress, Skeleton)  
  - Overlay (Modal, Dialog, Drawer, Tooltip, Popover)  
  - Navigation (Tabs, Menu, Dropdown, Breadcrumb, Pagination)  
  - Utility (Spacer, Divider, Portal, Accordion, Collapse)  
  - Data Display (Card, Table, List, Badge, Avatar)  
  - Actions (Button, IconButton, ToggleButton)  

- **`layouts/`** – Shared structural layouts not tied to routing.  
  - Example: CRUD-style layouts reused across Users, Clients, Products.  

- **`icons/`** – Centralized icon management.  
  - All icons (custom or library) are imported and re-exported here to avoid coupling to a single provider.  

- **`illustrations/`** – Decorative visual assets used across the app.  
  - Example: `NotFoundIllustration`, `EmptyStateIllustration`.  

- **`status/`** – Status-driven UI components that combine illustration, text, and actions.  
  - Example: `NotFoundStatus` (illustration + message + “Go Home” button).  

**Guidelines**:  
- `ui/` for low-level building blocks.  
- `layouts/`, `status/`, `icons/`, `illustrations/` for higher-level reusable patterns.  
- Feature-specific components belong in their respective `features/` module.  

---

### 🎯 `features/` – Domain-Specific Modules
- **Purpose**: Self-contained modules encapsulating business logic and UI for a domain.  
- **Structure**:  
  - Start with a single file (e.g., `users.tsx`).  
  - Expand into subfolders when complexity grows:  
    ```
    features/users/
    ├── index.tsx      # Main entry point
    ├── keys.ts        # React Query keys
    ├── api/           # Backend API functions
    ├── schemas/       # Zod schemas for validation
    ├── hooks/         # Feature-specific hooks
    └── components/    # Feature-specific components
    ```  
- **Examples**: `users/`, `prices/`, `discussions/`  
- **Guidelines**: Keep modules self-contained, avoid duplication, expand only when needed.  

---

### ⚙️ `config/` – Application Configuration
- **Purpose**: Runtime configuration and environment setup.  
- **Guidelines**:  
  - Only configuration values, no business logic.  
  - Always validate inputs using schemas (e.g., Zod).  
  - Export ready-to-use settings, not helpers.  
- **Structure**:  
  - `env/` – Environment validation  
  - `logs/` – Logging config  
  - `services/` – External providers (optional)  
  - `index.ts` – Central exports (optional)  

---

### 🛠️ `lib/` – Shared Application Logic
- **Purpose**: Infrastructure code and shared business logic.  
- **Dependencies**: Can depend on `config/` and `utils/`, never on `features/`.  
- **Examples**:  
  - `api/` – API client setup (Axios, fetch wrappers)  
  - `auth/` – Authentication helpers  
  - `errors/` – Error handling classes  
  - `storage/` – Local/session storage wrappers  
  - `formatters/` – Domain-related formatters (currency, dates)  

---

### 🪝 `hooks/` – Shared React Hooks
- **Purpose**: Domain-agnostic React/browser hooks.  
- **Examples**:  
  - DOM/browser: `useMediaQuery`, `useWindowSize`, `useIsMounted`  
  - Events: `useEventListener`, `useKeyboardShortcut`  
  - Refs: `useMergedRefs`, `useForwardRef`  
  - Next.js: `useRouterPath`, `useSafeNavigation`  
- **Guidelines**:  
  - No business logic.  
  - Isolated and reusable across app.  
  - File naming: kebab-case (`use-media-query.ts`).  

---

### 🔧 `utils/` – General-Purpose Utilities
- **Purpose**: Small, pure, reusable functions.  
- **Organization**:  
  - Single file per category (`date.ts`, `object.ts`, `array.ts`).  
  - Expand into `_subfolder/` if growth requires.  
- **Examples**:  
  - `object.ts` – `isObject`, `hasKey`, `deepClone`  
  - `date.ts` – `formatDate`, `parseDate`, `isWithinRange`  
  - `array.ts` – `unique`, `chunk`, `flatten`  
  - `string.ts` – `capitalize`, `slugify`, `getInitialsFromPhrase`  

---

### 🎨 `styles/` – Global Styles
- **Purpose**: Global CSS and Tailwind setup.  
- **Primary File**: `globals.css` with Tailwind directives.  
- **Contents**: Resets, theme variables, custom scrollbar styles.  
- **Guidelines**: Prefer Tailwind utilities in components; keep this minimal.  

---

### 📝 `types/` – Shared TypeScript Types
- **Purpose**: Cross-cutting, generic type definitions.  
- **Examples**:  
  - `api.ts` – API/HTTP types  
  - `common.ts` – Utility types (`Nullable<T>`, `WithId<T>`)  
  - `env.ts` – Environment types  
- **Guidelines**:  
  - Keep feature-specific types in `features/`.  
  - Avoid dumping everything into `index.d.ts`.  

---

## 🔄 Dependency Flow

```
config/ → lib/ → features/ → components/ → app/
   ↓        ↓        ↓
utils/ → hooks/ → types/
```

- `config/` – no dependencies  
- `utils/` and `types/` – independent  
- `lib/` – can depend on `config/`, `utils/`  
- `hooks/` – can depend on `utils/`, `types/`  
- `features/` – can depend on `lib/`, `utils/`, `hooks/`, `components/`, `types/`  
- `components/` – independent from business logic  
- `app/` – can depend on all layers  

---

## 🗂️ Decision Matrix

| Case                                                  | Folder        |
|-------------------------------------------------------|---------------|
| Environment setup, runtime config, provider setup     | `config/`     |
| Generic utilities, pure functions                     | `utils/`      |
| Shared business logic, infrastructure, app-wide code  | `lib/`        |
| Domain-specific logic (UI, API, hooks, schemas)       | `features/`   |
| Global React hooks (DOM, browser, navigation)         | `hooks/`      |
| Reusable UI components (base UI, layouts, icons, etc.)| `components/` |
| Global styles, resets, theme variables                | `styles/`     |
| Reusable, cross-cutting TypeScript types              | `types/`      |
| Pages, layouts, routes                                | `app/`        |

**Rule of thumb**:  
- If it’s **generic**, it goes in `utils/`, `hooks/`, or `types/`.  
- If it’s **shared but domain-aware**, it goes in `lib/`.  
- If it’s **specific to a feature/domain**, it goes in `features/`.  
- If it’s **UI only**, it goes in `components/`.  

---

## 📝 Naming Conventions

- **Files/folders**: `kebab-case`  
  - Example: `user-card.tsx`, `price-table.tsx`  
- **React components**: `PascalCase` exports inside kebab-case files  
  - File: `user-card.tsx` → Component: `UserCard`  
- **Hooks**: Start with `use-` in filename  
  - File: `use-media-query.ts` → Hook: `useMediaQuery`  
- **Types**: Organized by concept, no dumping into `index.d.ts`  

---

## 📈 File Growth & Expansion Rules

- **Start simple**: Begin with a single file for new logic.  
- **Expand when needed**: Split into subfolders only when a file grows too large.  
- **Avoid premature splitting**: Don’t create empty folders “just in case.”  

Example growth path:  

```
features/users.tsx    # Simple start
→
features/users/       # Expanded structure
├── index.tsx
├── keys.ts
├── api/
├── schemas/
├── hooks/
└── components/
```

This keeps the codebase lean early on while supporting clean scalability.  
