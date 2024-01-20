const esClient = require("../../elasticsearch");

module.exports.getUserStats = async () => {
  const users = await esClient.count({ index: "users" });
  const blogs = await esClient.search({
    index: "blogs",
    body: {
      aggs: {
        reader: {
          cardinality: {
            field: "profile.email.keyword",
          },
        },
      },
    },
  });

  return {
    total: users.count,
    blogger: blogs.aggregations.reader.value,
    reader: users.count - blogs.aggregations.reader.value,
  };
};
