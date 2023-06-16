import react, { useMemo } from 'react';
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

const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

const Timeseries = (params) => {

  const data = useMemo(() => {
    console.log(params.headers);
    return [
      params.headers,//["Year", "Sales"],
      ...params.seriesData
    ];
  }, [params.headers, params.seriesData]);

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