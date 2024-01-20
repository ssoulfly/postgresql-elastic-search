const pgServices = require("../../pg/services");

module.exports.getUserPosts = async (userId) => {
  const posts = await pgServices.post.getPosts({
    userId,
  });
  return posts;
};
