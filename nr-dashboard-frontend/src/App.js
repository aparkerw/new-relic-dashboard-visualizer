import { useEffect, useState } from 'react';
import Metric from './components/molecules/metric';
import Timeseries from './components/molecules/timeseries';
import './App.css';
import axios from 'axios';

function App() {

  const [pageLoadTimeseries, setPageLoadTimeseries] = useState({});
  const [pageLoadAverage, setPageLoadAverage] = useState(0);

  // load timeseries data
  useEffect(() => {
    const load = async () => {
      let resp = await axios.get('http://localhost:3001/timeseries/golden-page-load-seconds');
      setPageLoadTimeseries(resp.data);
      console.log(resp.data);
    }
    load();
  }, []);

  // load average data
  useEffect(() => {
    const load = async () => {
      let resp = await axios.get('http://localhost:3001/aggregate/golden-page-load-seconds');
      setPageLoadAverage(resp.data);
    }
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%' }}>
          <Metric metricName={'Page Load Time (avg)'} metricValue={pageLoadAverage} />
          <Metric metricName={'Static Metric'} metricValue={'100.0'} />
          <Metric metricName={'Static Metric'} metricValue={'100.0'} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%' }}>
          <Timeseries seriesName={'Page Load Time'} headers={pageLoadTimeseries.headers || ['1','2']} seriesData={pageLoadTimeseries.data || []} />
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
