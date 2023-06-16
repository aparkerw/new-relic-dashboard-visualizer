import "dotenv/config.js";
import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";
import { MetricNames, SinceTimeRange, SeriesIntervalTimeRange, AggregateFunctions } from "./Variables.js";
import express from 'express';
import cors from 'cors';

const app = express()
const port = 3001
const accountId = '3914962';

app.use(cors({
  origin: '*'
}));

app.get('/timeseries/golden-page-load-seconds', async (req, res) => {
  let nrql = NRQLService.getNRQLTimeSeries({ metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.WEEK, interval: SeriesIntervalTimeRange.DAY });
  let cpuData = await NerdGraphService.runNRQL(nrql, accountId);
  cpuData = cpuData.map(entry => {
    return [entry.beginTimeSeconds, entry['average.newrelic.goldenmetrics.browser.application.pageLoadSeconds']];
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    headers: ['Date','Time (s)'],
    data: cpuData
  }));
})

app.get('/aggregate/golden-page-load-seconds', async (req, res) => {
  let nrql = NRQLService.getAggregate({ metric: MetricNames.GOLDEN_PAGE_LOAD_SECONDS, since: SinceTimeRange.WEEK });
  let cpuOneWeekAverage = await NerdGraphService.runNRQL(nrql, accountId);
  cpuOneWeekAverage = Object.values(cpuOneWeekAverage[0])[0];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(cpuOneWeekAverage));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})