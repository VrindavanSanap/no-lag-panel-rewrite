# React, TypeScript, and Vite Starter Template

This template offers a streamlined setup to integrate React with Vite, featuring Hot Module Replacement (HMR) and essential ESLint configurations.

### Available Plugins

Enhance your development experience with these official plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utilizes [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Leverages [SWC](https://swc.rs/) for Fast Refresh.

## Enhancing ESLint Configuration

For production-level applications, we recommend enabling type-aware linting rules. Follow these steps to expand your ESLint configuration:

1. Set up the `parserOptions` at the top level as follows:

   ```js
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname,
   },
   ```

2. Update your ESLint extends list:
   - Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
   - Optionally, include `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.

3. Install and configure [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react):
   - Add `plugin:react/recommended` and `plugin:react/jsx-runtime` to your `extends` list for React-specific linting.
