const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx){
    const { id } = ctx.state.user;

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.create({...data, user: id}, { files });
    } else {
      entity = await strapi.services.post.create({...ctx.request.body, user: id});
    }

    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  async find(ctx) {
    let entities;

    const query = {...ctx.query, user: ctx.state.user.id}

    if (ctx.query._q) {
      entities = await strapi.services.post.search(query);
    } else {
      entities = await strapi.services.post.find(query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.post }));
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user.id;
    const entity = await strapi.services.post.findOne({ id, user });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  count(ctx) {
    const query = {...ctx.query, user: ctx.state.user.id}
    if (ctx.query._q) {
      return strapi.services.post.countSearch(query);
    }
    return strapi.services.post.count(query);
  },
};
