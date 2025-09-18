# Purpose

The **`hooks/`** folder contains **shared, reusable React hooks**.
They are **domain-agnostic** and focus on **browser/React concerns** rather than app-specific business rules.

Think of this folder as your **React toolbox**, complementing `utils/`.

---

# File Organization

- Hooks follow the kebab-case naming convention: `use-media-query.ts`, `use-is-mounted.ts`.
- If a hook grows too complex, expand into a `_subfolder/` while keeping the main hook as the entry point:

```vbnet
hooks/
├── use-media-query.ts
├── _use-media-query/
│   └── match-media-listener.ts
└── use-event-listener.ts
```

---

# Guidelines

- Hooks here should stay **isolated**:
  - They may use React and browser APIs.
  - They should **not** depend on `lib/`, `features/`, or app-specific state.
- If a hook becomes tied to business logic (e.g. auth, backend data), move it to `lib/` or a specific `feature/`.

---

# What Belongs Here?

✅ Examples:

- DOM / browser state hooks: `useMediaQuery`, `useIsMounted`, `useWindowSize`.
- Event helpers: `useEventListener`, `useKeyboardShortcut`.
- Ref helpers: `useMergedRefs`, `useForwardRef`.
- Next.js generic hooks: `useRouterPath`, `useSafeNavigation`.

❌ Does NOT belong here:

- `useAuthUser` (→ `lib/auth.ts`).
- `usePricesData` (→ `features/prices/`).
- App-specific navigation guards depending on server state (→ `lib/navigation.ts`).
