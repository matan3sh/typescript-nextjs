const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: 'shopify_local',
  },
  i18: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
