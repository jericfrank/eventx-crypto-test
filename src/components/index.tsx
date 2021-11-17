import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 870px;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 10px;
`;

export const Card = styled.div`
  min-height: 118px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;

  h1, h4, h3, p {
    margin: 0;
  }

  h3 {
    color: #F6A82D;
    margin: 8px 0;
  }

  h4 {
    color: #A7A7A7;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  div {
    width: 100%;
  }

  p {
    color: #A7A7A7;
    font-size: 15px;
    margin: 2px 0;
  }
`;
