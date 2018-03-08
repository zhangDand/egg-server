'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/list', controller.home.list);
  router.get('/wx', controller.wx.wx);
  router.post('/wx', controller.wx.wxMsgPost);
};
