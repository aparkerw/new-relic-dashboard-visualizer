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
`;

const Title = styled.div`
font-size: 18px;
`;

const Value = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Timeseries = (params) => {
  return (<Wrapper>
    <Title>{params.seriesName}</Title>
    <Value>{JSON.stringify(params.seriesData)}</Value>
  </Wrapper>);
}

export default Timeseries;