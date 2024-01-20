const db = require("../..");
const uuid = require("uuid");

module.exports.createComment = async (postId, userId, content) => {
  const client = await db.connect();
  const id = uuid.v1();
  const query = `INSERT INTO comments(id, postId, userId, content) VALUES($1, $2, $3, $4) RETURNING *;`;
  const res = await client.query(query, [id, postId, userId, content]);
  return res.rows[0];
};
