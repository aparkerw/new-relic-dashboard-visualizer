import react from 'react';
import styled from 'styled-components';
import { Chart } from "react-google-charts";

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  border-width: 2px;
  padding: 20px;
  height: 420px;
  max-height: 420px;
  width: 580px;
  max-width: 580px;
  overflow: hidden;
  margin: 10px;
`;

const Title = styled.div`
font-size: 18px;
padding: 5px;
`;

const Value = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

const Timeseries = (params) => {
  return (<Wrapper>
    <Title>{params.seriesName}</Title>
    {/* <Value>{JSON.stringify(params.seriesData)}</Value> */}
    <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
  </Wrapper>);
}

export default Timeseries;