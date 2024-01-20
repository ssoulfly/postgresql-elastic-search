const db = require("../..");

module.exports.updateUser = async (id, updatingFields) => {
  const setQuery = Object.keys(updatingFields)
    .map((key) => `${key} = '${updatingFields[key]}'`)
    .join(",");
  const client = await db.connect();
  const query = `UPDATE users SET ${setQuery}, updatedat = CURRENT_DATE WHERE id = $1 RETURNING *;`;
  const res = await client.query(query, [id]);
  return res.rows[0];
};
