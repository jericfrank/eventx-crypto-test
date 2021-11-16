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

export const EmptyCard = styled(Card)`
  background-color: #a7a7a724;

  h1 {
    color: #000000a3;
  }

  p {
    color: red;
  }
`;

export const Loader = styled.div`
  font-size: 10px;
  margin: auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
