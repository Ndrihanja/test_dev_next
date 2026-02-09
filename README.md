# 🚀 Next.js Blog Test - Tikasa

Ce projet est un test technique réalisé avec **Next.js 15+ (App Router)**, **TypeScript**, et **Prisma**. Il implémente une gestion d'articles de blog avec une optimisation poussée pour le SEO et la performance.

## 🛠️ Stack Technique

- **Framework** : Next.js (App Router)
- **Langage** : TypeScript (Typage strict)
- **Base de données** : PostgreSQL avec Prisma ORM
- **UI/UX** : Tailwind CSS 4 + Shadcn UI
- **Optimisation** : ISR (Incremental Static Regeneration), `next/image`, `next/link`

## 📋 Prérequis

- Node.js (Version 18 ou supérieure)
- Une base de données PostgreSQL (locale ou hébergée type Supabase/Neon)

## ⚙️ Installation et Configuration

1. **Cloner le repository :**

   ```bash
   git clone <lien-repo>
   cd test_dev_next

   ```

2. **Installer les dépendances :**

   ```bash
   npm install

   ```

3. **Configurer les variables d'environnement : Créez un fichier .env à la racine et ajoutez votre URL de base de données :**
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

4. **Préparer la base de données (Prisma) :**

   ```bash
   # Générer le client Prisma
   npx prisma generate

   # Créer les tables dans votre base de données
   npx prisma db push

   ```

5. **Seeding des données**

   ```bash
   # Compiler le seed (nécessaire selon la config package.json)
   npx tsc prisma/seed.ts --outDir prisma/dist --module commonjs

   # Exécuter le seed
   npx prisma db seed
   ```

**Lancement**

```bash
npm run dev

🏗️ Architecture du Projet
Le projet suit une Clean Architecture pour garantir la séparation des responsabilités :

/app : Routes, layouts et Server Components.

/components : Composants UI réutilisables (Shadcn).

/lib/services : Couche d'accès aux données (Data Access Layer).


/lib/utils : Utilitaires (formatage de date, etc.).

/prisma : Schéma de données et scripts de peuplement.

🧪 Fonctionnalités implémentées
[x] ISR (Incremental Static Regeneration) : Liste des articles mise à jour dynamiquement.

[x] Dynamic Routing : Pages articles générées statiquement avec generateStaticParams.

[x] Images optimisées : Configuration remotePatterns pour les domaines externes.

[x] Clean Code : Typage TypeScript 100% strict (aucun any).

[x] UX intuitive : Design responsive avec cartes interactives.
```
