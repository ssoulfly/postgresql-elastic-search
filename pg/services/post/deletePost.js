const db = require("../..");

module.exports.deletePost = async (id) => {
  const client = await db.connect();
  const query = `UPDATE posts SET deletedAt=CURRENT_DATE WHERE id = $1;`;
  const res = await client.query(query, [id]);
  await client.query(
    `UPDATE comments SET deletedAt=CURRENT_DATE WHERE postId = $1;`,
    [id]
  );
  return res.rows;
};
