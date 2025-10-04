# Vite + Symfony + React + TypeScript Setup

This project integrates **Symfony** with **Vite**, **React**, and **TypeScript**. It provides a modern development experience with fast builds, hot module replacement (HMR), and efficient production builds.

## How It Works
Files are served via `{{ vite_entry_script_tags('endpoint') }}`:
- **Development**: Points to the Vite dev server (e.g., `http://localhost:5173`). - it compile .tsx files 'on fly'.
Hot Module Replacement (HMR) ensures instant updates in the browser when you change frontend files.
- **Production**: Points to the hashed files in `public/build`. - it creates a map in `public/build/.vite/entrypoints.json` between files and files with hashes.

Routes are specified in `vite.config.js`. in section `rollupOptions` --- this should be somehow improved as it currently needs to be added every time we add a new route.

### Key Functions
- `vite_entry_link_tags`: Dynamically includes CSS files for a specific entry point in production. Not needed in development, as Vite injects CSS directly into the page.
- `vite_entry_script_tags`: Dynamically includes JavaScript files for a specific entry point in both development and production.

These functions rely on the `entrypoints.json` file, which is automatically generated during the build process. This file maps entry points to their corresponding hashed assets in production.

### 2. **Symfony**
- The `pentatrion/vite-bundle` integrates Vite with Symfony.

### Key files:
- **vite.config.js** - the most important file.

### Setup
```bash
composer install
npm install

symfony serve
npm run dev
```
production
```bash
npm run build
```

### Future Improvements

1. **Automate Entry Point Detection**:
   - Currently, entry points must be manually added to `vite.config.js`. Automating this process would reduce manual effort and potential errors.