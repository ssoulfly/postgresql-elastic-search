const pgServices = require("../../pg/services");

module.exports.getPost = async (id) => {
  const post = await pgServices.post.getPost(id);
  return post;
};
