# eslint-config-gbx

### Install package and dependencies
```
npm install --save-dev @gearbox-solutions/eslint-config-gbx
```

### Create and configure your .eslintrc.js
```
touch .eslintrc.js
```
Add the following to your `.eslintrc.cjs`
```js
module.exports = {
    extends: '@gearbox-solutions/gbx',
};
```

### Create and configure prettier.config.cjs
```js
module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    printWidth: 120
}
```

### Add scripts to package.json
Add the following two script to your package.json file.

You'll need to replace `<src>` with the location of the files you'd like ESLint to target. This may be different for each project.
```json
"scripts": {
	"lint": "eslint --ext .ts,.js,.vue <src>",
	"lint:fix": "eslint --ext .ts,.js,.vue <src> --fix"
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
