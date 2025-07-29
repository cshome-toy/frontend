import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from '@eslint-react/eslint-plugin';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'build/**', 'coverage/**', '*.min.js', '*.bundle.js', '*.chunk.js'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        Response: 'readonly',
        Request: 'readonly',
        Headers: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        FormData: 'readonly',
        AbortController: 'readonly',
        Event: 'readonly',
        IntersectionObserver: 'readonly',
        MutationObserver: 'readonly',
        MessageChannel: 'readonly',
        performance: 'readonly',
        queueMicrotask: 'readonly',
        setImmediate: 'readonly',
        reportError: 'readonly',
        sessionStorage: 'readonly',
        localStorage: 'readonly',
        matchMedia: 'readonly',
        self: 'readonly',
        process: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@eslint-react': react,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'import/no-cycle': 'off',
      'import/no-unresolved': 'off',
      '@eslint-react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['eslint.config.js', 'prettier.config.js', 'vite.config.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: null,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/no-unnecessary-type-arguments': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
      '@typescript-eslint/require-await': 'off',
      'import/no-cycle': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
