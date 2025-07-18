# dr-qbo-registration

A modern onboarding and registration app for QuickBooks integration, built with React, TypeScript, Vite, and Material-UI (MUI). This project provides a seamless onboarding flow for users to connect sales channels, import products, set up inventory, and more—all with a clean, responsive MUI-powered UI.

---

## Features
- Guided onboarding flow for QuickBooks integration
- Connect sales channels, import products, set up inventory, and shipping
- Responsive, accessible UI built with Material-UI (MUI)
- Modular, maintainable code structure
- TypeScript for type safety
- API integration with Axios

---

## Folder Structure
```
dr-qbo-registration/
├── public/
│   └── images/
│       └── fabicon/
│           └── favicon.png
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── api/
│   │   │   ├── axios.config.ts
│   │   │   └── quickbooks.api.ts
│   │   ├── onboarding/
│   │   │   ├── Finish/
│   │   │   ├── InventoryTracking/
│   │   │   ├── OnboardingFlow/
│   │   │   ├── ProductImport/
│   │   │   ├── Quickbooks/
│   │   │   ├── Saleschannels/
│   │   │   ├── Shipping/
│   │   │   ├── Welcome/
│   │   │   ├── shared/
│   │   │   └── types.ts
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   └── radio-group.tsx
│   ├── contexts/
│   │   └── OnboardingContext.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── ...
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Setup
```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd dr-qbo-registration

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase

---

## Environment Configuration
This project uses Vite's environment variable system to support multiple environments.

- `.env` — Base variables (shared across all environments)
- `.env.local` — Local developer overrides (not committed)
- `.env.dev` — Development environment
- `.env.qa` — QA environment
- `.env.stage` — Staging environment
- `.env.prod` — Production environment

**Only variables prefixed with `VITE_` are exposed to the client.**

Example:
```
VITE_API_URL=https://api.example.com
VITE_ENV_NAME=prod
```

To run or build the app for a specific environment, use the `--mode` flag:
```
# Development
npm run dev -- --mode dev

# QA
npm run dev -- --mode qa

# Staging
npm run dev -- --mode stage

# Production build
npm run build -- --mode prod
```

---

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License
[MIT](LICENSE)
