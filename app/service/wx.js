'use strict';
const crypto = require('crypto');
const Service = require('egg').Service;

class WxService extends Service {
  async wx(query) {
    console.log('[query]', query);
    const signature = query.signature;
    const timestamp = query.timestamp;
    const nonce = query.nonce;
    const echostr = query.echostr;
    const token = 'zdanluk';
    let arr = [ token, timestamp, nonce ];
    console.log('[arr1]', arr);
    arr = arr.sort();
    console.log('[arr2]', arr);
    const str = arr.join('');
    console.log('[str]', str);
    const strsh1 = crypto.createHash('sha1').update(str).digest('hex');
    console.log('[strsh1]', strsh1);
    if (strsh1 === signature) {
      return echostr;
    }
  }
}

module.exports = WxService;
