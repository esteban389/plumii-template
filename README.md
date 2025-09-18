# Seed Project

A modern Next.js application built with TypeScript, featuring a comprehensive UI component library and state management setup.

## 🚀 Tech Stack

### Core Framework
- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.1](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### UI & Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[IntentUI](https://intentui.com/)** - Modern React component library
- **[React Aria Components](https://react-spectrum.adobe.com/react-aria-components/)** - Accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[Motion](https://motion.dev/)** - Animation library for React

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query/)** - Powerful data synchronization for React
- **[TanStack Form](https://tanstack.com/form/)** - Type-safe form state management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting with Antfu's config
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for code quality
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 📦 Key Dependencies

### UI Components & Styling
```json
{
  "@intentui/icons": "^1.11.0",
  "react-aria-components": "^1.12.2",
  "tailwindcss-react-aria-components": "^2.0.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

### Data & Forms
```json
{
  "@tanstack/react-query": "^5.89.0",
  "@tanstack/react-form": "^1.21.2",
  "zod": "^4.1.9"
}
```

### Animation & Icons
```json
{
  "motion": "^12.23.15",
  "lucide-react": "^0.544.0"
}
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check:lint` - Run ESLint
- `npm run fix:lint` - Fix ESLint issues
- `npm run check:types` - Type check with TypeScript
- `npm run generate` - Run plop generators

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   └── ui/             # Base UI components
├── features/           # Feature-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── styles/             # Global styles and CSS
├── types/              # TypeScript type definitions
└── utils/              # Helper utilities
```

## 🎨 UI Components

This project uses **IntentUI** as the primary component library, which provides:
- Accessible components built on React Aria
- Consistent design system
- TypeScript support
- Tailwind CSS integration

## 🔧 Configuration

- **ESLint**: Configured with Antfu's ESLint config for modern JavaScript/TypeScript
- **Tailwind**: Configured with CSS variables and modern features
- **TypeScript**: Strict mode enabled with path aliases
- **Git Hooks**: Husky configured for pre-commit checks

## 📚 Documentation Links

- [IntentUI Documentation](https://intentui.com/docs/getting-started/introduction)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- [TanStack Form Documentation](https://tanstack.com/form/latest/docs/overview)
- [Zod Documentation](https://zod.dev/)
- [Motion Documentation](https://motion.dev/docs/react)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and type checks
5. Submit a pull request

## 📄 License

This project is private and proprietary.