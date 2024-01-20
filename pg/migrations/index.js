const db = require("../");

const extension = [`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`];
const queries = [
  `DROP TABLE IF EXISTS comments;`,
  `DROP TABLE IF EXISTS posts;`,
  `DROP TABLE IF EXISTS users;`,
  `DROP TYPE IF EXISTS category_types;`,
  `CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        hashPassword VARCHAR(255) NOT NULL,
        token VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deletedAt TIMESTAMP DEFAULT NULL
   );`,
  `CREATE TYPE category_types AS ENUM ('business', 'money', 'technology', 'artificial_intelligence');`,
  `CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR NOT NULL,
    category category_types NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT NULL,
    userId UUID REFERENCES users(id) NOT NULL
  );`,

  `CREATE TABLE IF NOT EXISTS comments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    content VARCHAR NOT NULL,
    postId UUID REFERENCES posts(id) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT NULL,
    userId UUID REFERENCES users(id) NOT NULL
  );`,
];

module.exports.last = async () => {
  const client = await db.connect();
  await client.query(extension.join("\n"));
  await client.query(queries.join("\n"));
  console.log(`Total ${queries.length} Queries Running.`);
};
