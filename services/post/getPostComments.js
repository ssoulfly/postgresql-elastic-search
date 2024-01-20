const pgServices = require("../../pg/services");

module.exports.getPostComments = async (postId) => {
  const comments = await pgServices.post.getComments(postId);
  return comments;
};
