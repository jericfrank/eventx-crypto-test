import React from 'react';
import styled from 'styled-components';

const P = styled.p<{ error: boolean }>`
  color: ${ props => props.error ? 'red' : 'lightgreen' }!important;
`;

interface FigureProps {
  num: number;
}

const Figure = ({ num }: FigureProps): React.ReactElement => {
  if (isNaN(num)) {
    return <p>-</p>;
  }
  return (
    <P error={ num < 0 }>{ num }</P>
  );
};

export default Figure;
