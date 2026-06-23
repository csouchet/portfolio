# Céline Souchet — Portfolio & Design System

This project is the professional portfolio of **Céline Souchet**, a Stack Java & React Engineer Developer. It is designed to serve both as a showcase and a demonstration of a comprehensive **Design System**.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (Canary) with **React Compiler** enabled.
- **UI & Style**: [Mantine 9.x](https://mantine.dev) with a custom theming system (Design Tokens).
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode).
- **Internationalization**: Custom i18n system (French / English).
- **Quality**: ESLint (Flat Config), Prettier, Husky & Lint-staged.
- **Environment**: Node.js 24 (configured via `.nvmrc`).

## 🎨 Design System & Architecture

The project is based on a strict separation between logic and presentation:

- **Design Tokens**: Centralized in `src/theme/tokens/` (colors, spacing, shadows).
- **Custom Variants**: Mantine is extended with business-specific variants (`item`, `section`, `banner`, `summary`) to ensure visual consistency.
- **Themed Components**: Use of `WaveBackground` and `ThemedImage` for seamless light/dark mode management without code duplication.
- **Dynamic i18n**: Content is managed as TypeScript dictionaries in `src/content/`.

## 🚀 Installation & Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Check code quality
npm run lint
```

## 📂 Project Structure

- `src/app/`: Next.js routes (App Router) with locale prefixes.
- `src/theme/`: Core of the Design System (Tokens & Component Overrides).
- `src/content/`: Bilingual content (FR/EN).
- `src/lib/hooks/`: Business logic and collection hooks (`useArticles`, `useProjects`).
- `src/components/layout/`: Reusable layout components.

## 📄 License

This project is licensed under the [MIT](LICENSE) license.
