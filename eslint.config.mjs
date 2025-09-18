import antfu from '@antfu/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default antfu({
  formatters: true,
  react: true,
  typescript: true,
  ignores: [
    'node_modules/*',
    'templates/*',
  ],
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error',
    '@tanstack/query/no-rest-destructuring': 'error',
    '@tanstack/query/no-unstable-deps': 'error',
    '@tanstack/query/infinite-query-property-order': 'error',
    '@tanstack/query/no-void-query-fn': 'error',
  },
  plugins: {
    '@tanstack/query': pluginQuery,
  },
})
