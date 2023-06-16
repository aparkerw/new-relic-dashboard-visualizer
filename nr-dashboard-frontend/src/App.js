import logo from './logo.svg';
import Metric from './components/molecules/metric';
import Timeseries from './components/molecules/timeseries';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%' }}>
          <Metric metricName={'Static Metric'} metricValue={'100.0'}/>
          <Metric metricName={'Static Metric'} metricValue={'100.0'}/>
          <Metric metricName={'Static Metric'} metricValue={'100.0'}/>
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%' }}>
          <Timeseries seriesName={'CPU'} seriesData={{a:1}}/>
        </div>
      <br/>
      </header>
    </div>
  );
}

export default App;
