const esClient = require("../../elasticsearch");
const moment = require("moment");

module.exports.getWeeklyBlogStats = async () => {
  const date = moment("2020/02/01");
  const weeklyResult = await esClient.search({
    index: "blogs",
    body: {
      query: {
        range: {
          createdAt: {
            gte: date.startOf("week").toISOString(),
            lt: date.endOf("week").toISOString(),
          },
        },
      },
      aggs: {
        weekly: {
          date_histogram: {
            field: "createdAt",
            calendar_interval: "day",
          },
        },
      },
    },
  });
  const weekly = weeklyResult.aggregations.weekly.buckets.reduce(
    (acc, data) => {
      acc[data.key_as_string] = data.doc_count;
      return acc;
    },
    {}
  );
  return weekly;
};
