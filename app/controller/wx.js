'use strict';

const Controller = require('egg').Controller;

class WxController extends Controller {
  async wx() {
    const req = this.ctx.request;
    const query = req.query;

    const wxResult = await this.ctx.service.wx.wx(query);
    console.log('[wxresult]', wxResult);
    this.ctx.body = wxResult;
  }

  async wxMsgPost() {
    // const req = this.ctx.request;
    const body = this.ctx.request.body;

    this.ctx.body = 'success';
    console.log('req', this.ctx.req);
    // console.log('body', body);
  }
}

module.exports = WxController;
