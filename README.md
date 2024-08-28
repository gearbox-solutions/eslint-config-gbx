# eslint-config-gbx

### Install package and dependencies
```
pnpm install --save-dev @gearbox-solutions/eslint-config-gbx
```

### Create and configure your eslint.config.mjs
Add the following to your `eslint.config.mjs`, which should be in the root of your project.
```js
import gbxConfig from "@gearbox-solutions/eslint-config-gbx";

export default [
    ...gbxConfig,
    // add additional configurations here   
];
```

### Create and configure prettier.config.js
```js
export default {
    plugins: [import('prettier-plugin-tailwindcss')],
    printWidth: 120
}
```

### Add scripts to package.json
Add the following two script to your package.json file.

You'll need to replace `<src>` with the location of the files you'd like ESLint to target. This may be different for each project.

For Laravel projects you will probably want `\"resources/js/**/*.{js,ts,vue}\"` for an escaped, quoted string.
```json
"scripts": {
    "lint": "eslint <src>",
    "lint:fix": "eslint <src> --fix",
    "prettier:check": "prettier <src> --check"
    "prettier:write": "prettier <src> --write"
},
```

### Run lint

Will display any errors or warnings ESLint finds in the codebase

```
npm run lint
```

### Run fix

Will attempt to fix any errors or warnings that ESLint finds

```
npm run lint:fix
```
### Run Prettier

Format files with Prettier formatting

```
npm run prettier:write
```

## Local development
This package requires peer dependencies to be installed in your project directly. This means that `npm link` doesn't work like a regular package would.

To develop this package locally, you'll need to follow these steps:
1. Bundle this package with `npm pack`
2. Install the tarball in your project with `npm install /path/to/tarball.tgz`

When you want to update the package in your project, you'll need to repeat these steps, which should also refresh any dependencies that have changed.

## Publishing this package
If you make changes to this package, you'll need to publish it to NPM. To do so, follow these steps:

1. Update Version in `package.json`
2. Commit and push changes
3. run `npm publish --access public`
