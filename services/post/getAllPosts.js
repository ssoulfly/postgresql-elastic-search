const pgServices = require("../../pg/services");

module.exports.getAllPosts = async (payload) => {
  const posts = await pgServices.post.getPosts(payload);
  return posts;
};
