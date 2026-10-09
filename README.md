# Projet Angular (Noble Curie)

Ce projet est une application front-end moderne développée avec **Angular 22** (Standalone Components, Vitest, TypeScript).

---

## 🚀 Prérequis

- [Node.js](https://nodejs.org/) (version 20 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (version 10 ou supérieure)
- Git

---

## 🛠️ Démarrage rapide

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm start
```
ou :
```bash
ng serve
```

L'application sera accessible sur [http://localhost:4200/](http://localhost:4200/). Le rechargement automatique à chaud (hot reload) est activé par défaut.

---

## 📦 Scripts disponibles

| Commande | Description |
| :--- | :--- |
| `npm start` | Démarre le serveur local de dev sur le port 4200 |
| `npm run build` | Compile l'application pour la production dans le dossier `dist/` |
| `npm test` | Exécute les tests unitaires avec [Vitest](https://vitest.dev/) |
| `npm run watch` | Compile en mode développement avec surveillance des modifications |

---

## 🌐 Partager ce projet sur GitHub

Si vous souhaitez lier ce projet local à un nouveau dépôt GitHub :

1. Créez un nouveau dépôt vide sur [GitHub](https://github.com/new) (sans initialiser avec README, .gitignore ni licence car ils sont déjà présents).
2. Liez votre dépôt distant et poussez vos modifications :

```bash
git remote add origin https://github.com/<votre-nom-utilisateur>/<nom-du-depot>.git
git branch -M main
git push -u origin main
```

---

## 📁 Structure du projet

```text
├── .github/workflows/    # Workflow d'intégration continue (CI)
├── public/               # Fichiers statiques publics (favicon, images, etc.)
├── src/
│   ├── app/              # Composants et logique applicative Angular
│   │   ├── app.config.ts # Configuration globale de l'application
│   │   ├── app.routes.ts # Configuration des routes
│   │   ├── app.ts        # Composant racine (standalone)
│   │   ├── app.html      # Template HTML principal
│   │   ├── app.css       # Styles du composant racine
│   │   └── app.spec.ts   # Tests unitaires
│   ├── index.html        # Page HTML racine
│   ├── main.ts           # Point d'entrée de l'application
│   └── styles.css        # Styles globaux
├── angular.json          # Configuration Angular CLI
├── package.json          # Dépendances et scripts npm
└── tsconfig.json         # Configuration TypeScript
```
