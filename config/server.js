module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: true,
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
