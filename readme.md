# Vite + Symfony + React + TypeScript Setup

This project integrates **Symfony** with **Vite**, **React**, and **TypeScript**. It provides a modern development experience with fast builds, hot module replacement (HMR), and efficient production builds.

## How It Works
Files are served via `{{ vite_entry_script_tags('entrypoint', { dependency: 'react' }) }}`: - entrypoints are specified in `vite.config.js` in section `rollupOptions`.

If entrypoint is not found then app throws an error.

- **Development**: Points to the Vite dev server (e.g., `http://localhost:5173`). - it compile .tsx files 'on fly'.
Hot Module Replacement (HMR) ensures instant updates in the browser when you change frontend files.
- **Production**: Points to the hashed files in `public/build`. - it creates a map in `public/build/.vite/entrypoints.json` between files and files with hashes.

### Key Functions
- `vite_entry_link_tags` [(Docs)](https://symfony-vite.pentatrion.com/guide/twig-functions.html#vite-entry-script-tags-%F0%9F%93%9C): Dynamically includes CSS files for a specific entry point in production. Not needed in development, as Vite injects CSS directly into the page.
- `vite_entry_script_tags` [(Docs)](https://symfony-vite.pentatrion.com/guide/twig-functions.html#vite-entry-link-tags-%F0%9F%8E%A8): Dynamically includes JavaScript files for a specific entry point in both development and production.

These functions rely on the `entrypoints.json` file, which is automatically generated during the build process. This file maps entry points to their corresponding hashed assets in production.

### 2. **Symfony**
- The `pentatrion/vite-bundle` integrates Vite with Symfony.

### Key files:
- **vite.config.js** - Configures Vite to integrate React and Symfony, define entry points, serve assets in development with HMR, and output optimized, hashed files to `public/build` for production.
- **config/packages/pentatrion_vite.yaml** [(Docs)](https://symfony-vite.pentatrion.com/reference/vite-bundle.html) - configuration of the bundle.
- **config/packages/framework.yaml** - needs assets:version_strategy, see Q&A section on Assets

## Q&A
### Assets
Endpoint for examples of using assets: `assets-poc`

Q: How do I load TS assets in twig file?

A: use  `src="{{ asset('src/assets/react.svg') }}"` in twig. This requires those lines in `config/packages/framework.yaml`
```
framework:
    assets:
        version_strategy: 'Pentatrion\ViteBundle\Asset\ViteAssetVersionStrategy'
```
If your project already uses assets strategy, see https://symfony-vite.pentatrion.com/guide/assets.html#multiple-asset-strategies

After you run `npm run build` twig will use assets generated via vite. This works due to mapping in `public/build/.vite/manifest.json` that is generated on `npm run build`.


Q: How do I load twig assets in TS file?

A: ...


### React
Q: Can I load more than one entrypoint (react component) in Twig?

A: Yes you can, but they need to have different root. Example in endpoint /admin

```
<div id="menu-root"></div>
{{ vite_entry_script_tags('menu', { dependency: 'react' }) }}
<div id="root"></div>
{{ vite_entry_script_tags('admin', { dependency: 'react' }) }}
```

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
