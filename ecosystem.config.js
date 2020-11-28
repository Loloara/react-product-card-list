module.exports = {
  apps: [
    {
      name: 'Myrealtrip-service',
      script: 'node ./node_modules/next/dist/bin/next start -p 4004',
      watch: false,
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
