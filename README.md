# Céline Souchet — Portfolio & Design System

Ce projet est le portfolio professionnel de **Céline Souchet**, Ingénieure développeuse senior Java & React. Il est conçu comme une plateforme robuste et évolutive, servant à la fois de vitrine et de démonstration d'un **Design System** complet.

## 🛠 Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org) (Canary) avec **React Compiler** activé.
- **UI & Style** : [Mantine 9.x](https://mantine.dev) avec un système de thémage personnalisé (Design Tokens).
- **Langage** : [TypeScript](https://www.typescriptlang.org/) (Strict mode).
- **Internationalisation** : Système i18n sur-mesure (Français / Anglais).
- **Qualité** : ESLint (Flat Config), Prettier, Husky & Lint-staged.
- **Environnement** : Node.js 24 (configuré via `.nvmrc`).

## 🎨 Design System & Architecture

Le projet repose sur une séparation stricte entre la logique et la présentation :

- **Design Tokens** : Centralisés dans `src/theme/tokens/` (couleurs, espacements, rayons, ombres).
- **Variants Personnalisés** : Mantine est étendu avec des variants métier (`item`, `section`, `banner`, `summary`) pour garantir une cohérence visuelle.
- **Composants Thématiques** : Utilisation de `WaveBackground` et `ThemedImage` pour une gestion fluide du mode clair/sombre sans duplication de code.
- **I18n Dynamique** : Les contenus sont gérés sous forme de dicos TypeScript dans `src/content/`.

## 🚀 Installation & Développement

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier la qualité du code
npm run lint
```

## 📂 Structure du Projet

- `src/app/` : Routes Next.js (App Router) avec préfixe de locale.
- `src/theme/` : Cœur du Design System (Tokens & Component Overrides).
- `src/content/` : Contenus bilingues (FR/EN).
- `src/lib/hooks/` : Logique métier et hooks de collection (`useArticles`, `useProjects`).
- `src/components/layout/` : Composants de structure réutilisables.

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).
