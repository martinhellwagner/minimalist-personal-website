import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/multi-word-component-names': ['error', {
        'ignores': [
          'Browser',
          'Contact',
          'Home',
          'Imprint',
          'Info',
          'Mode',
          'Privacy',
          'Projects',
        ],
      }],
		},
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]);
