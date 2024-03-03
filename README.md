# eslint-config-gbx

### Install package and dependencies
```
pnpm install --save-dev @gearbox-solutions/eslint-config-gbx
```

### Create and configure your .eslintrc.cjs
```
touch .eslintrc.cjs
```
Add the following to your `.eslintrc.cjs`
```js
module.exports = {
    extends: '@gearbox-solutions/gbx',
};
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
```json
"scripts": {
	"lint": "eslint --ext .ts,.js,.vue <src>",
	"lint:fix": "eslint --ext .ts,.js,.vue <src> --fix",
        "prettier:write": "prettier --write \"resources/js/**/*.{js,ts,vue}\""
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


## Publishing this package
If you make changes to this package, you'll need to publish it to NPM. To do so, follow these steps:

1. Update Version in `package.json`
2. Commit and push changes
3. run `npm publish --access public`
