module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        ...[
            './rules/typescript',
            './rules/syntax',
            './rules/vue'
        ].map(require.resolve)
    ],
    plugins: [
        'import',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@', './resources/js'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
            typescript: {
                // always try to resolve types under `<root>@types`
                // directory even it doesn't contain any source code, like `@types/unist`
                alwaysTryTypes: true,
            },
        },
    },
}
