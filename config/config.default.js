'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518779710808_9428';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  config.mysql = {
    // 单数据库配置信息
    client: {
      host: '123.207.126.248',
      port: '3306',
      user: 'zdan',
      password: '**Zdanluk666',
      database: 'db_dictionary',

    },
    app: true,
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
