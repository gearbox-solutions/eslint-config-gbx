module.exports = {
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'camelcase': ['warn', {
            'ignoreGlobals': true,
            'ignoreImports': true,
        }],
        'default-param-last': 'error',
        'import/extensions': ['error', 'never'],
        'import/first': 'off',
        'import/no-extraneous-dependencies': ['error', {"devDependencies": true}],
        'indent': ['error', 4, {SwitchCase: 1}],
        'linebreak-style': ['error', 'unix'],
        "max-len": ["warn", {
            code: 120,
            tabWidth: 4,
            ignoreStrings: true,
            ignoreUrls: true,
        }],
        'new-cap': 'error',
        'no-extra-semi': 'warn',
        'no-restricted-globals': 'error',
        'no-useless-concat': ['error'],
        'object-shorthand': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'template-curly-spacing': 'error',
    }
};
