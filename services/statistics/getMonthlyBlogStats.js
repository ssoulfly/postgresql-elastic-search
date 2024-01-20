const esClient = require("../../elasticsearch");
const moment = require("moment");

module.exports.getMonthlyBlogStats = async () => {
  const date = moment("2020/02/01");
  const monthlyResult = await esClient.search({
    index: "blogs",
    body: {
      query: {
        range: {
          createdAt: {
            gte: date.startOf("month").toISOString(),
            lt: date.endOf("month").toISOString(),
          },
        },
      },
      aggs: {
        monthly: {
          date_histogram: {
            field: "createdAt",
            calendar_interval: "week",
          },
        },
      },
    },
  });
  const monthly = monthlyResult.aggregations.monthly.buckets.reduce(
    (acc, data) => {
      acc[data.key_as_string] = data.doc_count;
      return acc;
    },
    {}
  );
  return monthly;
};
