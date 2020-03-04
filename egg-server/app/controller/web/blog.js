'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async list() {
    const { ctx,app } = this;
    let data = await ctx.service.blog.list()
    ctx.body = app.sendMes(0,'',data)
  }
}

module.exports = BlogController;