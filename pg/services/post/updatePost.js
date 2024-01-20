const db = require("../..");

module.exports.updatePost = async (id, updatingFields) => {
  const client = await db.connect();
  const setQuery = Object.keys(updatingFields)
    .map((key) => `${key} = '${updatingFields[key]}'`)
    .join(",");
  const query = `UPDATE posts SET ${setQuery}, updatedat = CURRENT_DATE  WHERE id = $1 RETURNING *;`;
  const res = await client.query(query, [id]);
  return res.rows[0];
};
