'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = {
      jobName: '打荷切配和服务员',
      jobDescription: '欢迎各路有志青年加入我们',
    };

    await this.ctx.render('index.njk', data);
  }
}

module.exports = HomeController;
