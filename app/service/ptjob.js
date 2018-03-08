'use strict';

const Service = require('egg').Service;

class PtjobService extends Service {
  async list() {
    const list = await this.app.mysql.get('tb_album');
    return { list };
  }
}


module.exports = PtjobService;
