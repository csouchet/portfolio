@AGENTS.md

# Guide de Développement (Portfolio)

## Principes de Code

- **Mantine 9+** : Utiliser exclusivement les composants Mantine et privilégier les variants définis dans le thème (`extend`).
- **Design Tokens** : Interdiction d'utiliser des valeurs hexadécimales brutes. Utiliser les variables CSS ou `theme.other`.
- **Support Dark/Light** : Utiliser systématiquement `light-dark()` pour les couleurs dynamiques.
- **Images & Décors** : Utiliser `ThemedImage` pour les illustrations et `WaveBackground` pour les vagues décoratives (évite la duplication de `darkHidden`/`lightHidden`).
- **I18n** : Tout texte doit être extrait via `useContent()` ou `getContent(locale)`.

## Commandes de Qualité

- `npm run lint` : Vérification ESLint et Prettier.
- `npm run lint:fix` : Correction automatique (imports, unused vars).
- Les commits doivent suivre la convention des messages (ex: `chore(deps): ...`).

## Conventions TypeScript

- Les types métier sont dans `src/types/`.
- Utiliser le pattern `(string & {})` dans `mantine.d.ts` pour garder l'autocomplétion des variants tout en acceptant les types natifs.
