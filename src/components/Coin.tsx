import React from 'react';
import { Card, Row } from '.';
import { Coin } from '../entities';
import Figure from './Figure';

interface CoinProps {
  coin: Coin;
}

const CoinCard = ({ coin }: CoinProps): React.ReactElement => (
  <Card>
    <h1>{ coin.name }</h1>
    <h3>${ coin.price }</h3>
    <Row>
      <div>
        <h4>volume:</h4>
        <p>{ coin.volume }</p>
      </div>
      <div>
        <h4>change:</h4>
        <Figure num={ coin.change } />
      </div>
    </Row>
  </Card>
);

export default CoinCard;
