import react from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  border-width: 2px;
  padding: 20px;
  height: 150px;
  max-height: 150px;
  width: 150px;
  max-width: 150px;
  overflow: hidden;
  margin: 10px;
`;

const Title = styled.div`
font-size: 18px;
`;

const Value = styled.div`
  font-size: 68px;
  font-weight: bold;
`;

const Metric = (params) => {
  return (<Wrapper>
    <Title>{params.metricName}</Title>
    <Value>{JSON.stringify(params.metricValue)}</Value>
  </Wrapper>);
}

export default Metric;