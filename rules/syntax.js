module.exports = {
    rules: {
        "max-len": ["warn", {
            code: 120,
            tabWidth: 4,
            ignoreStrings: true,
            ignoreUrls: true,
        }],
        'import/extensions': ['error', 'never'],
        'import/first': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'no-extra-semi': 'warn',
        'semi': ['error', 'always'],

        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'object-shorthand': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'prefer-rest-params': 'error',
        'default-param-last': 'error',
        'camelcase': ['warn', {
            'ignoreGlobals': true,
            'ignoreImports': true,
        }],
        'new-cap': 'error',
        'no-restricted-globals': 'error',
        'no-useless-concat': ['error'],
        'arrow-parens': ['error', 'as-needed'],
    }
};
