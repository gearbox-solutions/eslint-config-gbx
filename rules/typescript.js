module.exports = {
    rules: {
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/no-extra-semi': 'off',
    },
    overrides: [
        {
            files: ['resources/js/Interfaces/**/*.ts'],
            rules: {
                semi: 'off',
                'no-extra-semi': 'off',
            },
        },
    ]
};
