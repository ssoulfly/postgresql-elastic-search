const esClient = require("../../elasticsearch");
const moment = require("moment");

module.exports.getAnnualyBlogStats = async (period) => {
  const date = moment("2020/02/01");
  const annualyResult = await esClient.search({
    index: "blogs",
    body: {
      query: {
        range: {
          createdAt: {
            gte: date.startOf("year").toISOString(),
            lt: date.endOf("year").toISOString(),
          },
        },
      },
      aggs: {
        annualy: {
          date_histogram: {
            field: "createdAt",
            calendar_interval: "month",
          },
        },
      },
    },
  });
  const annualy = annualyResult.aggregations.annualy.buckets.reduce(
    (acc, data) => {
      acc[data.key_as_string] = data.doc_count;
      return acc;
    },
    {}
  );  
  return annualy;
};
