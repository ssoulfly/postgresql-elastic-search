const db = require("../..");

module.exports.getPosts = async (filters = {}) => {
  const client = await db.connect();
  const setQuery = Object.keys(filters)
    .map((key) => `${key} = '${filters[key]}'`)
    .join("AND");
  const query = `SELECT * FROM posts WHERE deletedAt IS NULL ${
    !!setQuery.length ? " AND " + setQuery : ""
  };`;
  const res = await client.query(query);
  return res.rows;
};
