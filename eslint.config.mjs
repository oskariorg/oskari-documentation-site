import { defineConfig } from "eslint/config";
import eslint from '@eslint/js'
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tseslint from 'typescript-eslint'

import prettier from 'eslint-config-prettier/flat'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
    {
        ignores: ["public/**", "scripts/**"],
    },
    ...nextVitals,
    ...nextTs,
    eslint.configs.recommended,
    tseslint.configs.recommended,
    // tseslint.configs.stylistic,
    prettier,
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: {
            "@typescript-eslint": typescriptEslint
        },
        languageOptions: {
            globals: {
                ...globals.browser
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }]);