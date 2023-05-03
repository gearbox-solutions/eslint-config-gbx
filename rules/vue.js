module.exports = {
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/eslint-config-typescript/recommended',
    ],

    rules: {
        'vue/component-name-in-template-casing': [
            'error', 'PascalCase', {
                registeredComponentsOnly: false,
            }
        ],
        'vue/component-tags-order': ['error', {
            order: [
                'script[setup]',
                'script:not([setup])',
                'template',
                'style[scoped]',
                'style:not([scoped])',
            ],
        }],
        'vue/multi-word-component-names': ['error', {
            ignores: [],
        }],
        'vue/html-indent': ['error', 4],
        "vue/max-len": ["error", {
            code: 120,
            tabWidth: 4,
            ignoreStrings: true,
            ignoreUrls: true,
            ignoreHTMLAttributeValues: true,
        }],
        'vue/padding-line-between-tags': [
            'error', [
                { blankLine: 'always', prev: '*', next: '*' },
            ],
        ],
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'max-len': 'off',
            },
        },
    ]
}
