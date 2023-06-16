import { SeriesIntervalTimeRange, SinceTimeRange } from "../Variables.js";

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

const getNRQLTimeSeries = ({ metric, interval = SeriesIntervalTimeRange.DAY, since = SinceTimeRange.WEEK }) => {
    return `SELECT average(\`${metric}\`) FROM Metric SINCE ${since} TIMESERIES ${interval}`;
};

export default { getNRQL, getNRQLTimeSeries };
