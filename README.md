# dr-quickbooks-registration

## Project info

**Description:**
A modern onboarding and registration app for QuickBooks integration, built with React, TypeScript, Vite, and Material-UI (MUI). This project provides a seamless onboarding flow for users to connect sales channels, import products, set up inventory, and more—all with a clean, responsive MUI-powered UI.

**URL**: https://lovable.dev/projects/72511367-7e77-4d1b-bd95-89d6ca888a00

## How can I edit this code?

You can edit this project in several ways:

**Use Lovable**

Visit the [Lovable Project](https://lovable.dev/projects/72511367-7e77-4d1b-bd95-89d6ca888a00) and start prompting. Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

Clone this repo and push changes. Pushed changes will also be reflected in Lovable.

Requirements: Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd dr-quickbooks-registration

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- Material-UI (MUI)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/72511367-7e77-4d1b-bd95-89d6ca888a00) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Environment Configuration

This project uses Vite's environment variable system to support multiple environments.

## Environment Files

- `.env` — Base variables (shared across all environments)
- `.env.local` — Local developer overrides (not committed)
- `.env.dev` — Development environment
- `.env.qa` — QA environment
- `.env.stage` — Staging environment
- `.env.prod` — Production environment

**Only variables prefixed with `VITE_` are exposed to the client.**

## Example Variables

```
VITE_API_URL=https://api.example.com
VITE_ENV_NAME=prod
```

## Usage

To run or build the app for a specific environment, use the `--mode` flag:

```
# Development
vite --mode dev

# QA
yarn dev --mode qa

# Staging
npm run dev -- --mode stage

# Production build
vite build --mode prod
```

Vite will load variables from `.env`, then `.env.{mode}` (e.g., `.env.dev`), then `.env.local` (if present).

See [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html) for more details.
