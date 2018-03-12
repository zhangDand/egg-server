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
    // const reply = this.ctx.request.body.content || null;

    if (!body) {
      this.ctx.body = 'dead in 1';
    } else if (body.MsgType !== 'text') {
      this.ctx.body = 'dead in 2';
    } else {
      const fromUser = body.ToUserName;
      const toUser = body.FromUserName;
      const content = body.Content;
      const createTime = body.CreateTime;

      const remsg = `<xml> <ToUserName>${toUser}</ToUserName><FromUserName>${fromUser}</FromUserName> <CreateTime>${createTime}</CreateTime> <MsgType>text</MsgType> <Content>${content}</Content> </xml>`;

      this.ctx.body = remsg;
    }
    // this.ctx.body = 'success';
    console.log('req', this.ctx.request.body);
    console.log('res', this.ctx.body);
    // console.log('body', body);
  }
}

module.exports = WxController;
