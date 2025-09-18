# 🧩 UI Components

This folder contains **base UI components**, roughly aligned with the _molecules_ in the [Atomic Design model](https://bradfrost.com/blog/post/atomic-web-design/).
They’re the building blocks used to compose larger features and pages.

The components are grouped into categories:

---

### 📐 layout/

**Purpose:**
Handles structure and spacing — not content styles.

**When to use:**
Arrange or align elements (rows, columns, grids, stacks).

**Examples:**
Box, Flex, Grid, Stack, Container

---

### 🅰️ typography/

**Purpose:**
Controls text appearance and semantics (size, weight, hierarchy).

**When to use:**
Render consistent headings, labels, or body text.

**Examples:**
Text, Heading, Label, Caption

---

### 📝 form/

**Purpose:**
Collects and validates user input.

**When to use:**
Any input field or control inside a form or interactive UI.

**Examples:**
Input, Checkbox, Radio, Select, DatePicker, Combobox

---

### ⚠️ feedback/

**Purpose:**
Shows system states or responses to user actions.

**When to use:**
Communicate success, error, progress, or loading states.

**Examples:**
Alert, Toast, Spinner, Progress, Skeleton, AlertDialog

---

### 🪟 overlay/

**Purpose:**
Renders layered UI above the page, usually focus-trapping.

**When to use:**
Modals, dialogs, or floating elements that sit “on top” of the main UI.

**Examples:**
Modal, Dialog, Drawer, Tooltip, Popover

---

### 🧭 navigation/

**Purpose:**
Lets users move through the app or between sections.

**When to use:**
Tabs, menus, or pagination controls.

**Examples:**
Tabs, Menu, Dropdown, Breadcrumb, Pagination

---

### 🛠️ utility/

**Purpose:**
Reusable helpers and infrastructure components.

**When to use:**
Low-level building blocks that don’t fit elsewhere.

**Examples:**
Spacer, Divider, VisuallyHidden, Portal, Collapse, Accordion

---

### 📊 data-display/

**Purpose:**
Presents structured or visual data.

**When to use:**
Show lists, tables, cards, or badges — read-only content.

**Examples:**
Card, Table, List, Badge, Tag, Avatar

---

### 🔘 actions/

**Purpose:**
Triggers actions or state changes.

**When to use:**
Buttons or toggles that perform something on click/press.

**Examples:**
Button, IconButton, ButtonGroup, ToggleButton

---

✨ **Guideline:**
If you’re unsure where a component goes, ask:

- Does it handle layout, content, or interaction?
- Is it for input, display, or navigation?

When in doubt, default to the category that matches its **primary role**.
