const getNRQL = ({ limit = 5 }) => {
    return `{
    actor {
      nrql(accounts: 1, query: "SELECT * FROM Transaction limit ${limit}") {
        nrql
        otherResult
        rawResponse
        totalResult
        results
      }
    }
  }`;
};

const getNRQLTimeSeries = ({ limit = 'max' }) => {
    return `SELECT average(\`newrelic.goldenmetrics.browser.application.pageLoadSeconds\`) FROM Metric SINCE 7 DAYS AGO TIMESERIES`;
};

export default { getNRQL, getNRQLTimeSeries };
