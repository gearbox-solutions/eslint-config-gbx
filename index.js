// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/strongly-recommended"],
    eslintConfigPrettier,
    {
        // vue and ts files
        languageOptions: {
            parser: vueParser,
            globals: {
                // Allow browser global functions
                ...globals.browser,
                // Make Ziggy's `route` available globally
                route: "readonly",
            },

            parserOptions: {
                parser: tseslint.parser,
                sourceType: "module",
                extraFileExtensions: [".vue"],
            },
        },
    },
    {
        // disable single-word component names for Inertia and Nuxt pages
        files: ["resources/js/Pages/**/*.vue", "pages/**/*.vue"],
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
    {
        // node files
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        files: ["vite.config.js", "prettier.config.cjs", "eslint.config.js"],
    },
    {
        // global ignores
        ignores: ["vendor/", "node_modules/"],
    },
);
