module.exports = ({ env }) => ({
  app: { 
    keys: env.array('APP_KEYS')
  },
  cron: {
    enabled: true,
  },
  proxy: true,
  url: env('APP_URL'), // replaces `host` and `port` properties in the development environment
});