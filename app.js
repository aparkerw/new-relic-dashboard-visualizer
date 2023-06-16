import "dotenv/config.js";
import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";
import { MetricNames, SinceTimeRange, SeriesIntervalTimeRange, AggregateFunctions } from "./Variables.js";

const run = async () => {
  let accounts = await NerdGraphService.getAccounts();
  console.log(accounts);
  let accountId = '3914962';
  let nrql = NRQLService.getNRQLTimeSeries({ metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.WEEK, interval: SeriesIntervalTimeRange.DAY });
  let results = await NerdGraphService.runNRQL(nrql, accountId);
  console.log("results", results);

  let nrql3 = NRQLService.getNRQLTimeSeries({ aggregateFunction: AggregateFunctions.MEDIAN, metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.DAY, interval: SeriesIntervalTimeRange.DAY });
  let results3 = await NerdGraphService.runNRQL(nrql3, accountId);
  console.log("Medain", results3);

  let nrql4 = NRQLService.getNRQLTimeSeries({ aggregateFunction: AggregateFunctions.SUM, metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.DAY, interval: SeriesIntervalTimeRange.DAY });
  let results4 = await NerdGraphService.runNRQL(nrql4, accountId);
  console.log("SUM", results4);

  let nrql5 = NRQLService.getNRQLTimeSeries({ aggregateFunction: AggregateFunctions.COUNT, metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.DAY, interval: SeriesIntervalTimeRange.DAY });
  let results5 = await NerdGraphService.runNRQL(nrql5, accountId);
  console.log("AVERAGE", results5);

  let nrql6 = NRQLService.getNRQLTimeSeries({ aggregateFunction: AggregateFunctions.MEAN, metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.DAY, interval: SeriesIntervalTimeRange.DAY });
  let results6 = await NerdGraphService.runNRQL(nrql6, accountId);
  console.log("MEAN", results6);
}

run();