const getNRQL = ({ limit = 5 }) => {
    return `{
    actor {
      nrql(accounts: 1, query: "SELECT * FROM Transaction limit ${limit}") {
        otherResult
        totalResult
        results
      }
    }
  }`;
};

const getNRQLTimeSeries = ({ metric, limit = 'max' }) => {
    return `SELECT average(\`${metric}\`) FROM Metric SINCE 7 DAYS AGO TIMESERIES 2 DAY LIMIT ${limit}`;
};

export default { getNRQL, getNRQLTimeSeries };
