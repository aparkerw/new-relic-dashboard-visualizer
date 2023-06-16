import "dotenv/config.js";
import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";
import { MetricNames, TimeRange } from "./Variables.js";

const run = async () => {
    let nrql = NRQLService.getNRQLTimeSeries({metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, limit: 1});
    let accounts = await NerdGraphService.getAccounts();
    console.log(accounts);
    let accountId = '3914962';
    let results = await NerdGraphService.runNRQL(nrql, accountId);
    console.log("results", results);
}

run();