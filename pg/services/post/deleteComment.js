const db = require("../..");

module.exports.deleteComment = async (id) => {
  const client = await db.connect();
  const query = `UPDATE comments SET deletedAt=CURRENT_DATE WHERE id = $1;`;
  const res = await client.query(query, [id]);
  return res.rows;
};
