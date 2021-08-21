module.exports = {
  tokenDecrypt: async function(ctx) {
    const { token } = ctx.request.body;

    if (!token) {
      return ctx.badRequest('`token` param is missing')
    }
    try {
      const tokenData = await strapi.plugins[
        'users-permissions'
        ].services.jwt.verify(token);
      return tokenData;

    } catch (err) {
      return ctx.badRequest(err.toString());
    }
  }
};
