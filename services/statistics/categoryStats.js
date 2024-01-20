const esClient = require("../../elasticsearch");

module.exports.getCategoryStats = async () => {
  const blogs = await esClient.count({
    index: "blogs",
  });

  const res = await esClient.search({
    index: "blogs",
    body: {
      size: 0,
      aggs: {
        category_percentage: {
          terms: {
            field: "category.keyword",
            size: 4,
          },
        },
      },
    },
  });
  
  return res.aggregations.category_percentage.buckets.map((statistic) => ({
    type: statistic.key,
    percentTage: +((statistic.doc_count / blogs.count) * 100).toFixed(1),
    size: statistic.doc_count,
  }));
};
