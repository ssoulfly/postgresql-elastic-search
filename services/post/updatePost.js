const pgServices = require("../../pg/services");
const { getPost } = require("./getPost");

module.exports.updatePost = async (id, updatingFields) => {
  if (!id) throw new Error("Post id is required.");

  const post = await getPost(id);
  if (!post) throw new Error("This post not found.");

  const acceptedFields = ["title", "description", "category"];
  updatingFields = Object.keys(updatingFields).reduce((acc, field) => {
    if (acceptedFields.includes(field)) acc[field] = updatingFields[field];
    return acc;
  }, {});

  const updated = await pgServices.post.updatePost(id, updatingFields);
  return updated;
};
