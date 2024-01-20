const db = require("../..");
const uuid = require("uuid");

module.exports.createPost = async (title, description, category, userId) => {
  const client = await db.connect();
  const id = uuid.v1();
  const query = `INSERT INTO posts(id, title, description, category, userId) VALUES($1, $2, $3, $4, $5) RETURNING *;`;
  const res = await client.query(query, [
    id,
    title,
    description,
    category,
    userId,
  ]);
  return res.rows[0];
};
