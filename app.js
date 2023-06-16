import "dotenv/config.js";
import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";
import { MetricNames, SinceTimeRange, SeriesIntervalTimeRange } from "./Variables.js";

const run = async () => {
    let accounts = await NerdGraphService.getAccounts();
    console.log(accounts);
    let accountId = '3914962';
    let nrql = NRQLService.getNRQLTimeSeries({metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.WEEK, interval: SeriesIntervalTimeRange.DAY});
    let results = await NerdGraphService.runNRQL(nrql, accountId);
    console.log("results", results);

    let nrql2 = NRQLService.getNRQLTimeSeries({metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.DAY, interval: SeriesIntervalTimeRange.HOUR});
    let results2 = await NerdGraphService.runNRQL(nrql2, accountId);
    console.log("results 2", results2);

    let nrql3 = NRQLService.getNRQLTimeSeries({metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.HOUR, interval: SeriesIntervalTimeRange.MINUTE});
    let results3 = await NerdGraphService.runNRQL(nrql3, accountId);
    console.log("results 3", results3);
}

run();