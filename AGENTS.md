<!-- BEGIN:nextjs-agent-rules -->

# Context for AI Agents (Next.js 16 / React 19)

Ce projet utilise une version de pointe de Next.js. Attention aux APIs obsolètes.

## Contexte Technique

- **React Compiler** : Activé dans `next.config.ts`. Éviter les `useMemo`/`useCallback` inutiles si le compilateur peut les gérer.
- **Mantine UI** : Les variants personnalisés sont critiques. Consulter `src/theme/components/` avant de créer de nouveaux styles.
- **Internationalisation** : Routage géré par `/[locale]/`. Le header `x-locale` est injecté par le middleware/proxy.
- **Design Tokens** :
  - `brand` est la couleur primaire (Corail).
  - `surface.elevated` est le fond des cartes en mode clair/sombre.
  - `border.subtle` est le séparateur standard.

## Architecture de Contenu

- Données brutes : `src/data/` (Articles, Projets).
- Dictionnaires I18n : `src/content/`.
- Logique de filtrage : `useCollection.ts` est le hook de base pour les listes.

<!-- END:nextjs-agent-rules -->
