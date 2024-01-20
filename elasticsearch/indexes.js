const users = require("./users");
const blogs = require("./blogs");
const esClient = require(".");

module.exports.userIndexes = async () => {
  await esClient.helpers.bulk({
    datasource: users,
    onDocument: () => ({ index: { _index: "users" } }),
  });
};

module.exports.blogIndexes = async () => {
  await esClient.helpers.bulk({
    datasource: blogs,
    onDocument: () => ({ index: { _index: "blogs" } }),
  });
};
