import antfu from '@antfu/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    typescript: true,
    vue: true,
  },
  {
    plugins: {
      tailwind,
    },
    rules: {
      'style/arrow-parens': ['warn', 'always'],
      'style/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      'style/quote-props': ['error', 'as-needed'],
      'vue/html-self-closing': [
        'warn',
        { html: { void: 'always', normal: 'always', component: 'always' } },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'tailwind/classnames-order': ['warn'],
      'tailwind/enforces-negative-arbitrary-values': ['warn'],
      'tailwind/enforces-shorthand': ['error'],
      'tailwind/no-contradicting-classname': ['error'],
      'tailwind/no-unnecessary-arbitrary-value': ['error'],
    },
  },
);
