import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
