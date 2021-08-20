module.exports = async (ctx, next) => {
  console.log('local-policy');
  return await next();
};
