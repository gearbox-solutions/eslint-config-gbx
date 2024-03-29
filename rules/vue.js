module.exports = {
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        '@vue/eslint-config-typescript/recommended',
    ],

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'max-len': 'off',
            },
        },
        {
            // disable single-word component names for Inertia and Nuxt pages
            files: ['./resources/js/Pages/**/*.vue', './pages/**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],

    rules: {
        "vue/attribute-hyphenation": ['warn', 'always', {
        // ignore Inertia's <Link> event props which seem to be case-sensitive
            ignore: [
                'onCancelToken',
                'onCancel',
                'onBefore',
                'onStart',
                'onProgress',
                'onSuccess',
                'onError',
                'onFinish'
            ]
        }],
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
                {blankLine: 'always', prev: '*', next: '*'},
            ],
        ],
    }
}
