import prettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  prettier,
  {
    rules: {
      'astro/jsx-a11y/label-has-associated-control': 'off'
    }
  }
]
