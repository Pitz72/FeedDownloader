// ESLint 9 flat config (v1.5.0) — porta la vecchia .eslintrc.cjs.
// Come prima (eslint --ext ts,tsx): si lintano SOLO i sorgenti TypeScript;
// gli script .cjs di build/manuali e gli asset restano fuori.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: [
            'dist/**', 'dist-electron/**', 'builds/**', 'node_modules/**',
            'docs/**', 'coverage/**', 'public/**', 'brand/**', 'branding/**',
            '.claude/**',
            '**/*.js', '**/*.cjs', '**/*.mjs',
        ],
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            globals: { ...globals.browser, ...globals.es2020 },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/no-unused-vars': ['error', {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            }],
        },
    },
    {
        files: ['tests/**/*.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        // M7: the main process and preload run in Node, not the browser. Lint them
        // with Node globals (process, Buffer, __dirname…) instead of browser ones.
        files: ['electron/**/*.ts', 'shared/**/*.ts'],
        languageOptions: {
            globals: { ...globals.node, ...globals.es2020 },
        },
    },
);
