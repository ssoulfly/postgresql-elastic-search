const pgServices = require("../../pg/services");

module.exports.deletePost = async (id) => {
  const deleted = await pgServices.post.deletePost(id);
  return true
};
